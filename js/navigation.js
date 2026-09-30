/**
 * HEALTH VEDA ORGANICS - NAVIGATION MODULE
 * Sticky navbar on scroll, mobile drawer menu, smooth anchor routing
 */

export function initNavigation() {
    // Sticky Header Scroll Elevation
    const siteHeader = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            siteHeader?.classList.add('scrolled');
        } else {
            siteHeader?.classList.remove('scrolled');
        }
    }, { passive: true });

    // Mobile Navigation Drawer
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

    // Close drawers on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });
}
