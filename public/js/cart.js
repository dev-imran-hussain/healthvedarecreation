/**
 * HEALTH VEDA ORGANICS - CART MODULE
 * Handles shopping cart state, localStorage persistence, and slide-over drawer UI
 */

export const CART_STORAGE_KEY = 'hvo_cart';
export const FREE_SHIPPING_THRESHOLD = 499;

export let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [
    {
        id: 'calcium',
        name: 'Calcium Magnesium Zinc + Vitamin D3',
        price: 499,
        quantity: 1,
        image: 'health-veda-organics-vegan-products-be-vegan.assets/01.CalciumMagnesiummZinc_UpperListing_Slide01New.jpg'
    }
];

export function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function updateCartBadge() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('#cart-badge-count');
    badges.forEach(badge => {
        badge.textContent = totalCount;
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    });

    const itemsCountEl = document.getElementById('cart-items-count');
    if (itemsCountEl) itemsCountEl.textContent = totalCount;
}

export function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const checkoutAmount = document.getElementById('checkout-amount');
    const meterFill = document.getElementById('meter-fill');
    const meterText = document.getElementById('shipping-meter-text');

    if (!cartList) return;

    cartList.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart-message" style="text-align: center; padding: 3rem 1rem;">
                <p style="font-size: 1.05rem; margin-bottom: 0.75rem; color: #163c31; font-weight: 600;">Your botanical bag is empty.</p>
                <a href="#products" class="btn btn-discover" style="display: inline-block; font-size: 12px; font-weight: 700; color: #2d6a4f; text-transform: uppercase;">Discover Formulations ↗</a>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">₹${item.price}</span>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">Remove</button>
                    </div>
                </div>
            `;
            cartList.appendChild(itemEl);
        });
    }

    if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal}`;
    if (checkoutAmount) checkoutAmount.textContent = `₹${subtotal}`;

    // Free Shipping Progress
    if (meterFill && meterText) {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        if (remaining <= 0 && cart.length > 0) {
            meterFill.style.width = '100%';
            meterText.innerHTML = '🎉 You unlocked <strong>FREE Express Shipping</strong>!';
            meterText.style.color = '#2d6a4f';
        } else {
            const percentage = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
            meterFill.style.width = `${percentage}%`;
            meterText.innerHTML = `Add <strong>₹${Math.max(remaining, 0)}</strong> more for FREE Express Shipping!`;
            meterText.style.color = 'inherit';
        }
    }

    updateCartBadge();
    saveCart();
}

export function addToCart(id, name, price, image) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    renderCart();
    openCart();
}

export function openCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
}

export function initCartEvents() {
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    const cartList = document.getElementById('cart-items-list');

    openCartBtn?.addEventListener('click', openCart);
    closeCartBtn?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);

    // Quantity / Removal delegation
    cartList?.addEventListener('click', (e) => {
        const target = e.target;
        const id = target.getAttribute('data-id');
        if (!id) return;

        if (target.classList.contains('qty-btn')) {
            const action = target.getAttribute('data-action');
            const item = cart.find(i => i.id === id);
            if (!item) return;

            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease') {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== id);
                }
            }
            renderCart();
        } else if (target.classList.contains('cart-item-remove')) {
            cart = cart.filter(i => i.id !== id);
            renderCart();
        }
    });

    // Add to Cart Buttons
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'), 10);
            const image = btn.getAttribute('data-img');
            addToCart(id, name, price, image);
        });
    });

    // Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add products to proceed.');
        } else {
            alert('Proceeding to Secure Checkout with Razorpay / Cash on Delivery...');
        }
    });

    renderCart();
}
