
const script = document.createElement("script");
script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
document.head.appendChild(script);

function generateStars(rating) {
    const fullStar = '<i class="fas fa-star"></i>';
    const halfStar = '<i class="fas fa-star-half-alt"></i>';
    const emptyStar = '<i class="far fa-star"></i>';
    
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars += fullStar;
      } else if (rating >= i - 0.5) {
        stars += halfStar;
      } else {
        stars += emptyStar;
      }
    }
    return stars;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const starElements = document.querySelectorAll('.stars');
    starElements.forEach(function(starElement) {
      const rating = parseFloat(starElement.getAttribute('data-rating'));
      starElement.innerHTML = generateStars(rating);
    });
  });

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

script.onload = function() {
    // Initialize Typed.js here
    const typed = new Typed('.section__text__p2', {
      strings: ["Full-Stack Developer", "Web Developer", "App Developer"],
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
};

  document.head.appendChild(script);

// Particles.js - NASA-Like Effect with Light Background and Dark Particles
particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 100, // Number of particles on the screen
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ADD8E6" // light blue color for the particles
      },
      "shape": {
          "type": "circle", // Only circles
          "stroke": {
              "width": 0,
              "color": "#000000"
          }
      },
      "opacity": {
          "value": 1, // Slight opacity for better visibility
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
          }
      },
      "size": {
          "value": 7, // Medium particle size for better contrast
          "random": true,
          "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.5,
              "sync": false
          }
      },
      "line_linked": {
          "enable": false // No connecting lines
      },
      "move": {
          "enable": true,
          "speed": 0.5, // Slow floating effect
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble" // Particles expand on hover
          },
          "onclick": {
              "enable": true,
              "mode": "push" // Adds new particles on click
          }
      },
      "modes": {
          "bubble": {
              "distance": 200,
              "size": 8, // Bubble effect size
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
          },
          "push": {
              "particles_nb": 4 // Adds 4 particles on click
          }
      }
  },
  "retina_detect": true
});

  

