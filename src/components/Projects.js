import hyperAccessImage from '../assets/HA.png';
import agriDroneImage from '../assets/186da0bd-1aec-4b9b-b06e-df37aa84c4f3.jpg';
import libraryImage from '../assets/Library.jpg';
import vaccineImage from '../assets/Vaccine.jpg';
import rentalImage from '../assets/Rent.jpg';
import repairImage from '../assets/Repair.jpg';

export function initProjects() {
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.modal-close');
  const overlay = document.querySelector('.modal-overlay');

  if (!modal || !modalImg || !modalTitle || !modalDesc || !closeBtn || !overlay) return;

  let lastTrigger;

  document.querySelectorAll('.btn-details').forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.project-card');
      if (!card) return;
      const title = card.querySelector('.project-title').textContent;
      const desc = card.dataset.description || card.querySelector('.project-desc').textContent;
      const imgSrc = card.querySelector('.project-img').src;

      lastTrigger = e.currentTarget;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalImg.src = imgSrc;
      modalImg.alt = `${title} project preview`;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastTrigger?.focus();
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

export const featuredProjects = [
    {
      title: 'Hyper Access Management',
      category: 'Project management',
      desc: 'A centralized project administration dashboard for monitoring project status, managing assignments, and coordinating administrator-to-user workflows. Features include role-based activity logs, notifications, project archiving with restore, and audit history.',
      summary: 'A project administration dashboard for progress tracking, assignments, and team activity.',
      image: hyperAccessImage,
      demoAvailable: false
    },
    {
      title: 'AgriDroneScan',
      category: 'Agriculture',
      desc: 'An agricultural field-analysis platform that accepts drone imagery and manual image or video uploads. The proposed workflow combines panorama stitching, AI-assisted detection of crop stress and pests, field-area estimates, scan history, and exportable reports for field teams.',
      summary: 'An agricultural field-analysis platform for imagery, crop insights, and shareable reports.',
      image: agriDroneImage,
      demoAvailable: false
    },
    {
      title: 'Library Booking System',
      category: 'Education',
      desc: 'A school library booking system that helps students browse the collection, reserve books, review due dates, and check late-return penalties.',
      summary: 'A library system for browsing books, managing reservations, and tracking due dates.',
      image: libraryImage,
      demoAvailable: false
    },
    {
      title: 'Vaccine Appointment Booking',
      category: 'Healthcare',
      desc: 'An online appointment platform for scheduling doctor visits and vaccine check-ups, with calendar-based booking and appointment reminders.',
      summary: 'An appointment platform for clinic visits and vaccine check-ups.',
      image: vaccineImage,
      demoAvailable: false
    },
    {
      title: 'Room Rental Portal',
      category: 'Property',
      desc: 'A room-rental portal that enables users to browse listings, review availability, and reserve a suitable room.',
      summary: 'A rental portal for browsing rooms, checking availability, and making reservations.',
      image: rentalImage,
      demoAvailable: false
    },
    {
      title: 'Vehicle Repair Estimator',
      category: 'Automotive',
      desc: 'A vehicle service portal for requesting repair estimates, booking a service shop, and following repair progress through status updates.',
      summary: 'A vehicle service portal for repair estimates, workshop bookings, and progress updates.',
      image: repairImage,
      demoAvailable: false
    }
];

export function Projects() {
  const renderProjects = () => featuredProjects.map((proj, i) => {
    const demoLink = proj.demoAvailable
      ? `<a href="#" class="demo-link alive">Live Demo <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`
      : `<span class="demo-link dead">Case study</span>`;

    return `
      <article class="project-card hoverable fade-up stagger-${(i % 3) + 1}" data-description="${proj.desc}">
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title} interface preview" class="project-img base-img" loading="lazy"/>
        </div>
        <div class="project-info">
          <span class="project-category">${proj.category}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.summary}</p>
          <div class="project-footer">
            ${demoLink}
            <button type="button" class="btn-details">Details &rarr;</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <style>
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-top: 50px;
        align-items: stretch;
      }

      /* Card base + smooth motion */
      .project-card {
        position: relative;
        overflow: hidden;
        background: #0f121a;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        transform-origin: center;
        will-change: transform;
        transition: transform 0.6s cubic-bezier(.2,.9,.2,1),
                    box-shadow 0.6s cubic-bezier(.2,.9,.2,1),
                    border-color 0.4s ease,
                    opacity 0.8s ease-out;
      }

      /* Subtle shine sweep on hover */
      .project-card::before {
        content: '';
        position: absolute;
        top: -40%;
        left: -60%;
        width: 220%;
        height: 180%;
        background: linear-gradient(120deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%);
        transform: translateX(-100%) rotate(12deg);
        transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.6s ease;
        opacity: 0;
        pointer-events: none;
      }
      .project-card:hover::before { transform: translateX(20%) rotate(12deg); opacity: 1; }

      .project-card:hover {
        transform: translateY(-12px) scale(1.01) rotateZ(-0.2deg);
        border-color: rgba(138, 43, 226, 0.5);
        box-shadow: 0 30px 60px rgba(0,0,0,0.55);
      }

      .project-img-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
        transform-style: preserve-3d;
        backface-visibility: hidden;
      }

      .project-img-wrapper::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.18) 100%);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
      }
      .project-card:hover .project-img-wrapper::after { opacity: 1; }

      .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(.2,.9,.2,1), filter 0.6s ease;
        will-change: transform;
      }
      .project-card:hover .base-img {
        transform: scale(1.08) translateY(-6px) rotateZ(-0.3deg);
        filter: brightness(1.02) saturate(1.06);
      }

      /* Info reveal */
      .project-info {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        transition: transform 0.6s cubic-bezier(.2,.9,.2,1), opacity 0.6s ease;
        transform: translateY(6px);
        opacity: 0.98;
      }
      .project-card:hover .project-info { transform: translateY(0); opacity: 1; }

      .project-title {
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 12px;
        color: #e2e8f0;
      }
      .project-desc {
        font-size: 0.85rem;
        color: #94a3b8;
        line-height: 1.6;
        margin-bottom: 25px;
        flex-grow: 1;
        transition: color 0.3s ease;
      }
      .project-card:hover .project-desc { color: #aab7c9; }

      .project-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 15px;
        margin-top: auto;
      }
      .demo-link.dead {
        color: #475569;
        font-size: 0.85rem;
        font-weight: 500;
      }
      .demo-link.alive {
        color: #3b82f6;
        font-size: 0.85rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
      }
      .demo-link.alive:hover { text-decoration: underline; }

      .btn-details {
        background: rgba(255, 255, 255, 0.05);
        color: #fff;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.3s ease, transform 0.25s ease;
      }
      .btn-details:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-2px); }

      @media (max-width: 1024px) {
        .projects-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 768px) {
        .projects-grid { grid-template-columns: 1fr; }
      }

      /* Project Modal */
      .project-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.4s ease, visibility 0.4s ease;
      }
      .project-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(3, 3, 5, 0.85);
        backdrop-filter: blur(8px);
        cursor: pointer;
      }
      .modal-content-wrapper {
        position: relative;
        background: #0f121a;
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 16px;
        max-width: 900px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 60px rgba(0, 240, 255, 0.15);
        transform: scale(0.95) translateY(20px);
        transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.2, 1);
      }
      .project-modal.active .modal-content-wrapper {
        transform: scale(1) translateY(0);
      }
      .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
        padding-bottom: 4px;
      }
      .modal-close:hover {
        background: rgba(255, 40, 40, 0.8);
        transform: rotate(90deg);
      }
      #modal-img {
        width: 100%;
        max-height: 55vh;
        object-fit: contain;
        background: rgba(0,0,0,0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }
      .modal-text {
        padding: 40px;
      }
      #modal-title {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 15px;
      }
      #modal-desc {
        font-size: 1.05rem;
        color: #cbd5e1;
        line-height: 1.8;
      }
    </style>
    <section id="projects" class="bento-panel projects-panel">
      <div class="container">
        <div class="bento-heading">
          <span class="bento-icon">▧</span>
          <div>          <span class="bento-eyebrow">SELECTED WORK</span><h2 class="section-title fade-up">Projects</h2></div>
          <span class="bento-heading-note">Ideas turned into useful tools</span>
        </div>
        <div class="projects-grid">
          ${renderProjects()}
        </div>
      </div>
      
      <!-- Project Modal -->
      <div id="project-modal" class="project-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
        <div class="modal-overlay"></div>
        <div class="modal-content-wrapper">
          <button type="button" class="modal-close" aria-label="Close project details">&times;</button>
          <img id="modal-img" src="" alt="Project Preview" />
          <div class="modal-text">
            <h3 id="modal-title"></h3>
            <p id="modal-desc"></p>
          </div>
        </div>
      </div>
    </section>
  `;
}
