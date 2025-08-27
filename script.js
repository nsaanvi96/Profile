// Particle background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00b7eb" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00b7eb", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            resize: true
        },
        modes: {
            // No mouse effects
        }
    },
    retina_detect: true
});

// Dynamic word cycling for paragraph
const words = ["SY B.Tech Undergrad", "Security Enthusiast", "aficionado of space"];
const changingWord = document.getElementById("changing-word");
let wordIndex = 0;

function changeWord() {
    changingWord.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(changeWord, 3000); // Change word every 3 seconds

// Slide navigation with zoom effect
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slide-container');

function updateSlides(newSlide) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'leaving');
        slide.style.visibility = 'hidden';
        if (index === newSlide) {
            slide.classList.add('active');
            slide.style.visibility = 'visible';
        } else if (index === currentSlide) {
            slide.classList.add('leaving');
            slide.style.visibility = 'visible'; // Keep leaving slide visible during transition
        }
    });
    currentSlide = newSlide;
    // Scroll to the top of the new slide
    slideContainer.scrollTo({
        top: newSlide * window.innerHeight,
        behavior: 'smooth'
    });
}

// Handle scroll events with better control
let lastScrollTime = 0;
const scrollDelay = 500; // Minimum delay between scroll actions in milliseconds

slideContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    const now = Date.now();
    if (now - lastScrollTime < scrollDelay) return; // Limit scroll rate

    const delta = e.deltaY; // Positive for down, negative for up
    let newSlide = currentSlide;

    if (delta > 0 && currentSlide < slides.length - 1) {
        newSlide = currentSlide + 1; // Move to next slide
    } else if (delta < 0 && currentSlide > 0) {
        newSlide = currentSlide - 1; // Move to previous slide
    }

    if (newSlide !== currentSlide) {
        updateSlides(newSlide);
        lastScrollTime = now; // Update the last scroll time
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const newSlide = parseInt(this.getAttribute('data-slide'));
        if (newSlide !== currentSlide) {
            updateSlides(newSlide);
        }
    });
});

// Initialize first slide and ensure content loads
document.addEventListener('DOMContentLoaded', () => {
    currentSlide = 0;
    slides.forEach((slide, index) => {
        slide.style.transform = 'scale(1)';
        if (index === currentSlide) {
            slide.classList.add('active');
            slide.style.visibility = 'visible';
        } else {
            slide.style.visibility = 'hidden';
        }
    });
});