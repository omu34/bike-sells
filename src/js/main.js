// src/js/main.js
import '../css/font.css';
import '../css/tailwind.css';

// Your main theme JavaScript logic goes here
console.log('Shopify theme with Vite, Tailwind CSS, and custom fonts is active!');

// Example: Simple mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
        });
    }

    // Add any other global JavaScript functionality here
});