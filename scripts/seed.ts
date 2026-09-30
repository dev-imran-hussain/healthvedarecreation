import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { env } from '../src/lib/config';
import { Product } from '../src/models/Product';
import { Category } from '../src/models/Category';
import { User } from '../src/models/User';
import { Coupon } from '../src/models/Coupon';

async function seed() {
  console.log('🌱 Connecting to MongoDB Atlas...');
  await mongoose.connect(env.MONGODB_URI);
  console.log('✅ Connected to MongoDB.');

  // 1. Seed Categories
  const categoriesData = [
    { name: 'Vitality & Stamina', slug: 'vitality-stamina', description: 'Cellular endurance and mitochondrial energy' },
    { name: 'Bone & Joint Health', slug: 'bone-joint-health', description: 'Bioavailable minerals for bone density and joint mobility' },
    { name: 'Sleep & Relaxation', slug: 'sleep-relaxation', description: 'Neurotransmitter balance and muscular calmness' },
    { name: 'Skin Glow & Beauty', slug: 'skin-glow-beauty', description: 'Antioxidant and essential fatty acid complexes' },
    { name: 'Women Wellness', slug: 'women-wellness', description: 'Hormonal balance and ovulatory cycle harmony' },
    { name: 'Digestive Health', slug: 'digestive-health', description: 'Full-spectrum plant enzymes and microbiome support' },
  ];

  const categoryMap = new Map();
  for (const cat of categoriesData) {
    const existing = await Category.findOneAndUpdate(
      { slug: cat.slug },
      cat,
      { upsert: true, new: true }
    );
    categoryMap.set(cat.slug, existing._id);
  }
  console.log(`✅ Upserted ${categoryMap.size} categories.`);

  // 2. Seed Catalog Products (Minor units paise, Section 15, displayOrder)
  const products = [
    {
      name: 'Calcium Magnesium Zinc + Plant Vitamin D3',
      slug: 'calcium-magnesium-zinc-vitamin-d3',
      sku: 'HVO-CMZ-60T',
      categoryId: categoryMap.get('bone-joint-health'),
      shortDescription: 'Bioavailable Calcium Citrate Malate with Lichen D3, K2-7, and Hadjod extract.',
      description: 'Comprehensive bone matrix formula engineered for high bioavailability with zero animal by-products.',
      price: 49900,
      compareAtPrice: 79900,
      stock: 250,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/01.CalciumMagnesiummZinc_UpperListing_Slide01New.jpg' },
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/02.CalciumMagnesiummZinc_UpperListing_Slide02New.jpg' }
      ],
      displayOrder: 1,
      isFeatured: true,
      isActive: true,
      attributes: {
        botanicalName: 'Cissus Quadrangularis & Medicago Sativa',
        servingSize: '2 Tablets',
        totalTablets: 60,
      }
    },
    {
      name: 'Himalayan Shilajit Resin with 80% Fulvic Acid',
      slug: 'himalayan-shilajit-resin',
      sku: 'HVO-SHIL-20G',
      categoryId: categoryMap.get('vitality-stamina'),
      shortDescription: 'Harvested at 18,000 ft in Himalayan ranges, rich in 84+ ionic trace minerals.',
      description: 'Purified golden-grade Himalayan Shilajit resin containing 80% bioactive fulvic acid for stamina and cellular vitality.',
      price: 99900,
      compareAtPrice: 149900,
      stock: 180,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/ListingShilajitResinSlide01Update.jpg' }
      ],
      displayOrder: 2,
      isFeatured: true,
      isActive: true,
    },
    {
      name: 'Chelated Magnesium Glycinate 100% Vegan',
      slug: 'chelated-magnesium-glycinate',
      sku: 'HVO-MAG-60C',
      categoryId: categoryMap.get('sleep-relaxation'),
      shortDescription: 'High-absorption bisglycinate for restful sleep and nocturnal muscle relaxation.',
      description: 'Gentle on digestion, chelated magnesium supports neuro-calmness and healthy sleep cycles.',
      price: 62900,
      compareAtPrice: 99900,
      stock: 310,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/Listing_Magnesium_Glycinate_Slide_01_WC.jpg' }
      ],
      displayOrder: 3,
      isFeatured: true,
      isActive: true,
    },
    {
      name: 'Wild Himalayan Sea Buckthorn Capsules',
      slug: 'wild-himalayan-sea-buckthorn',
      sku: 'HVO-SBT-60C',
      categoryId: categoryMap.get('skin-glow-beauty'),
      shortDescription: 'Rare plant source of Omegas 3, 6, 7 & 9 for skin moisture and barrier repair.',
      description: 'Cold-pressed berries from high-altitude Himalayas provide complete essential fatty acid spectrum.',
      price: 54900,
      compareAtPrice: 89900,
      stock: 140,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/Listing_Sea_Buckthorn_Slide_01_New_1_1.jpg' }
      ],
      displayOrder: 4,
      isFeatured: true,
      isActive: true,
    },
    {
      name: 'Plant-Based Glutathione Builder with ALA',
      slug: 'glutathione-builder-ala',
      sku: 'HVO-GLU-60C',
      categoryId: categoryMap.get('skin-glow-beauty'),
      shortDescription: 'Cellular precursor complex with ALA and Vitamin C for luminous skin radiance.',
      description: 'Potent master antioxidant builder that neutralizes free radicals and supports liver detox.',
      price: 74900,
      compareAtPrice: 129900,
      stock: 200,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/Listing_Glutathione_Builder_Slide_01.jpg' }
      ],
      displayOrder: 5,
      isFeatured: true,
      isActive: true,
    },
    {
      name: 'Plant-Based PCOS Care & Hormonal Balance',
      slug: 'plant-based-pcos-care',
      sku: 'HVO-PCOS-60T',
      categoryId: categoryMap.get('women-wellness'),
      shortDescription: 'Myo-Inositol & D-Chiro-Inositol in 40:1 ratio with Shatavari & Kanchnar.',
      description: 'Clinically formulated to support regular menstrual cycles, metabolic health, and clear skin.',
      price: 69900,
      compareAtPrice: 119900,
      stock: 220,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/a._Listing_PCOS_Slide_01_New.jpg' }
      ],
      displayOrder: 6,
      isFeatured: true,
      isActive: true,
    },
    {
      name: 'Plant-Derived Multi Digestive Enzymes',
      slug: 'digestive-enzymes-blend',
      sku: 'HVO-ENZ-60C',
      categoryId: categoryMap.get('digestive-health'),
      shortDescription: 'Full-spectrum enzyme matrix: Amylase, Protease, Lipase & Lactase.',
      description: 'Relieves post-meal heaviness, gas, and supports complete vegetarian nutrient breakdown.',
      price: 44900,
      compareAtPrice: 74900,
      stock: 190,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/a._Listing_Digestive_Enzyme_Slide_01.jpg' }
      ],
      displayOrder: 7,
      isFeatured: true,
      isActive: true,
    },
    {
      name: 'Plant Iron + Bioactive Methylfolate & B12',
      slug: 'plant-iron-methylfolate-b12',
      sku: 'HVO-IRON-60T',
      categoryId: categoryMap.get('vitality-stamina'),
      shortDescription: 'Non-constipating gentle plant iron with L-Methylfolate and active B12.',
      description: 'Gentle on stomach, restores red blood cell formation and combats fatigue.',
      price: 39900,
      compareAtPrice: 64900,
      stock: 260,
      images: [
        { url: '/health-veda-organics-vegan-products-be-vegan.assets/Listing_Iron_Folic_Acid_Slide_01_New_WC.jpg' }
      ],
      displayOrder: 8,
      isFeatured: true,
      isActive: true,
    }
  ];

  for (const prod of products) {
    await Product.findOneAndUpdate(
      { slug: prod.slug },
      prod,
      { upsert: true, new: true }
    );
  }
  console.log(`✅ Upserted ${products.length} catalog products with lean schema.`);

  // 3. Seed Admin User
  const adminEmail = 'admin@healthvedaorganics.com';
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash('HealthVeda@2026', salt);
  await User.findOneAndUpdate(
    { email: adminEmail },
    {
      name: 'Abhishek Sharma (Admin)',
      email: adminEmail,
      passwordHash,
      role: 'admin',
      isActive: true,
      emailVerified: true,
    },
    { upsert: true }
  );
  console.log(`✅ Upserted Admin User: ${adminEmail}`);

  // 4. Seed Default Launch Coupon
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 2); // 2 years valid
  await Coupon.findOneAndUpdate(
    { code: 'VEDA15' },
    {
      code: 'VEDA15',
      type: 'PERCENTAGE',
      value: 15,
      minimumOrderValue: 0,
      maximumDiscount: 50000, // max ₹500 discount
      startsAt: new Date(),
      expiresAt: expiryDate,
      isActive: true,
    },
    { upsert: true }
  );
  console.log('✅ Upserted Coupon: VEDA15 (15% off).');

  console.log('🎉 Database seeding complete!');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('❌ Seeder error:', err);
  process.exit(1);
});

