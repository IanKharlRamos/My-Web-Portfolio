export function Certificates() {
  const certs = [
    {
      title: 'Introduction to SQL',
      issuer: 'Simplilearn SkillUP',
      year: 'Aug 2024',
      image: '/src/assets/cert1.jpg',
      desc: 'Successfully completed the online course on Introduction to SQL, demonstrating initiative and commitment to advancing database skills.'
    },
    {
      title: 'Database Management System',
      issuer: 'Great Learning Academy',
      year: 'Aug 2024',
      image: '/src/assets/cert2.jpg',
      desc: 'For successfully completing a free online course on Database Management System, provided by Great Learning Academy.'
    },
    {
      title: 'AWS Educate Introduction to Cloud 101',
      issuer: 'Amazon Web Services Training',
      year: 'Aug 2024',
      image: '/src/assets/cert3.jpg',
      desc: 'Successfully completed AWS Educate Introduction to Cloud Computing 101 course, demonstrating comprehensive understanding of cloud computing fundamentals and AWS services.'
    }
  ];

  const renderCerts = () => certs.map((cert, i) => `
    <div class="cert-card hoverable fade-up stagger-${i + 1}" onclick="openLightbox('${cert.image}', '${cert.title}')">
      <div class="cert-image-wrapper">
        <img src="${cert.image}" alt="${cert.title}" class="cert-img" loading="lazy" />
        <div class="cert-overlay">
          <div class="cert-overlay-icon">
            <svg width="32" height="32" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
            </svg>
            <span>View Certificate</span>
          </div>
        </div>
      </div>
      <div class="cert-info">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-desc">${cert.desc}</p>
        <div class="cert-footer">
          <span class="cert-issuer">${cert.issuer}</span>
          <span class="cert-year">${cert.year}</span>
        </div>
      </div>
    </div>
  `).join('');

  const setupLightbox = () => {
    if (typeof window !== 'undefined' && !window.openLightbox) {
      window.openLightbox = (src, title) => {
        const lb = document.getElementById('cert-lightbox');
        if (lb) {
          lb.querySelector('.lb-img').src = src;
          lb.querySelector('.lb-title').textContent = title;
          lb.style.display = 'flex';
          setTimeout(() => lb.classList.add('lb-visible'), 10);
        }
      };
      window.closeLightbox = () => {
        const lb = document.getElementById('cert-lightbox');
        if (lb) {
          lb.classList.remove('lb-visible');
          setTimeout(() => { lb.style.display = 'none'; }, 300);
        }
      };
    }
  };
  setTimeout(setupLightbox, 100);

  return `
    <style>
      .certs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 36px;
        margin-top: 50px;
        align-items: stretch;
      }

      .cert-card {
        background: linear-gradient(135deg, rgba(15, 18, 26, 0.7) 0%, rgba(10, 12, 20, 0.85) 100%);
        border: 1px solid rgba(0, 240, 255, 0.15);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: transform 0.4s cubic-bezier(.2,.9,.2,1), 
                    border-color 0.3s ease, 
                    box-shadow 0.4s cubic-bezier(.2,.9,.2,1),
                    opacity 0.8s ease-out;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        position: relative;
      }

      .cert-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 1;
      }

      .cert-card:hover::before {
        opacity: 1;
      }

      .cert-card:hover {
        transform: translateY(-12px) scale(1.02);
        border-color: rgba(0, 240, 255, 0.4);
        box-shadow: var(--glow-cyan-strong), 0 20px 50px rgba(0, 240, 255, 0.15);
      }
      .cert-image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        background: #fff;
      }

      .cert-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s cubic-bezier(.2,.9,.2,1), filter 0.4s ease;
      }

      .cert-card:hover .cert-img {
        transform: scale(1.08) translateY(-4px);
        filter: brightness(1.05) saturate(1.1);
      }

      .cert-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(10, 10, 20, 0.7) 0%, rgba(30, 20, 50, 0.8) 100%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .cert-card:hover .cert-overlay {
        opacity: 1;
      }

      .cert-overlay-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .cert-overlay-icon svg {
        filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.4));
        animation: float-icon 1.5s ease-in-out infinite;
      }

      .cert-overlay-icon span {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      @keyframes float-icon {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .cert-info {
        padding: 24px 26px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: linear-gradient(180deg, transparent 0%, rgba(0, 240, 255, 0.02) 100%);
        position: relative;
        z-index: 2;
      }

      .cert-title {
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 10px;
        color: #e2e8f0;
        transition: color 0.3s ease;
      }

      .cert-card:hover .cert-title {
        color: var(--accent-cyan);
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .cert-desc {
        font-size: 0.85rem;
        color: #94a3b8;
        line-height: 1.6;
        margin-bottom: 22px;
        flex-grow: 1;
      }

      .cert-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(0, 240, 255, 0.1);
        padding-top: 14px;
        margin-top: auto;
        transition: border-color 0.3s ease;
      }

      .cert-card:hover .cert-footer {
        border-color: rgba(0, 240, 255, 0.25);
      }

      .cert-issuer {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--accent-cyan);
        transition: all 0.3s ease;
      }

      .cert-card:hover .cert-issuer {
        text-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
      }

      .cert-year {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--text-secondary, #94a3b8);
      }

      #cert-lightbox {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
      }

      #cert-lightbox.lb-visible {
        opacity: 1;
      }

      .lb-img {
        max-width: 90vw;
        max-height: 80vh;
        border-radius: 12px;
        box-shadow: var(--glow-cyan-strong), 0 30px 80px rgba(0, 0, 0, 0.8);
        object-fit: contain;
        animation: scale-in 0.3s ease;
      }

      @keyframes scale-in {
        0% { transform: scale(0.9); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }

      .lb-title {
        color: #e2e8f0;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
      }

      .lb-close {
        position: absolute;
        top: 20px;
        right: 28px;
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.2s, text-shadow 0.2s;
      }

      .lb-close:hover { 
        opacity: 1;
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
      }

      @media (max-width: 768px) {
        .certs-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div id="cert-lightbox" onclick="if(event.target===this) closeLightbox()">
      <button class="lb-close" onclick="closeLightbox()">&times;</button>
      <img class="lb-img" src="" alt="Certificate" />
      <p class="lb-title"></p>
    </div>

    <section id="certificates">
      <div class="container">
        <h2 class="section-title fade-up">My <span>Certificates</span></h2>
        <div class="certs-grid">
          ${renderCerts()}
        </div>
      </div>
    </section>
  `;
}
