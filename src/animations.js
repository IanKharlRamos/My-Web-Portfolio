import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // ==================== ENHANCED SPLASH SCREEN ====================
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) {
    const logo = document.getElementById('splash-logo');
    const dots = document.querySelectorAll('.splash-dot');
    const shapes = document.querySelectorAll('.splash-shape');

    gsap.set(splashScreen, { autoAlpha: 1 });
    if (logo) gsap.set(logo, { scale: 0.86, opacity: 0.9, filter: 'blur(6px)' });
    gsap.set(shapes, { opacity: 0, scale: 1.12 });
    gsap.set(dots, { y: 0, opacity: 0.95 });
    const siteFooter = document.getElementById('site-footer');
    if (siteFooter) gsap.set(siteFooter, { autoAlpha: 0, y: 6 });

    // Draw stroke setup
    if (logo) {
      const paths = logo.querySelectorAll('path, circle');
      paths.forEach(p => {
        try {
          const len = p.getTotalLength();
          p.style.strokeDasharray = len;
          p.style.strokeDashoffset = len;
        } catch (err) {
          // ignore
        }
      });
    }

    // Loader tween placeholder (only if dots exist will it be created)
    let loaderTween;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    // Stage in soft shapes quickly
    if (shapes.length) tl.to(shapes, { opacity: 1, y: 0, stagger: 0.06, duration: 0.2 }, 0);

    // Create loader animation if dots exist (kept running while logo draws)
    if (dots && dots.length) {
      loaderTween = gsap.to(dots, { y: -8, stagger: 0.12, yoyo: true, repeat: -1, duration: 0.42, ease: 'sine.inOut' });
    }

    // Logo reveal timeline (total ~3s)
    if (logo) {
      const paths = logo.querySelectorAll('path, circle');
      // Draw strokes
      tl.to(paths, { strokeDashoffset: 0, stagger: 0.06, duration: 0.9 }, 0.15);
      // Pop and settle
      tl.to(logo, { scale: 1.06, duration: 0.2, ease: 'power2.out' }, 1.05);
      tl.to(logo, { scale: 1, duration: 0.45, ease: 'elastic.out(1,0.6)' }, 1.25);
      // Enhanced glow effect
      tl.to(logo, { filter: 'drop-shadow(0 18px 40px rgba(120,64,255,0.12))', duration: 0.1 }, 1.05);
    }

    // Hold so total splash time ~3s, then fade out
    tl.to({}, { duration: 0.8 }, 1.7);
    tl.add(() => { if (loaderTween) loaderTween.kill(); }, '+=0.0');
    tl.to('#splash-screen', { autoAlpha: 0, duration: 0.5, ease: 'power2.in', onComplete: () => { splashScreen.classList.add('hidden'); } }, 2.5);

    // Fade in persistent footer with name after splash hides
    tl.to('#site-footer', { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '+=0.05');

    // Interactive cursor-driven parallax for shapes and logo
    let rect;
    const handleMove = (e) => {
      rect = rect || splashScreen.getBoundingClientRect();
      const rx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const ry = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      gsap.to('.splash-shape.s1', { x: rx * 18, y: ry * 8, rotation: rx * 6, duration: 0.8, ease: 'power3.out' });
      gsap.to('.splash-shape.s2', { x: rx * -22, y: ry * -6, rotation: rx * -5, duration: 0.9, ease: 'power3.out' });
      gsap.to('.splash-shape.s3', { x: rx * 10, y: ry * 10, rotation: rx * 3, duration: 0.85, ease: 'power3.out' });
      if (logo) gsap.to(logo, { x: rx * 6, y: ry * 3, duration: 0.9, ease: 'power3.out' });
    };
    splashScreen.addEventListener('mousemove', handleMove);
    splashScreen.addEventListener('mouseleave', () => {
      gsap.to(['.splash-shape.s1', '.splash-shape.s2', '.splash-shape.s3', logo], { x: 0, y: 0, rotation: 0, duration: 0.9, ease: 'power3.out' });
    });
  }

  // ==================== BRAND REVEAL WITH ENHANCED HOVER ====================
  const brand = document.querySelector('.brand');
  if (brand) {
    const brandText = brand.textContent.trim();
    brand.innerHTML = brandText.split('').map(ch => `<span class="brand-letter">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
    gsap.set('.brand-letter', { y: -10, opacity: 0 });
    gsap.to('.brand-letter', { y: 0, opacity: 1, stagger: 0.04, ease: 'elastic.out(1,0.6)', duration: 0.8, delay: 0.2 });

    brand.addEventListener('mouseenter', () => {
      gsap.to('.brand-letter', { 
        y: -8, 
        rotation: 3, 
        scale: 1.08, 
        textShadow: '0 10px 20px rgba(0, 240, 255, 0.4)',
        stagger: 0.02, 
        ease: 'back.out(1.2)', 
        duration: 0.35 
      });
    });
    brand.addEventListener('mouseleave', () => {
      gsap.to('.brand-letter', { 
        y: 0, 
        rotation: 0, 
        scale: 1, 
        textShadow: '0 0px 0px rgba(0, 240, 255, 0)',
        stagger: 0.02, 
        ease: 'elastic.out(1,0.6)', 
        duration: 0.6 
      });
    });
  }

  // ==================== ENHANCED KINETIC TYPOGRAPHY FOR HERO ====================
  const heroHeading = document.querySelector('#hero .hero-content h1');
  if (heroHeading) {
    // Rely on pre-rendered .hero-word spans inside Hero.js for preserving CSS classes
    gsap.set('.hero-word', { y: 60, opacity: 0, rotationZ: 8 });
    gsap.to('.hero-word', { y: 0, opacity: 1, rotationZ: 0, stagger: 0.15, ease: 'back.out(1.8)', duration: 0.9, delay: 0.5 });
  }

  // ==================== HERO DESCRIPTION FADE-IN ====================
  const heroDesc = document.querySelector('#hero .hero-content p');
  if (heroDesc) {
    gsap.set(heroDesc, { opacity: 0, y: 20 });
    gsap.to(heroDesc, { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power2.out' });
  }

  // ==================== CTA BUTTON ENHANCED HOVER ====================
  const ctaButton = document.querySelector('#hero .btn');
  if (ctaButton) {
    gsap.set(ctaButton, { opacity: 0, y: 20 });
    gsap.to(ctaButton, { opacity: 1, y: 0, duration: 0.8, delay: 1.4, ease: 'power2.out' });
    
    ctaButton.addEventListener('mouseenter', () => {
      gsap.to(ctaButton, { 
        scale: 1.1, 
        boxShadow: '0 15px 35px rgba(0, 240, 255, 0.3)',
        duration: 0.3, 
        ease: 'power2.out' 
      });
    });
    ctaButton.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, { 
        scale: 1, 
        boxShadow: '0 0px 0px rgba(0, 240, 255, 0)',
        duration: 0.5, 
        ease: 'elastic.out(1,0.6)' 
      });
    });
  }

  // ==================== ADVANCED SCROLL ANIMATIONS WITH PARALLAX ====================


  // ==================== CARDS WITH SPRING PHYSICS HOVER ====================
  document.querySelectorAll('.project-card, .skill-box, .certificate-card').forEach((card) => {
    gsap.set(card, { y: 0, x: 0 });
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        y: -15,
        boxShadow: '0 25px 50px rgba(0, 240, 255, 0.25)',
        duration: 0.4,
        ease: 'back.out(1.3)'
      });
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) * 0.1;
      const y = (e.clientY - centerY) * 0.1;
      
      gsap.to(card, {
        x: x,
        y: -15 + (y * 0.5),
        rotationY: (e.clientX - centerX) * 0.02,
        rotationX: (centerY - e.clientY) * 0.02,
        duration: 0.3,
        overwrite: 'auto'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        duration: 0.6,
        ease: 'elastic.out(1,0.5)'
      });
    });
  });

  // ==================== ENHANCED HERO IMAGE PARALLAX ====================
  const heroImageWrapper = document.querySelector('.hero-image-wrapper');
  if (heroImageWrapper) {
    const heroImage = heroImageWrapper.querySelector('.hero-image');
    if (heroImage) {
      // Floating animation
      gsap.to(heroImage, { 
        y: -12, 
        scale: 1.02, 
        repeat: -1, 
        yoyo: true, 
        ease: 'sine.inOut', 
        duration: 4 
      });

      // Parallax on scroll
      gsap.to(heroImage, {
        y: -50,
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          markers: false,
        }
      });

      // Enhanced hover
      heroImage.addEventListener('mouseenter', () => {
        gsap.to(heroImage, {
          filter: 'brightness(1.15) drop-shadow(0 20px 40px rgba(0, 240, 255, 0.3))',
          duration: 0.3,
          overwrite: 'auto'
        });
      });
      
      heroImage.addEventListener('mouseleave', () => {
        gsap.to(heroImage, {
          filter: 'brightness(1) drop-shadow(0 0px 0px rgba(0, 240, 255, 0))',
          duration: 0.5
        });
      });
    }
  }

  // ==================== GENERIC SPRING PHYSICS HOVER FOR HOVERABLES ====================
  document.querySelectorAll('.hoverable').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, { 
        scale: 1.08, 
        duration: 0.3, 
        ease: 'back.out(1.2)',
        overwrite: 'auto'
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { 
        scale: 1, 
        duration: 0.6, 
        ease: 'elastic.out(1,0.6)',
        overwrite: 'auto'
      });
    });
  });

  // ==================== ANIMATED NAV UNDERLINES ====================
  document.querySelectorAll('.nav-links a').forEach(a => {
    const underline = a.querySelector('.underline');
    a.addEventListener('mouseenter', () => {
      if (underline) {
        gsap.to(underline, { 
          width: '100%', 
          duration: 0.35, 
          ease: 'power3.out',
          boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
        });
        gsap.to(a.querySelector('.nav-text'), {
          color: '#00f0ff',
          textShadow: '0 0 10px rgba(0, 240, 255, 0.4)',
          duration: 0.3
        });
      }
    });
    a.addEventListener('mouseleave', () => {
      if (underline) {
        gsap.to(underline, { 
          width: '0%', 
          duration: 0.5, 
          ease: 'elastic.out(1,0.6)',
          boxShadow: '0 0 0px rgba(0, 240, 255, 0)'
        });
        gsap.to(a.querySelector('.nav-text'), {
          color: 'var(--text)',
          textShadow: '0 0 0px rgba(0, 240, 255, 0)',
          duration: 0.4
        });
      }
    });
  });

  // ==================== SECTION HEADINGS ANIMATION ====================
  gsap.utils.toArray('h2').forEach((heading) => {
    gsap.fromTo(heading,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          markers: false,
        }
      }
    );
  });
}
