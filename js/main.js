// js/main.js

console.log("main.js is loaded and running!");

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {

    // Hotspots navigation
    document.querySelectorAll('.hotspot').forEach(el => {
        el.addEventListener('click', () => {
            const link = el.getAttribute('data-link');
            if (link) window.location.href = link;
        });
    });

    const powerButton = document.querySelector('.power-button');
    const pi = document.getElementById('pi-container');
    const piMessage = document.getElementById('power-message');
    const overlay = document.getElementById('power-overlay');

    powerButton.addEventListener('click', () => {
        const isOn = overlay.style.display !== 'flex';
        
        if (isOn) {
            // Turn site OFF
            overlay.style.display = 'flex';
            pi.style.opacity = '0.3';        // dim Pi
            piMessage.classList.add('visible'); // show message
        } else {
            // Turn site back ON
            overlay.style.display = 'none';
            pi.style.opacity = '1';
            piMessage.classList.remove('visible'); // hide message
        }
    });
});
