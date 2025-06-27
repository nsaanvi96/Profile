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

// Smooth scrolling and section reveal
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        targetSection.classList.add('active');
    });
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

document.querySelector('#home').classList.add('active');