import profilePic from '../assets/K.jpg';

export function About() {
  return `
    <style>
      #about {
        padding: 100px 0;
      }

      .about-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .about-left {
        position: relative;
        z-index: 1;
      }

      .about-greeting {
        font-size: 1.3rem;
        color: rgba(99, 102, 241, 0.9);
        font-weight: 600;
        margin-bottom: 10px;
        animation: fade-in-up 0.6s ease 0.1s backwards;
      }

      .about-heading {
        font-size: 3.5rem;
        font-weight: 900;
        color: var(--text-primary);
        margin-bottom: 30px;
        line-height: 1.2;
        animation: fade-in-up 0.6s ease 0.2s backwards;
      }

      .about-description {
        font-size: 1.05rem;
        color: var(--text-secondary);
        line-height: 1.8;
        margin-bottom: 30px;
        animation: fade-in-up 0.6s ease 0.3s backwards;
      }

      .about-quote {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
        border-left: 4px solid rgba(99, 102, 241, 0.6);
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 40px;
        font-size: 1rem;
        font-style: italic;
        color: var(--text-secondary);
        animation: fade-in-up 0.6s ease 0.4s backwards;
      }

      .about-buttons {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        animation: fade-in-up 0.6s ease 0.5s backwards;
      }

      .about-btn {
        padding: 14px 28px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
      }

      .about-btn.primary {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
        color: white;
      }

      .about-btn.primary:hover {
        background: linear-gradient(135deg, rgba(99, 102, 241, 1), rgba(139, 92, 246, 1));
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
      }

      .about-btn.secondary {
        background: transparent;
        color: var(--text-primary);
        border: 2px solid rgba(99, 102, 241, 0.4);
      }

      .about-btn.secondary:hover {
        background: rgba(99, 102, 241, 0.1);
        border-color: rgba(99, 102, 241, 0.8);
        transform: translateY(-3px);
      }

      .about-right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .about-image-wrapper {
        width: 350px;
        height: 350px;
        border-radius: 24px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(0, 240, 255, 0.15);
        animation: float 6s ease-in-out infinite;
        border: 2px solid rgba(99, 102, 241, 0.2);
      }

      .about-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease;
      }

      .about-image-wrapper:hover img {
        transform: scale(1.05);
      }

      .about-glow {
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 28px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
        pointer-events: none;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 1024px) {
        .about-section {
          grid-template-columns: 1fr;
          gap: 60px;
        }

        .about-heading {
          font-size: 2.8rem;
        }

        .about-image-wrapper {
          width: 280px;
          height: 280px;
        }

        .about-glow {
          width: 310px;
          height: 310px;
        }
      }

      @media (max-width: 768px) {
        #about {
          padding: 60px 0;
        }

        .about-section {
          gap: 40px;
        }

        .about-heading {
          font-size: 2rem;
        }

        .about-description {
          font-size: 0.95rem;
        }

        .about-buttons {
          flex-direction: column;
        }

        .about-btn {
          justify-content: center;
        }

        .about-image-wrapper {
          width: 220px;
          height: 220px;
        }

        .about-glow {
          width: 250px;
          height: 250px;
        }
      }
    </style>
    <section id="about" class="bento-panel about-panel">
      <div class="container">
        <div class="about-section fade-up">
          <div class="about-left">
            <span class="bento-eyebrow">PROFESSIONAL PROFILE</span>
            <div class="about-greeting">Hello, I'm</div>
            <h2 class="about-heading">Ian Kharl Ramos</h2>
            
            <p class="about-description">
              I’m an Information Technology graduate focused on web development, networking, and database management. I build clear, dependable digital experiences and enjoy turning practical requirements into useful applications.
            </p>

            <div class="about-quote">
              My approach combines thoughtful interface design, reliable data, and maintainable implementation.
            </div>

            <div class="about-buttons">
              <a href="#contact" class="about-btn primary">Get in touch</a>
              <a href="#projects" class="about-btn secondary">Explore projects</a>
            </div>
          </div>

          <div class="about-right">
            <div class="about-glow"></div>
            <div class="about-image-wrapper">
              <img src="${profilePic}" alt="Ian Kharl Ramos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
