export type GeneratedImage = {
  src: string;
  width: number;
  height: number;
};

export type GeneratedProjectImages = {
  card: GeneratedImage;
  hero: GeneratedImage;
  gallery: GeneratedImage[];
};

export const avatarImage: GeneratedImage = {
  "src": "/generated-images/avatar.webp",
  "width": 560,
  "height": 762
};

export const projectImages: Record<string, GeneratedProjectImages> = {
  "lumina-it": {
    "card": {
      "src": "/generated-images/lumina-it/card.webp",
      "width": 820,
      "height": 1723
    },
    "hero": {
      "src": "/generated-images/lumina-it/hero.webp",
      "width": 1440,
      "height": 3025
    },
    "gallery": [
      {
        "src": "/generated-images/lumina-it/gallery-1-lumina-it-full.webp",
        "width": 1440,
        "height": 3025
      },
      {
        "src": "/generated-images/lumina-it/gallery-2-lumina-it-details.webp",
        "width": 500,
        "height": 705
      },
      {
        "src": "/generated-images/lumina-it/gallery-3-lumina-it-features.webp",
        "width": 500,
        "height": 705
      }
    ]
  },
  "ai-story-video": {
    "card": {
      "src": "/generated-images/ai-story-video/card.webp",
      "width": 820,
      "height": 1044
    },
    "hero": {
      "src": "/generated-images/ai-story-video/hero.webp",
      "width": 1440,
      "height": 1834
    },
    "gallery": [
      {
        "src": "/generated-images/ai-story-video/gallery-1-ai-story-video-full.webp",
        "width": 1440,
        "height": 1834
      },
      {
        "src": "/generated-images/ai-story-video/gallery-2-ai-story-video-details.webp",
        "width": 500,
        "height": 705
      },
      {
        "src": "/generated-images/ai-story-video/gallery-3-ai-story-video-features.webp",
        "width": 500,
        "height": 705
      }
    ]
  },
  "webgrade-analyzer": {
    "card": {
      "src": "/generated-images/webgrade-analyzer/card.webp",
      "width": 820,
      "height": 1714
    },
    "hero": {
      "src": "/generated-images/webgrade-analyzer/hero.webp",
      "width": 1440,
      "height": 3009
    },
    "gallery": [
      {
        "src": "/generated-images/webgrade-analyzer/gallery-1-webgrade-analyzer-full.webp",
        "width": 1440,
        "height": 3009
      },
      {
        "src": "/generated-images/webgrade-analyzer/gallery-2-website-grading-v0.webp",
        "width": 960,
        "height": 473
      }
    ]
  },
  "modern-estate-vision": {
    "card": {
      "src": "/generated-images/modern-estate-vision/card.webp",
      "width": 820,
      "height": 404
    },
    "hero": {
      "src": "/generated-images/modern-estate-vision/hero.webp",
      "width": 1440,
      "height": 709
    },
    "gallery": [
      {
        "src": "/generated-images/modern-estate-vision/gallery-1-meridian-large.webp",
        "width": 1440,
        "height": 709
      }
    ]
  },
  "cleanfile-agency": {
    "card": {
      "src": "/generated-images/cleanfile-agency/card.webp",
      "width": 820,
      "height": 407
    },
    "hero": {
      "src": "/generated-images/cleanfile-agency/hero.webp",
      "width": 1440,
      "height": 714
    },
    "gallery": [
      {
        "src": "/generated-images/cleanfile-agency/gallery-1-cleanfile-agency-full.webp",
        "width": 1440,
        "height": 714
      },
      {
        "src": "/generated-images/cleanfile-agency/gallery-2-cleanfile-agency-details.webp",
        "width": 500,
        "height": 705
      },
      {
        "src": "/generated-images/cleanfile-agency/gallery-3-cleanfile-agency-features.webp",
        "width": 500,
        "height": 705
      }
    ]
  },
  "photo-printing-order": {
    "card": {
      "src": "/generated-images/photo-printing-order/card.webp",
      "width": 820,
      "height": 407
    },
    "hero": {
      "src": "/generated-images/photo-printing-order/hero.webp",
      "width": 1440,
      "height": 714
    },
    "gallery": [
      {
        "src": "/generated-images/photo-printing-order/gallery-1-photo-printing-full.webp",
        "width": 1440,
        "height": 714
      },
      {
        "src": "/generated-images/photo-printing-order/gallery-2-photo-printing-details.webp",
        "width": 500,
        "height": 705
      },
      {
        "src": "/generated-images/photo-printing-order/gallery-3-photo-printing-features.webp",
        "width": 500,
        "height": 705
      }
    ]
  },
  "dent-dental-clinic": {
    "card": {
      "src": "/generated-images/dent-dental-clinic/card.webp",
      "width": 820,
      "height": 400
    },
    "hero": {
      "src": "/generated-images/dent-dental-clinic/hero.webp",
      "width": 1024,
      "height": 500
    },
    "gallery": [
      {
        "src": "/generated-images/dent-dental-clinic/gallery-1-dent-showcase.webp",
        "width": 1024,
        "height": 500
      }
    ]
  },
  "ecommerce-platform": {
    "card": {
      "src": "/generated-images/ecommerce-platform/card.webp",
      "width": 820,
      "height": 412
    },
    "hero": {
      "src": "/generated-images/ecommerce-platform/hero.webp",
      "width": 1440,
      "height": 723
    },
    "gallery": [
      {
        "src": "/generated-images/ecommerce-platform/gallery-1-ecommerce-large.webp",
        "width": 1440,
        "height": 723
      }
    ]
  },
  "fitlite-ai-fitness": {
    "card": {
      "src": "/generated-images/fitlite-ai-fitness/card.webp",
      "width": 820,
      "height": 402
    },
    "hero": {
      "src": "/generated-images/fitlite-ai-fitness/hero.webp",
      "width": 1440,
      "height": 706
    },
    "gallery": [
      {
        "src": "/generated-images/fitlite-ai-fitness/gallery-1-fitness-large.webp",
        "width": 1440,
        "height": 706
      }
    ]
  },
  "ftball-ecommerce": {
    "card": {
      "src": "/generated-images/ftball-ecommerce/card.webp",
      "width": 820,
      "height": 641
    },
    "hero": {
      "src": "/generated-images/ftball-ecommerce/hero.webp",
      "width": 1130,
      "height": 884
    },
    "gallery": [
      {
        "src": "/generated-images/ftball-ecommerce/gallery-1-ftball-large.webp",
        "width": 1130,
        "height": 884
      }
    ]
  },
  "la-cuisine-restaurant": {
    "card": {
      "src": "/generated-images/la-cuisine-restaurant/card.webp",
      "width": 820,
      "height": 574
    },
    "hero": {
      "src": "/generated-images/la-cuisine-restaurant/hero.webp",
      "width": 1292,
      "height": 905
    },
    "gallery": [
      {
        "src": "/generated-images/la-cuisine-restaurant/gallery-1-restaurents-large.webp",
        "width": 1292,
        "height": 905
      }
    ]
  },
  "lolchat-gaming": {
    "card": {
      "src": "/generated-images/lolchat-gaming/card.webp",
      "width": 820,
      "height": 461
    },
    "hero": {
      "src": "/generated-images/lolchat-gaming/hero.webp",
      "width": 1440,
      "height": 810
    },
    "gallery": [
      {
        "src": "/generated-images/lolchat-gaming/gallery-1-lol-large.webp",
        "width": 1440,
        "height": 810
      }
    ]
  },
  "property-investment": {
    "card": {
      "src": "/generated-images/property-investment/card.webp",
      "width": 820,
      "height": 404
    },
    "hero": {
      "src": "/generated-images/property-investment/hero.webp",
      "width": 1440,
      "height": 709
    },
    "gallery": [
      {
        "src": "/generated-images/property-investment/gallery-1-property-consultation.webp",
        "width": 1440,
        "height": 709
      }
    ]
  },
  "speed-typer-game": {
    "card": {
      "src": "/generated-images/speed-typer-game/card.webp",
      "width": 820,
      "height": 406
    },
    "hero": {
      "src": "/generated-images/speed-typer-game/hero.webp",
      "width": 1440,
      "height": 712
    },
    "gallery": [
      {
        "src": "/generated-images/speed-typer-game/gallery-1-typing-game-large.webp",
        "width": 1440,
        "height": 712
      }
    ]
  },
  "sspace-star-map": {
    "card": {
      "src": "/generated-images/sspace-star-map/card.webp",
      "width": 820,
      "height": 408
    },
    "hero": {
      "src": "/generated-images/sspace-star-map/hero.webp",
      "width": 1440,
      "height": 716
    },
    "gallery": [
      {
        "src": "/generated-images/sspace-star-map/gallery-1-sspace-large.webp",
        "width": 1440,
        "height": 716
      }
    ]
  },
  "unit-converter": {
    "card": {
      "src": "/generated-images/unit-converter/card.webp",
      "width": 820,
      "height": 569
    },
    "hero": {
      "src": "/generated-images/unit-converter/hero.webp",
      "width": 1440,
      "height": 1000
    },
    "gallery": [
      {
        "src": "/generated-images/unit-converter/gallery-1-unit-converter-full.webp",
        "width": 1440,
        "height": 1000
      }
    ]
  },
  "wallpaper-generator": {
    "card": {
      "src": "/generated-images/wallpaper-generator/card.webp",
      "width": 820,
      "height": 413
    },
    "hero": {
      "src": "/generated-images/wallpaper-generator/hero.webp",
      "width": 1440,
      "height": 726
    },
    "gallery": [
      {
        "src": "/generated-images/wallpaper-generator/gallery-1-wallpaper-large.webp",
        "width": 1440,
        "height": 726
      }
    ]
  },
  "epic-chicken-adventure": {
    "card": {
      "src": "/generated-images/epic-chicken-adventure/card.webp",
      "width": 820,
      "height": 408
    },
    "hero": {
      "src": "/generated-images/epic-chicken-adventure/hero.webp",
      "width": 1440,
      "height": 717
    },
    "gallery": [
      {
        "src": "/generated-images/epic-chicken-adventure/gallery-1-chicken-large.webp",
        "width": 1440,
        "height": 717
      }
    ]
  }
};

export function getProjectImages(slug: string) {
  return projectImages[slug];
}
