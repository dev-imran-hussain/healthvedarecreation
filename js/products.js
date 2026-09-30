/**
 * HEALTH VEDA ORGANICS - PRODUCTS & QUICK LOOK MODAL MODULE
 */

import { addToCart } from './cart.js';

export const productsData = {
    shilajit: {
        id: 'shilajit',
        name: 'Himalayan Shilajit Resin with 80% Fulvic Acid',
        price: 999,
        originalPrice: 1499,
        category: 'Cellular Stamina & Vitality',
        rating: '★★★★★ (1,480 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/ListingShilajitResinSlide01Update.jpg',
        bullets: [
            'Harvested at 18,000 ft in high-altitude Himalayan ranges',
            'Rich in 84+ ionic trace minerals and natural fulvic compounds',
            'Supports ATP cellular energy, physical endurance & vitality',
            'Triple lab-screened for heavy metals & certified 100% vegan'
        ]
    },
    seabuckthorn: {
        id: 'seabuckthorn',
        name: 'Wild Himalayan Sea Buckthorn Capsules',
        price: 549,
        originalPrice: 899,
        category: 'Skin Glow & Omega Spectrum',
        rating: '★★★★★ (820 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/Listing_Sea_Buckthorn_Slide_01_New_1_1.jpg',
        bullets: [
            'Rare, potent plant source of Omegas 3, 6, 7 & 9 in natural synergy',
            'Cold-pressed extraction preserves fragile biological antioxidants',
            'Enhances skin moisture barrier and cellular dermal repair',
            'Plant-cellulose vegetarian capsules with zero animal gelatin'
        ]
    },
    magnesium: {
        id: 'magnesium',
        name: 'Chelated Magnesium Glycinate 100% Vegan',
        price: 629,
        originalPrice: 999,
        category: 'Deep Sleep & Muscle Relaxation',
        rating: '★★★★★ (640 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/Listing_Magnesium_Glycinate_Slide_01_WC.jpg',
        bullets: [
            'High-absorption chelated bisglycinate form gentle on digestive tract',
            'Promotes restful sleep architecture and nocturnal muscle calming',
            'Supports healthy neurological neurotransmitter balance',
            'Zero petroleum additives, binders, or artificial coloring'
        ]
    },
    calcium: {
        id: 'calcium',
        name: 'Calcium Magnesium Zinc + Plant Vitamin D3',
        price: 499,
        originalPrice: 799,
        category: 'Bone Matrix & Joint Mobility',
        rating: '★★★★★ (2,110 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/01.CalciumMagnesiummZinc_UpperListing_Slide01New.jpg',
        bullets: [
            '100% Lichen-derived plant Cholecalciferol (D3) paired with K2-7',
            'Bioavailable Calcium Citrate Malate for high osteo-absorption',
            'Includes Hadjod (Cissus Quadrangularis) and organic Alfalfa powder',
            'Formulated to prevent calcium arterial plaque deposition'
        ]
    },
    glutathione: {
        id: 'glutathione',
        name: 'Plant-Based Glutathione Builder with ALA',
        price: 749,
        originalPrice: 1299,
        category: 'Melanin Balance & Skin Radiance',
        rating: '★★★★★ (950 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/Listing_Glutathione_Builder_Slide_01.jpg',
        bullets: [
            'Cellular precursor complex featuring Alpha Lipoic Acid & Vitamin C',
            'Shields against oxidative stress and photo-induced pigmentation',
            'Supports systemic hepatic detoxification pathways',
            'Clinical dosage formulated for luminous skin clarity'
        ]
    },
    pcos: {
        id: 'pcos',
        name: 'Plant-Based PCOS Care & Hormonal Balance',
        price: 699,
        originalPrice: 1199,
        category: 'Hormonal Harmony & Cycle Regularity',
        rating: '★★★★★ (1,340 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/a._Listing_PCOS_Slide_01_New.jpg',
        bullets: [
            'Myo-Inositol & D-Chiro-Inositol in clinically validated 40:1 ratio',
            'Ayurvedic Shatavari & Kanchnar extract to regulate ovulatory cycles',
            'Diminishes facial hair growth, acne flare-ups & mood instability',
            'Certified 100% natural, hormone-free and non-GMO'
        ]
    },
    enzymes: {
        id: 'enzymes',
        name: 'Plant-Derived Multi Digestive Enzymes',
        price: 449,
        originalPrice: 749,
        category: 'Microbiome & Nutrient Absorption',
        rating: '★★★★★ (730 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/a._Listing_Digestive_Enzyme_Slide_01.jpg',
        bullets: [
            'Full-spectrum vegan enzyme matrix: Amylase, Protease, Lipase & Lactase',
            'Soothes post-meal bloating, gas, acid reflux and sluggish digestion',
            'Enhances micronutrient bioavailability from vegetarian meals',
            'Acid-resistant delivery for survival in gastric environment'
        ]
    },
    iron: {
        id: 'iron',
        name: 'Plant Iron + Bioactive Methylfolate & B12',
        price: 399,
        originalPrice: 649,
        category: 'RBC & Anti-Fatigue Defense',
        rating: '★★★★★ (510 reviews)',
        image: 'health-veda-organics-vegan-products-be-vegan.assets/Listing_Iron_Folic_Acid_Slide_01_New_WC.jpg',
        bullets: [
            'Non-constipating gentle plant iron source with natural Vitamin C',
            'Features L-Methylfolate & active Methylcobalamin for rapid vitality',
            'Combats mental fog, chronic fatigue, and iron-deficiency anemia',
            '100% stomach-gentle vegetarian formula'
        ]
    }
};

export function openQuickLook(productId) {
    const data = productsData[productId];
    if (!data) return;

    const quickModal = document.getElementById('quick-modal-overlay');
    const modalContainer = document.getElementById('modal-content-container');
    if (!quickModal || !modalContainer) return;

    modalContainer.innerHTML = `
        <div class="modal-img-col">
            <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="modal-info-col">
            <span class="modal-badge">${data.category}</span>
            <h2>${data.name}</h2>
            <div class="stars" style="margin-bottom: 0.5rem; color: #c5a059;">${data.rating}</div>
            
            <div class="modal-price-box">
                <span class="current-price" style="font-size: 1.35rem; font-weight: 700; color: #163c31;">₹${data.price}</span>
                <span style="font-size: 13px; color: #889990; text-decoration: line-through; margin-left: 8px;">₹${data.originalPrice}</span>
            </div>

            <ul class="modal-bullets">
                ${data.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>

            <button class="btn btn-add-cart modal-add-btn" style="padding: 12px; font-size: 13.5px; width: 100%; text-align: center;" 
                data-id="${data.id}" data-name="${data.name.replace(/"/g, '&quot;')}" data-price="${data.price}" data-img="${data.image}">
                Add to Cart • ₹${data.price}
            </button>
        </div>
    `;

    // Bind add-to-cart inside modal
    const modalAddBtn = modalContainer.querySelector('.modal-add-btn');
    modalAddBtn?.addEventListener('click', () => {
        addToCart(data.id, data.name, data.price, data.image);
        closeQuickLook();
    });

    quickModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeQuickLook() {
    const quickModal = document.getElementById('quick-modal-overlay');
    quickModal?.classList.remove('active');
    document.body.style.overflow = '';
}

export function initProducts() {
    // Filter controls
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            productItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Category Goal Cards Click to Scroll to Products
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const target = document.getElementById('products');
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Quick View Buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const prodId = btn.getAttribute('data-product');
            openQuickLook(prodId);
        });
    });

    const quickModalClose = document.getElementById('modal-close-btn');
    const quickModal = document.getElementById('quick-modal-overlay');

    quickModalClose?.addEventListener('click', closeQuickLook);
    quickModal?.addEventListener('click', (e) => {
        if (e.target === quickModal) closeQuickLook();
    });
}
