import './style.css';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects, initProjects } from './components/Projects.js';
import { Certificates } from './components/Certificates.js';
import { Contact } from './components/Contact.js';
import { initCustomCursor } from './components/CustomCursor.js';
import { initAnimations } from './animations.js';
import { initBackground } from './background.js';

// Assemble Application
const app = document.querySelector('#app');
app.innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Skills()}
  ${Projects()}
  ${Certificates()}
  ${Contact()}
`;

// Initialize Features
document.addEventListener('DOMContentLoaded', () => {
  // 1. Splash Screen element (animation hides it when ready)
  const splashScreen = document.getElementById('splash-screen');

  // 2. Custom Cursor & Background
  initCustomCursor();
  initBackground();

  // 3. Scroll Animations (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => scrollObserver.observe(el));

  // 4. Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Init site animations (GSAP)
  initAnimations();

  // 6. Init Projects Details Modal
  initProjects();
});
