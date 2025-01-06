// Animation for hero section using GSAP
gsap.from(".hero h1", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.1,
});

gsap.from(".hero h2", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.3,
});

gsap.from(".hero p", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.5,
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from(entry.target, {
          duration: 0.6,
          y: 50,
          opacity: 0,
          delay: 0.2,
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

projectCards.forEach((card) => observer.observe(card));
