/**
 * HEALTH VEDA ORGANICS - MAIN APPLICATION ENTRY
 * Modular Production Architecture
 * Coordinates: Navigation, Cart State, Product Catalog & Modals, and Atmosphere Animations
 */

import { initCartEvents } from './js/cart.js';
import { initProducts } from './js/products.js';
import { initNavigation } from './js/navigation.js';
import { initAnimations } from './js/animations.js';

// Bootstrap all modular systems once DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}

function bootstrap() {
    initNavigation();
    initCartEvents();
    initProducts();
    initAnimations();
}
