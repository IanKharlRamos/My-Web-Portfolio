import { featuredProjects } from './Projects.js';

export function initFeaturedProjects() {
  const preview = document.querySelector('.featured-project-panel');
  const image = preview?.querySelector('.hero-project-image');
  const category = preview?.querySelector('.hero-project-category');
  const title = preview?.querySelector('.hero-project-title');
  const position = preview?.querySelector('.featured-project-position');
  const previous = preview?.querySelector('.hero-project-previous');
  const next = preview?.querySelector('.hero-project-next');

  if (!preview || !image || !category || !title || !position || !previous || !next) return;

  const imageCache = featuredProjects.map((project) => {
    const preloadedImage = new Image();
    preloadedImage.src = project.image;
    return preloadedImage;
  });
  let activeIndex = 0;
  let transitionTimeout;
  const showProject = (index) => {
    activeIndex = (index + featuredProjects.length) % featuredProjects.length;
    const project = featuredProjects[activeIndex];

    image.classList.add('is-changing');
    window.clearTimeout(transitionTimeout);
    transitionTimeout = window.setTimeout(() => {
      image.alt = `${project.title} interface preview`;
      category.textContent = project.category;
      title.textContent = project.title;
      position.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(featuredProjects.length).padStart(2, '0')}`;
      position.setAttribute('aria-label', `Project ${activeIndex + 1} of ${featuredProjects.length}`);
      const revealImage = () => requestAnimationFrame(() => image.classList.remove('is-changing'));
      if (imageCache[activeIndex].complete) {
        image.src = project.image;
        revealImage();
      } else {
        imageCache[activeIndex].addEventListener('load', () => {
          image.src = project.image;
          revealImage();
        }, { once: true });
      }
    }, 180);
  };

  previous.addEventListener('click', () => showProject(activeIndex - 1));
  next.addEventListener('click', () => showProject(activeIndex + 1));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => showProject(activeIndex + 1), 3000);
  }
}

export function Hero() {
  return `
    <style>
      #hero {
        padding-top: 100px;
        padding-bottom: 60px;
        position: relative;
        min-height: 85vh;
        display: flex;
        align-items: center;
      }

      #hero::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.06) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 1;
      }

      .hero-content h1 {
        font-size: clamp(3rem, 7vw, 5rem);
        font-weight: 900;
        line-height: 0.8;
        margin-bottom: 10px;
        letter-spacing: -2px;
      }

      .hero-word {
        display: block;
        animation: slide-up 0.8s ease backwards;
        line-height: 0.8;
      }

      .hero-word.light {
        color: var(--text-primary);
      }

      .hero-word.gradient {
        margin-top: -10px;
        background: linear-gradient(135deg, #00f0ff 0%, #8b5cf6 50%, #ff007f 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.4));
      }

      .hero-word:nth-child(1) { animation-delay: 0.2s; }
      .hero-word:nth-child(2) { animation-delay: 0.4s; }

      .hero-subtitle {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 25px;
        font-weight: 600;
        letter-spacing: 0.5px;
        animation: fade-in-up 0.8s ease 0.5s backwards;
      }

      .hero-description {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 30px;
        line-height: 1.7;
        max-width: 520px;
        animation: fade-in-up 0.8s ease 0.6s backwards;
      }

      .hero-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 35px;
        animation: fade-in-up 0.8s ease 0.7s backwards;
      }

      .skill-badge {
        padding: 10px 18px;
        background: transparent;
        border: 1px solid rgba(99, 102, 241, 0.4);
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-secondary);
        transition: all 0.3s ease;
        cursor: default;
      }

      .skill-badge:hover {
        background: rgba(99, 102, 241, 0.1);
        border-color: rgba(99, 102, 241, 0.8);
        color: var(--text-primary);
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
      }

      .hero-cta {
        display: flex;
        gap: 15px;
        animation: fade-in-up 0.8s ease 0.8s backwards;
      }

      .cta-btn {
        padding: 12px 28px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .cta-btn.primary {
        background: rgba(0, 0, 0, 0.4);
        color: var(--text-primary);
        border: 1.5px solid rgba(148, 163, 184, 0.3);
      }

      .cta-btn.primary:hover {
        background: rgba(0, 0, 0, 0.6);
        border-color: rgba(148, 163, 184, 0.6);
        transform: translateY(-2px);
      }

      .cta-btn.secondary {
        background: transparent;
        color: var(--text-primary);
        border: 1.5px solid rgba(148, 163, 184, 0.3);
      }

      .cta-btn.secondary:hover {
        background: rgba(148, 163, 184, 0.05);
        border-color: rgba(148, 163, 184, 0.6);
        transform: translateY(-2px);
      }

      /* Animated graphic element */
      .hero-graphic {
        position: relative;
        width: 100%;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .graphic-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .graphic-shape {
        position: absolute;
        border-radius: 50%;
        animation: float 8s ease-in-out infinite;
      }

      .shape-1 {
        width: 250px;
        height: 250px;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
        border: 2px solid rgba(99, 102, 241, 0.25);
        animation-delay: 0s;
      }

      .shape-2 {
        width: 350px;
        height: 350px;
        background: conic-gradient(from 0deg, rgba(0, 240, 255, 0.08), transparent, rgba(0, 240, 255, 0.08));
        animation: rotate-slow 30s linear infinite, float 8s ease-in-out infinite;
        animation-delay: 0s;
      }

      .shape-3 {
        width: 150px;
        height: 150px;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.15), transparent);
        border: 1px dashed rgba(0, 240, 255, 0.2);
        animation: rotate-fast 15s linear infinite, float 8s ease-in-out infinite;
        animation-delay: -2s;
      }

      .glow-orb {
        position: absolute;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle at 30% 30%, rgba(0, 240, 255, 0.3), transparent);
        border-radius: 50%;
        filter: blur(25px);
        animation: pulse 4s ease-in-out infinite;
      }

      .glow-orb:nth-child(4) { top: 10%; left: 15%; animation-delay: 0s; }
      .glow-orb:nth-child(5) { bottom: 20%; right: 10%; animation-delay: 1s; animation: pulse-alt 4s ease-in-out infinite; }

      @keyframes pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
      }

      @keyframes pulse-alt {
        0%, 100% { opacity: 0.5; transform: scale(0.9); }
        50% { opacity: 1; transform: scale(1); }
      }

      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes rotate-fast {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }

      @keyframes slide-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.05); }
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes rotate-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }

      @keyframes pulse-ring {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.1); opacity: 0.1; }
      }

      @media (max-width: 1024px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .hero-graphic {
          height: 300px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
        }
      }

      @media (max-width: 768px) {
        #hero {
          padding-top: 80px;
          min-height: auto;
        }

        .hero-grid {
          grid-template-columns: 1fr;
        }

        .hero-content h1 {
          font-size: 2.5rem;
        }

        .hero-cta {
          flex-direction: column;
          width: 100%;
        }

        .cta-btn {
          width: 100%;
          justify-content: center;
        }

        .hero-graphic {
          display: none;
        }

        .hero-stats {
          grid-template-columns: 1fr;
        }
      }
    </style>
    <section id="hero" class="masthead">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="masthead-topline">
            <p class="hero-subtitle">PORTFOLIO <span>·</span> INFORMATION TECHNOLOGY GRADUATE</p>
            <a href="#contact" class="masthead-contact">Let’s talk <span>↗</span></a>
          </div>
          <h1>
            <span class="hero-word light">Build thoughtfully.</span>
            <span class="hero-word gradient">Make it useful.</span>
          </h1>
          <p class="hero-description">
            I design and develop practical web and mobile applications, combining clear interfaces with dependable functionality.
          </p>
          <div class="tool-strip">
            <div class="tool-strip-label"><span>CORE TECHNOLOGIES</span><strong>My technical toolkit</strong></div>
            <div class="tool-strip-list" aria-label="Technologies: Laravel, MySQL, SQLite, PHP, JavaScript, Bootstrap, React, Node.js, Git, GitHub, Postman, Tailwind CSS">
              <span>Laravel</span><i></i><span>MySQL</span><i></i><span>SQLite</span><i></i><span>PHP</span><i></i>
              <span>JavaScript</span><i></i><span>Bootstrap</span><i></i><span>React</span><i></i><span>Node.js</span><i></i>
              <span>Git</span><i></i><span>GitHub</span><i></i><span>Postman</span><i></i><span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function FeaturedProjectCard() {
  return `
    <section id="featured-project" class="featured-project-panel bento-panel">
      <div class="bento-heading">
        <span class="bento-icon">↗</span>
        <div><span class="bento-eyebrow">SELECTED WORK</span><h2>Featured project</h2></div>
        <span class="featured-project-position" aria-label="Project 1 of ${featuredProjects.length}">01 / ${String(featuredProjects.length).padStart(2, '0')}</span>
      </div>
      <a class="hero-project-link" href="#projects" aria-label="View all projects">
        <img class="hero-project-image" src="${featuredProjects[0].image}" alt="${featuredProjects[0].title} interface preview" fetchpriority="high" />
        <div class="hero-project-caption" aria-live="polite">
          <div><span class="hero-project-category">${featuredProjects[0].category}</span><strong class="hero-project-title">${featuredProjects[0].title}</strong></div>
          <span class="hero-project-arrow" aria-hidden="true">↗</span>
        </div>
      </a>
      <div class="hero-project-controls">
        <span>Rotates through selected projects</span>
        <div class="hero-project-buttons">
          <button type="button" class="hero-project-previous" aria-label="Show previous featured project">←</button>
          <button type="button" class="hero-project-next" aria-label="Show next featured project">→</button>
        </div>
      </div>
    </section>
  `;
}
