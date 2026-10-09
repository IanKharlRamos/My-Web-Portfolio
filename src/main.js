import './style.css';
import { Navbar } from './components/Navbar.js';
import { Hero, FeaturedProjectCard, initFeaturedProjects } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects, initProjects } from './components/Projects.js';
import { Certificates } from './components/Certificates.js';
import { Contact } from './components/Contact.js';

// Assemble Application
const app = document.querySelector('#app');
app.innerHTML = `
  ${Navbar()}
  <main class="portfolio-main">
    ${Hero()}
    <div class="dashboard-grid">
      ${FeaturedProjectCard()}
      ${About()}
      ${Skills()}
      ${Projects()}
      ${Certificates()}
      ${Contact()}
    </div>
  </main>
`;

// Initialize Features
document.addEventListener('DOMContentLoaded', () => {
  // Reveal content as it enters the viewport.
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => scrollObserver.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const sections = document.querySelectorAll('#hero, #projects, #skills, #certificates, #about, #contact');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-5% 0px -80% 0px' });
  sections.forEach(section => sectionObserver.observe(section));

  // Project details modal
  initProjects();
  initFeaturedProjects();
});
