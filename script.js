
const script = document.createElement("script");
script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
document.head.appendChild(script);

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
  

