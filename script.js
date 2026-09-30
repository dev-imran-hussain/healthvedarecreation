/**
 * Health Veda Organics - Interactive Systems
 * Includes: Cart Drawer State, Product Filters, Parallax Effects, Quick Look Modals
 */

// --- 1. PRODUCT DATABASE FOR QUICK LOOK MODAL ---
const productsData = {
    shilajit: {
        name: "Pure Himalayan Shilajit Resin with Fulvic Acid",
        category: "Stamina & Vitality",
        price: 899,
        originalPrice: 1499,
        rating: "★★★★★ (1,240 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/ListingShilajitResinSlide01Update.jpg",
        bullets: [
            "Purified with traditional Ayurvedic Shodhana technique using Triphala",
            "Contains >75% natural Fulvic Acid and 84+ ionic trace minerals",
            "Boosts cellular ATP synthesis, endurance, vigour, and cognitive sharpness",
            "Lab tested for heavy metals with batch certificate of analysis"
        ]
    },
    seabuckthorn: {
        name: "Sea Buckthorn Superfruit Cold-Pressed Formulation",
        category: "Immunity & Rare Omegas",
        price: 549,
        originalPrice: 899,
        rating: "★★★★★ (890 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/Listing_Sea_Buckthorn_Slide_01_New_1_1.jpg",
        bullets: [
            "Complete botanical spectrum of Omega 3, 6, 7 & 9 fatty acids",
            "Wild-harvested berries from the high-altitude Ladakh Himalayas",
            "Nourishes mucosal membranes, gut lining, and dermal moisture retention",
            "100% vegetarian softgels with zero fishy burps or artificial preservatives"
        ]
    },
    magnesium: {
        name: "Chelated Magnesium Glycinate 100% Vegan",
        category: "Deep Sleep & Muscle Relief",
        price: 629,
        originalPrice: 999,
        rating: "★★★★★ (640 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/Listing_Magnesium_Glycinate_Slide_01_WC.jpg",
        bullets: [
            "Highest bioavailability chelated bisglycinate form that is gentle on digestion",
            "Relaxes tight evening muscles, nocturnal cramps, and restless legs",
            "Calms central nervous system and supports natural melatonin rhythm",
            "Zero laxative effect compared to cheap magnesium oxide"
        ]
    },
    calcium: {
        name: "Calcium Magnesium Zinc + Plant Vitamin D3",
        category: "Bone Density & Posture",
        price: 499,
        originalPrice: 799,
        rating: "★★★★★ (2,110 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/01.CalciumMagnesiummZinc_UpperListing_Slide01New.jpg",
        bullets: [
            "Bio-fermented plant calcium with natural elemental co-factors",
            "Synergized with vegan Lichen Vitamin D3 and fermented Menaquinone K2-7",
            "Directs calcium straight to bone matrix instead of arterial walls",
            "Supports bone mineral density, dental strength, and joint lubrication"
        ]
    },
    glutathione: {
        name: "Plant-Based Glutathione Builder with ALA & Vitamin C",
        category: "Cellular Luminescence",
        price: 749,
        originalPrice: 1299,
        rating: "★★★★★ (950 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/Listing_Glutathione_Builder_Slide_01.jpg",
        bullets: [
            "Contains precursor amino acids N-Acetyl Cysteine, L-Glycine, and L-Glutamine",
            "Spiked with Alpha Lipoic Acid to recycle existing antioxidant pools",
            "Fades hyperpigmentation, uneven sun spots, and boosts collagen elasticity",
            "100% non-GMO, gluten-free, vegan plant complex"
        ]
    },
    pcos: {
        name: "PCOS & PCOD Care Balance Tablets",
        category: "Hormonal Harmony",
        price: 699,
        originalPrice: 1199,
        rating: "★★★★★ (1,480 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/a._Listing_PCOS_Slide_01_New.jpg",
        bullets: [
            "Clinically recognized 40:1 ratio of Myo-Inositol to D-Chiro-Inositol",
            "Formulated with Shatavari, Kanchnar, and Folate to regulate menstrual flow",
            "Controls androgen excess to minimize hormonal acne and hirsutism",
            "Non-hormonal, non-habit forming herbal remedy"
        ]
    },
    enzymes: {
        name: "Multi-Spectrum Plant Digestive Enzymes",
        category: "Gut Biome & Digestion",
        price: 529,
        originalPrice: 849,
        rating: "★★★★★ (720 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/a._Listing_Digestive_Enzyme_Slide_01.jpg",
        bullets: [
            "Comprehensive fungal and plant-derived enzyme matrix: Amylase, Protease, Lipase, Lactase, Cellulase",
            "Breaks down complex carbohydrates, heavy proteins, plant fibers, and fats",
            "Rapid relief from post-prandial heaviness, bloating, and indigestion",
            "Stable through gastric stomach acid to reach the intestines alive"
        ]
    },
    iron: {
        name: "Plant-Based Iron + Active Folic Acid",
        category: "Energy & RBC Support",
        price: 479,
        originalPrice: 749,
        rating: "★★★★★ (530 verified reviews)",
        image: "health-veda-organics-vegan-products-be-vegan.assets/Listing_Iron_Folic_Acid_Slide_01_New_WC.jpg",
        bullets: [
            "Extracted from organic Curry Leaf (Murraya koenigii) and Spinach",
            "100% gentle on sensitive stomachs with no metallic nausea or constipation",
            "Boosts hemoglobin levels, combats daily lethargy, and restores oxygenation",
            "Paired with natural Vitamin C from Amla for 3x iron absorption"
        ]
    }
};

// --- 2. SHOPPING CART STATE MANAGEMENT (PERSISTENT ACROSS PAGES) ---
let cart = JSON.parse(localStorage.getItem('hvo_cart') || '[]');

function saveCart() {
    localStorage.setItem('hvo_cart', JSON.stringify(cart));
}

const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-drawer-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartBadge = document.getElementById('cart-badge-count');
const cartItemsCount = document.getElementById('cart-items-count');
const cartListContainer = document.getElementById('cart-items-list');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const checkoutAmountEl = document.getElementById('checkout-amount');
const shippingMeterText = document.getElementById('shipping-meter-text');
const meterFill = document.getElementById('meter-fill');

function toggleCart(isOpen) {
    if (isOpen) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

openCartBtn?.addEventListener('click', () => toggleCart(true));
closeCartBtn?.addEventListener('click', () => toggleCart(false));
cartOverlay?.addEventListener('click', () => toggleCart(false));

function renderCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Counts & Totals
    cartBadge.textContent = totalCount;
    cartItemsCount.textContent = totalCount;
    cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    checkoutAmountEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    // Shipping Meter (Free above ₹499)
    const threshold = 499;
    if (subtotal >= threshold) {
        shippingMeterText.textContent = "🎉 Congratulations! You have unlocked FREE Express Shipping!";
        meterFill.style.width = "100%";
    } else {
        const remaining = threshold - subtotal;
        shippingMeterText.textContent = `Add ₹${remaining} more for FREE Express Shipping!`;
        meterFill.style.width = `${Math.min(100, (subtotal / threshold) * 100)}%`;
    }

    // Render Items
    if (cart.length === 0) {
        cartListContainer.innerHTML = `
            <div class="empty-cart-message">
                <p>Your bag is currently empty.</p>
                <a href="#products" class="btn btn-nav-discover" style="background: var(--green-dark);" onclick="toggleCart(false);">Discover Formulations</a>
            </div>
        `;
        return;
    }

    cartListContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row" data-id="${item.id}">
            <img src="${item.img}" alt="${item.name}" class="cart-item-thumb">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                <div class="cart-qty-ctrl">
                    <button class="qty-btn btn-dec" onclick="updateItemQuantity('${item.id}', -1)">−</button>
                    <span class="qty-num">${item.quantity}</span>
                    <button class="qty-btn btn-inc" onclick="updateItemQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
    `).join('');
}

function addToCart(id, name, price, img) {
    const existingIndex = cart.findIndex(item => item.id === id);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price: Number(price),
            img,
            quantity: 1
        });
    }
    saveCart();
    renderCart();
    toggleCart(true);
}

function updateItemQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        saveCart();
        renderCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

// Bind Add to Cart buttons
document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        const img = btn.getAttribute('data-img');
        addToCart(id, name, price, img);
    });
});

// Checkout button action
document.getElementById('checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add products to proceed.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for choosing Health Veda Organics!\nProceeding to secure checkout for ₹${total.toLocaleString('en-IN')}.`);
});

// --- 3. CATEGORY FILTER SYSTEM ---
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

// Category Goal Cards Click to Filter
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const target = document.getElementById('products');
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// --- 4. QUICK LOOK MODAL ---
const quickModal = document.getElementById('quick-modal-overlay');
const quickModalClose = document.getElementById('modal-close-btn');
const modalContainer = document.getElementById('modal-content-container');

function openQuickLook(productId) {
    const data = productsData[productId];
    if (!data) return;

    modalContainer.innerHTML = `
        <div class="modal-img-col">
            <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="modal-info-col">
            <span class="modal-badge">${data.category}</span>
            <h2>${data.name}</h2>
            <div class="stars" style="margin-bottom: 0.5rem;">${data.rating}</div>
            
            <div class="modal-price-box">
                <span>₹${data.price}</span>
                <span style="font-size: 14px; color: #999; text-decoration: line-through; margin-left: 8px;">₹${data.originalPrice}</span>
            </div>

            <ul class="modal-bullets">
                ${data.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>

            <button class="btn btn-add-cart" style="padding: 12px; font-size: 14px; width: 100%;" 
                onclick="addToCart('${productId}', '${data.name.replace(/'/g, "\\'")}', ${data.price}, '${data.image}'); closeQuickLook();">
                Add to Cart • ₹${data.price}
            </button>
        </div>
    `;

    quickModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickLook() {
    quickModal.classList.remove('active');
    document.body.style.overflow = '';
}

quickModalClose?.addEventListener('click', closeQuickLook);
quickModal?.addEventListener('click', (e) => {
    if (e.target === quickModal) closeQuickLook();
});

document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute('data-product');
        openQuickLook(prodId);
    });
});

// --- 5. SUBTLE POINTER PARALLAX (Section 59 of skill.md) ---
// Smooth, almost imperceptible depth on the desktop hero
const heroSection = document.getElementById('hero');
if (window.matchMedia('(min-width: 1025px)').matches && heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        if (e.clientY > rect.bottom) return;

        const xNorm = (e.clientX / window.innerWidth) - 0.5;
        const yNorm = (e.clientY / window.innerHeight) - 0.5;

        // Bottle (Depth 4)
        const bottle = document.querySelector('.hero-product-anchor');
        if (bottle) {
            bottle.style.transform = `translateX(calc(-50% + ${xNorm * 12}px)) translateY(${yNorm * 10}px)`;
        }

        // Floating Capsules (Depth 5)
        const cap1 = document.querySelector('.cap-1');
        const cap2 = document.querySelector('.cap-2');
        const cap3 = document.querySelector('.cap-3');
        if (cap1) cap1.style.transform = `translate(${xNorm * 22}px, ${yNorm * 22}px) rotate(22deg)`;
        if (cap2) cap2.style.transform = `translate(${xNorm * -25}px, ${yNorm * -25}px) rotate(-35deg) scale(0.85)`;
        if (cap3) cap3.style.transform = `translate(${xNorm * 18}px, ${yNorm * 18}px) rotate(45deg) scale(0.7)`;

        // Floating Editorial Cards (Depth 6)
        const cards = document.querySelectorAll('.floating-card');
        cards.forEach((card, index) => {
            const factor = (index + 1) * 8;
            card.style.transform = `translate(${xNorm * factor}px, ${yNorm * factor}px)`;
        });

        // Clouds (Atmosphere)
        const clouds = document.querySelectorAll('.cloud');
        clouds.forEach((cloud, index) => {
            const factor = (index + 1) * 14;
            cloud.style.transform = `translate(${xNorm * -factor}px, ${yNorm * -factor}px)`;
        });
    });

    // Reset positions on leave
    heroSection.addEventListener('mouseleave', () => {
        const bottle = document.querySelector('.hero-product-anchor');
        if (bottle) bottle.style.transform = `translateX(-50%) translateY(0)`;

        const cards = document.querySelectorAll('.floating-card');
        cards.forEach(card => card.style.transform = `translate(0, 0)`);
    });
}

// Parallax for About Us Hero Cards
const aboutHeroSection = document.querySelector('.about-hero-section');
if (window.matchMedia('(min-width: 1025px)').matches && aboutHeroSection) {
    aboutHeroSection.addEventListener('mousemove', (e) => {
        const xNorm = (e.clientX / window.innerWidth) - 0.5;
        const yNorm = (e.clientY / window.innerHeight) - 0.5;

        const originCard = document.querySelector('.about-card-origin');
        const mottoCard = document.querySelector('.about-card-motto');

        if (originCard) originCard.style.transform = `translate(${xNorm * 18}px, ${yNorm * 18}px) rotate(-1deg)`;
        if (mottoCard) mottoCard.style.transform = `translate(${xNorm * -22}px, ${yNorm * -22}px) rotate(1.5deg)`;
    });

    aboutHeroSection.addEventListener('mouseleave', () => {
        const originCard = document.querySelector('.about-card-origin');
        const mottoCard = document.querySelector('.about-card-motto');
        if (originCard) originCard.style.transform = `rotate(-1deg)`;
        if (mottoCard) mottoCard.style.transform = `rotate(1.5deg)`;
    });
}

// --- 6. STICKY NAVBAR BACKGROUND SCROLL EFFECT ---
const siteHeader = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        siteHeader?.classList.add('scrolled');
    } else {
        siteHeader?.classList.remove('scrolled');
    }
});

// --- 7. MOBILE NAVIGATION DRAWER SYSTEM ---
const mobileMenuToggle = document.getElementById('mobile-nav-toggle');
const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-shop-btn');

function openMobileNav() {
    mobileNavDrawer?.classList.add('open');
    mobileNavDrawer?.setAttribute('aria-hidden', 'false');
    mobileMenuToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-open');
}

function closeMobileNav() {
    mobileNavDrawer?.classList.remove('open');
    mobileNavDrawer?.setAttribute('aria-hidden', 'true');
    mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-nav-open');
}

mobileMenuToggle?.addEventListener('click', openMobileNav);
mobileNavClose?.addEventListener('click', closeMobileNav);
mobileNavBackdrop?.addEventListener('click', closeMobileNav);

mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// Initialize Cart on Load
renderCart();
