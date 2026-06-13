export function initProjects() {
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.modal-close');
  const overlay = document.querySelector('.modal-overlay');

  if (!modal) return;

  document.querySelectorAll('.btn-details').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = e.target.closest('.project-card');
      const title = card.querySelector('.project-title').textContent;
      const desc = card.querySelector('.project-desc').textContent;
      const imgSrc = card.querySelector('.project-img').src;

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalImg.src = imgSrc;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

export function Projects() {
  const projectsList = [
    {
      title: 'Hyper Access Management',
      category: 'ADMIN',
      desc: 'Hyper Access Management — a centralized project administration dashboard that lets companies track project status in real time, archive completed projects (with restore), and monitor admin-to-user workflows. Includes role-based activity logs, assignment tracking, notifications, and audit history to keep teams accountable and projects traceable.',
      image: '/src/assets/HA.png',
      demoAvailable: false
    },
    {
      title: 'AgriDroneScan',
      category: 'AGRI',
      desc: 'AgriDroneScan — a drone-first field intelligence platform that combines live drone flights with manual image/video uploads to scan and analyze agricultural fields. Operators can fly drones to capture imagery or manually transfer images and videos via the website; the platform stitches panoramas, runs AI-based detection to flag crop stress and pests, estimates field area, and generates shareable field reports with confidence scores. Key features: manual image/video transfer, automated drone ingestion, real-time mapping, AI inference (object detection), scan history, and exportable reports for agronomists and field teams.',
      image: '/src/assets/186da0bd-1aec-4b9b-b06e-df37aa84c4f3.jpg',
      demoAvailable: false
    },
    {
      title: 'Library Booking System',
      category: 'EDU',
      desc: 'School library booking system — students browse available books, reserve items, see due dates, and view penalties for late returns.',
      image: '/src/assets/Library.jpg',
      demoAvailable: false
    },
    {
      title: 'Vaccine Appointment Booking',
      category: 'HEALTH',
      desc: 'Online appointment platform for scheduling doctor visits and vaccine check-ups with calendar booking and reminders.',
      image: '/src/assets/Vaccine.jpg',
      demoAvailable: false
    },
    {
      title: 'Room Rental Portal',
      category: 'RENTAL',
      desc: 'A room booking marketplace where users browse rooms, check availability, and reserve the room they choose.',
      image: '/src/assets/Rent.jpg',
      demoAvailable: false
    },
    {
      title: 'Vehicle Repair Estimator',
      category: 'AUTO',
      desc: 'Repair service portal providing repair cost estimates, service shop booking, and real-time status updates for the customer\'s vehicle.',
      image: '/src/assets/Repair.jpg',
      demoAvailable: false
    }
  ];

  const renderProjects = () => projectsList.map((proj, i) => {
    const demoLink = proj.demoAvailable
      ? `<a href="#" class="demo-link alive">Live Demo <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`
      : `<span class="demo-link dead"></span>`;

    return `
      <div class="project-card hoverable fade-up stagger-${i + 1}">
        <div class="project-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}" class="project-img base-img"/>
        </div>
        <div class="project-info">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-footer">
            ${demoLink}
            <a href="#" class="btn-details">Details &rarr;</a>
          </div>
        </div>
      </div>
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
    <section id="projects">
      <div class="container">
        <h2 class="section-title fade-up">Featured <span>Projects</span></h2>
        <div class="projects-grid">
          ${renderProjects()}
        </div>
      </div>
      
      <!-- Project Modal -->
      <div id="project-modal" class="project-modal">
        <div class="modal-overlay"></div>
        <div class="modal-content-wrapper">
          <button class="modal-close">&times;</button>
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
