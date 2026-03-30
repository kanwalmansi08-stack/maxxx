// ===============================
// BASIC CHECK
// ===============================
console.log("JS file connected");

// ===============================
// NAVBAR ACTIVE LINK UNDERLINE
// ===============================
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// ===============================
// SMOOTH SCROLLING
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===============================
// HERO RIGHT BOX FLOAT ANIMATION
// ===============================
const heroVisual = document.querySelector(".hero-visual");

if (heroVisual) {
  let floatY = 0;
  let direction = 1;

  setInterval(() => {
    floatY += 0.4 * direction;
    if (floatY > 10 || floatY < -10) direction *= -1;
    heroVisual.style.transform = `translateY(${floatY}px)`;
  }, 30);
}

// ===============================
// GLITTER EFFECT (SUBTLE)
// ===============================
function createGlitter() {
  const glitter = document.createElement("span");
  glitter.classList.add("glitter");

  glitter.style.left = Math.random() * 100 + "%";
  glitter.style.top = Math.random() * 100 + "%";

  heroVisual.appendChild(glitter);

  setTimeout(() => glitter.remove(), 1200);
}

if (heroVisual) {
  setInterval(createGlitter, 600);
}

// ===============================
// SKILLS BAR ANIMATION ON SCROLL
// ===============================
const skillFills = document.querySelectorAll(".fill");

const skillLevels = {
  html: "90%",
  css: "85%",
  js: "75%"
};

function animateSkills() {
  skillFills.forEach(fill => {
    const className = fill.classList[1];
    fill.style.width = skillLevels[className];
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight - 100;
}

let skillsAnimated = false;

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills-bars");
  if (skillsSection && isInViewport(skillsSection) && !skillsAnimated) {
    animateSkills();
    skillsAnimated = true;
  }
});

// ===============================
// FADE-IN REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(
  ".hero-text, .hero-visual, .skill, .project-card"
);

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
