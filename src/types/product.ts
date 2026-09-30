export interface ProductImage {
  url: string;
  publicId?: string;
}

export interface BotanicalAttributes {
  botanicalName?: string;
  plantPart?: string;
  extractionRatio?: string;
  [key: string]: unknown;
}

export interface NutritionalFact {
  nutrient: string;
  amountPerServing: string;
  percentRDA?: number;
}

