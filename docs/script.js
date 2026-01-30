document.addEventListener('DOMContentLoaded', function() {
    
    // --- TEIL 1: Deine bestehende Menü-Logik ---
    const dropdownItem = document.querySelector('.dropdown > a');
    if (dropdownItem) { // Sicherheitsprüfung, falls das Element nicht existiert
        dropdownItem.addEventListener('click', function(event) {
            event.preventDefault(); 
            const parentLi = this.parentElement;
            parentLi.classList.toggle('active');
        });
    }

    // --- TEIL 2: Die Slider-Logik initialisieren ---
    showSlides(slideIndex);

    // Automatischer Wechsel alle 5 Sekunden
    setInterval(() => {
        plusSlides(1);
    }, 5000);
});

// --- TEIL 3: Slider-Funktionen (außerhalb, damit onclick im HTML funktioniert) ---
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const heroElements = document.querySelectorAll('.hero-content, .hero-image');

    const observerOptions = {
        threshold: 0.2 // Animation startet, wenn 20% des Elements sichtbar sind
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Animation nur einmal ausführen
            }
        });
    }, observerOptions);

    heroElements.forEach(el => observer.observe(el));
});