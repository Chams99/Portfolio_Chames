import type { ImageMetadata } from "astro";

import avatarImage from "@/assets/images/avatar.webp";

import aiStoryVideoDetails from "@/assets/images/projects/ai-story-video-details.png";
import aiStoryVideoFeatures from "@/assets/images/projects/ai-story-video-features.png";
import aiStoryVideoFull from "@/assets/images/projects/ai-story-video-full.png";
import cleanfileAgencyDetails from "@/assets/images/projects/cleanfile-agency-details.png";
import cleanfileAgencyFeatures from "@/assets/images/projects/cleanfile-agency-features.png";
import cleanfileAgencyFull from "@/assets/images/projects/cleanfile-agency-full.png";
import luminaItDetails from "@/assets/images/projects/lumina-it-details.png";
import luminaItFeatures from "@/assets/images/projects/lumina-it-features.png";
import luminaItFull from "@/assets/images/projects/lumina-it-full.png";
import photoPrintingDetails from "@/assets/images/projects/photo-printing-details.png";
import photoPrintingFeatures from "@/assets/images/projects/photo-printing-features.png";
import photoPrintingFull from "@/assets/images/projects/photo-printing-full.png";
import propertyConsultation from "@/assets/images/projects/property-consultation.png";
import unitConverterFull from "@/assets/images/projects/unit-converter-full.png";
import webgradeAnalyzerFull from "@/assets/images/projects/webgrade-analyzer-full.png";
import websiteGradingV0 from "@/assets/images/projects/website-grading-v0.png";

import chickenLarge from "@/assets/images/optimized/chicken-large.webp";
import dentShowcase from "@/assets/images/optimized/dent-showcase.png";
import ecommerceLarge from "@/assets/images/optimized/ecommerce-large.webp";
import fitnessLarge from "@/assets/images/optimized/Fitness-large.webp";
import ftballLarge from "@/assets/images/optimized/FTBALL-large.webp";
import lolLarge from "@/assets/images/optimized/lol-large.webp";
import meridianLarge from "@/assets/images/optimized/meridian-large.webp";
import restaurentsLarge from "@/assets/images/optimized/restaurents-large.webp";
import sspaceLarge from "@/assets/images/optimized/sspace-large.webp";
import typingGameLarge from "@/assets/images/optimized/typing-game-large.webp";
import wallpaperLarge from "@/assets/images/optimized/wallpaper-large.webp";

export { avatarImage };

export type ProjectMedia = {
  hero: ImageMetadata;
  gallery: ImageMetadata[];
};

const projectMedia: Record<string, ProjectMedia> = {
  "lumina-it": {
    hero: luminaItFull,
    gallery: [luminaItFull, luminaItDetails, luminaItFeatures],
  },
  "ai-story-video": {
    hero: aiStoryVideoFull,
    gallery: [aiStoryVideoFull, aiStoryVideoDetails, aiStoryVideoFeatures],
  },
  "webgrade-analyzer": {
    hero: webgradeAnalyzerFull,
    gallery: [webgradeAnalyzerFull, websiteGradingV0],
  },
  "modern-estate-vision": {
    hero: meridianLarge,
    gallery: [meridianLarge],
  },
  "cleanfile-agency": {
    hero: cleanfileAgencyFull,
    gallery: [cleanfileAgencyFull, cleanfileAgencyDetails, cleanfileAgencyFeatures],
  },
  "photo-printing-order": {
    hero: photoPrintingFull,
    gallery: [photoPrintingFull, photoPrintingDetails, photoPrintingFeatures],
  },
  "dent-dental-clinic": {
    hero: dentShowcase,
    gallery: [dentShowcase],
  },
  "ecommerce-platform": {
    hero: ecommerceLarge,
    gallery: [ecommerceLarge],
  },
  "fitlite-ai-fitness": {
    hero: fitnessLarge,
    gallery: [fitnessLarge],
  },
  "ftball-ecommerce": {
    hero: ftballLarge,
    gallery: [ftballLarge],
  },
  "la-cuisine-restaurant": {
    hero: restaurentsLarge,
    gallery: [restaurentsLarge],
  },
  "lolchat-gaming": {
    hero: lolLarge,
    gallery: [lolLarge],
  },
  "property-investment": {
    hero: propertyConsultation,
    gallery: [propertyConsultation],
  },
  "speed-typer-game": {
    hero: typingGameLarge,
    gallery: [typingGameLarge],
  },
  "sspace-star-map": {
    hero: sspaceLarge,
    gallery: [sspaceLarge],
  },
  "unit-converter": {
    hero: unitConverterFull,
    gallery: [unitConverterFull],
  },
  "wallpaper-generator": {
    hero: wallpaperLarge,
    gallery: [wallpaperLarge],
  },
  "epic-chicken-adventure": {
    hero: chickenLarge,
    gallery: [chickenLarge],
  },
};

export function getProjectMedia(slug: string) {
  return projectMedia[slug];
}
