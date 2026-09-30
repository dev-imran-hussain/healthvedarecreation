/**
 * HEALTH VEDA ORGANICS - ANIMATIONS MODULE
 * Desktop pointer parallax conforming to skill.md Section 59, reduced motion
 */

export function initAnimations() {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    // Homepage Hero Parallax
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
}
