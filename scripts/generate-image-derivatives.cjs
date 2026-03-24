const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const outDir = path.join(root, "public", "generated-images");
const dataFile = path.join(root, "src", "data", "generatedImages.ts");

const avatarSource = "public/images/avatar.webp";

const projectSources = {
  "lumina-it": {
    hero: "public/images/projects/lumina-it-full.png",
    gallery: [
      "public/images/projects/lumina-it-full.png",
      "public/images/projects/lumina-it-details.png",
      "public/images/projects/lumina-it-features.png",
    ],
  },
  "ai-story-video": {
    hero: "public/images/projects/ai-story-video-full.png",
    gallery: [
      "public/images/projects/ai-story-video-full.png",
      "public/images/projects/ai-story-video-details.png",
      "public/images/projects/ai-story-video-features.png",
    ],
  },
  "webgrade-analyzer": {
    hero: "public/images/projects/webgrade-analyzer-full.png",
    gallery: [
      "public/images/projects/webgrade-analyzer-full.png",
      "public/images/projects/website-grading-v0.png",
    ],
  },
  "modern-estate-vision": {
    hero: "public/images/optimized/meridian-large.webp",
    gallery: ["public/images/optimized/meridian-large.webp"],
  },
  "cleanfile-agency": {
    hero: "public/images/projects/cleanfile-agency-full.png",
    gallery: [
      "public/images/projects/cleanfile-agency-full.png",
      "public/images/projects/cleanfile-agency-details.png",
      "public/images/projects/cleanfile-agency-features.png",
    ],
  },
  "photo-printing-order": {
    hero: "public/images/projects/photo-printing-full.png",
    gallery: [
      "public/images/projects/photo-printing-full.png",
      "public/images/projects/photo-printing-details.png",
      "public/images/projects/photo-printing-features.png",
    ],
  },
  "dent-dental-clinic": {
    hero: "public/images/optimized/dent-showcase.png",
    gallery: ["public/images/optimized/dent-showcase.png"],
  },
  "ecommerce-platform": {
    hero: "public/images/optimized/ecommerce-large.webp",
    gallery: ["public/images/optimized/ecommerce-large.webp"],
  },
  "fitlite-ai-fitness": {
    hero: "public/images/optimized/Fitness-large.webp",
    gallery: ["public/images/optimized/Fitness-large.webp"],
  },
  "ftball-ecommerce": {
    hero: "public/images/optimized/FTBALL-large.webp",
    gallery: ["public/images/optimized/FTBALL-large.webp"],
  },
  "la-cuisine-restaurant": {
    hero: "public/images/optimized/restaurents-large.webp",
    gallery: ["public/images/optimized/restaurents-large.webp"],
  },
  "lolchat-gaming": {
    hero: "public/images/optimized/lol-large.webp",
    gallery: ["public/images/optimized/lol-large.webp"],
  },
  "property-investment": {
    hero: "public/images/projects/property-consultation.png",
    gallery: ["public/images/projects/property-consultation.png"],
  },
  "speed-typer-game": {
    hero: "public/images/optimized/typing-game-large.webp",
    gallery: ["public/images/optimized/typing-game-large.webp"],
  },
  "sspace-star-map": {
    hero: "public/images/optimized/sspace-large.webp",
    gallery: ["public/images/optimized/sspace-large.webp"],
  },
  "unit-converter": {
    hero: "public/images/projects/unit-converter-full.png",
    gallery: ["public/images/projects/unit-converter-full.png"],
  },
  "wallpaper-generator": {
    hero: "public/images/optimized/wallpaper-large.webp",
    gallery: ["public/images/optimized/wallpaper-large.webp"],
  },
  "epic-chicken-adventure": {
    hero: "public/images/optimized/chicken-large.webp",
    gallery: ["public/images/optimized/chicken-large.webp"],
  },
};

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function variantName(filePath) {
  return path.basename(filePath, path.extname(filePath)).replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function generateVariant(inputRelative, outputRelative, options) {
  const inputPath = path.join(root, inputRelative);
  const outputPath = path.join(outDir, outputRelative);
  await ensureDir(path.dirname(outputPath));

  const pipeline = sharp(inputPath, { animated: false }).rotate();
  const metadata = await pipeline.metadata();
  const width = metadata.width || options.width;
  const targetWidth = Math.min(width, options.width);

  await pipeline
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: options.quality, effort: 6 })
    .toFile(outputPath);

  const outMeta = await sharp(outputPath).metadata();
  return {
    src: toPosix(`/generated-images/${outputRelative}`),
    width: outMeta.width,
    height: outMeta.height,
  };
}

async function main() {
  await ensureDir(outDir);

  const avatar = await generateVariant(avatarSource, "avatar.webp", { width: 560, quality: 78 });
  const projectImages = {};

  for (const [slug, config] of Object.entries(projectSources)) {
    const slugDir = slug;
    const card = await generateVariant(config.hero, `${slugDir}/card.webp`, { width: 820, quality: 68 });
    const hero = await generateVariant(config.hero, `${slugDir}/hero.webp`, { width: 1440, quality: 74 });

    const gallery = [];
    for (let index = 0; index < config.gallery.length; index += 1) {
      const source = config.gallery[index];
      const file = `${slugDir}/gallery-${index + 1}-${variantName(source)}.webp`;
      const width = index === 0 ? 1440 : 960;
      const quality = index === 0 ? 74 : 70;
      gallery.push(await generateVariant(source, file, { width, quality }));
    }

    projectImages[slug] = { card, hero, gallery };
  }

  const output = `export type GeneratedImage = {\n  src: string;\n  width: number;\n  height: number;\n};\n\nexport type GeneratedProjectImages = {\n  card: GeneratedImage;\n  hero: GeneratedImage;\n  gallery: GeneratedImage[];\n};\n\nexport const avatarImage: GeneratedImage = ${JSON.stringify(avatar, null, 2)};\n\nexport const projectImages: Record<string, GeneratedProjectImages> = ${JSON.stringify(projectImages, null, 2)};\n\nexport function getProjectImages(slug: string) {\n  return projectImages[slug];\n}\n`;

  await fs.promises.writeFile(dataFile, output);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
