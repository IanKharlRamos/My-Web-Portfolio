export function Contact() {
  return `
    <style>
      #contact {
        position: relative;
        padding: 80px 0 120px;
      }

      .bento-container {
        max-width: 650px;
        margin: 0 auto;
        background: #1e1e24; /* Dark theme */
        border-radius: 24px;
        padding: 40px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        border: 1px solid rgba(255, 255, 255, 0.05);
        position: relative;
        z-index: 1;
      }

      .bento-container::before {
        content: '';
        position: absolute;
        top: -50px;
        left: -50px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
        z-index: -1;
        pointer-events: none;
      }

      .bento-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
      }

      .bento-dash {
        width: 32px;
        height: 4px;
        background: #6366f1;
        border-radius: 2px;
      }

      .bento-header h3 {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 700;
        margin: 0;
        letter-spacing: 0.5px;
      }

      .bento-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .bento-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 16px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 18px;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .bento-card:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }

      .bento-card.span-2 {
        grid-column: span 2;
      }

      .icon-box {
        width: 50px;
        height: 50px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .icon-box svg {
        width: 24px;
        height: 24px;
      }

      .bento-card.fb .icon-box { background: rgba(24, 119, 242, 0.15); color: #1877f2; }
      .bento-card.ig .icon-box { background: rgba(225, 48, 108, 0.15); color: #e1306c; }
      .bento-card.yt .icon-box { background: rgba(255, 0, 0, 0.15); color: #ff0000; }
      .bento-card.tt .icon-box { background: rgba(255, 255, 255, 0.08); color: #fff; }
      .bento-card.gh .icon-box { background: rgba(255, 255, 255, 0.12); color: #fff; }
      .bento-card.gm .icon-box { background: rgba(234, 67, 53, 0.15); color: #ea4335; }

      .tt-accent-1 { filter: drop-shadow(2px 0px 0px #ff0050) drop-shadow(-2px 0px 0px #00f2fe); }

      .text-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }

      .text-box h4 {
        color: #fff;
        font-size: 1.1rem;
        margin: 0 0 3px 0;
        font-weight: 700;
        text-align: left;
      }

      .text-box span {
        color: #94a3b8;
        font-size: 0.85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      @media (max-width: 650px) {
        .bento-grid {
          grid-template-columns: 1fr;
        }
        .bento-card.span-2 {
          grid-column: span 1;
        }
        .bento-container {
          padding: 30px 20px;
        }
      }

      .contact-wrapper {
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: space-between;
      }
      .contact-info {
        flex: 1;
        max-width: 450px;
      }
      .contact-desc {
        font-size: 1.15rem;
        color: #94a3b8;
        line-height: 1.8;
        margin-bottom: 30px;
      }
      .pulse-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: #10b981;
        border-radius: 50%;
        margin-right: 10px;
        box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
        animation: pulse-green 2s infinite;
      }
      @keyframes pulse-green {
        0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
      }
      .status-indicator {
        display: inline-flex;
        align-items: center;
        padding: 10px 20px;
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.2);
        border-radius: 30px;
        color: #10b981;
        font-weight: 600;
        font-size: 0.95rem;
      }
      @media (max-width: 968px) {
        .contact-wrapper {
          flex-direction: column;
          text-align: center;
        }
        .contact-info {
          max-width: 100%;
        }
        .section-title {
          text-align: center !important;
        }
        .bento-container {
          margin: 0 auto;
        }
      }
    </style>
    <section id="contact">
      <div class="container fade-up">
        
        <div class="contact-wrapper">
          <div class="contact-info">
             <h2 class="section-title" style="text-align: left; margin-bottom: 20px;">Let's <span>Connect</span></h2>
             <p class="contact-desc">I'm currently available for freelance work and open to new opportunities. Whether you have a question or just want to collaborate, feel free to reach out to me through any of these platforms!</p>
             <div class="contact-extra">
               <div class="status-indicator">
                 <span class="pulse-dot"></span>
                 Available for Work
               </div>
             </div>
          </div>

          <div class="bento-container hoverable">
          <div class="bento-header">
            <div class="bento-dash"></div>
            <h3>Connect With Me</h3>
          </div>
          
          <div class="bento-grid">
            <!-- Facebook -->
            <a href="https://www.facebook.com/http.kharltzy" target="_blank" class="bento-card span-2 fb">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Let's Connect</h4>
                <span>on Facebook (@http.kharltzy)</span>
              </div>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/ayans_/" target="_blank" class="bento-card ig">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div class="text-box">
                <h4>Instagram</h4>
                <span>@ayans_</span>
              </div>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@IANKHARLRAMOS" target="_blank" class="bento-card yt">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Youtube</h4>
                <span>@IANKHARLRAMOS</span>
              </div>
            </a>

            <!-- Github -->
            <a href="https://github.com/iankharl" target="_blank" class="bento-card gh">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Github</h4>
                <span>@iankharl</span>
              </div>
            </a>

            <!-- Tiktok -->
            <a href="https://www.tiktok.com/@http_zidanitz" target="_blank" class="bento-card tt">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor" class="tt-accent-1">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.75 3.9-2.05 5.34-1.46 1.62-3.65 2.51-5.84 2.3-2.61-.26-4.9-1.92-5.89-4.32-.97-2.33-.65-5.11.85-7.14 1.34-1.83 3.6-2.9 5.86-2.9 0 1.35.01 2.7.01 4.05-1.16-.06-2.34.22-3.28.89-.92.65-1.55 1.7-1.6 2.85-.06 1.3.49 2.61 1.48 3.39.95.76 2.28 1 3.44.69 1.14-.31 2.05-1.21 2.4-2.35.15-.51.22-1.05.22-1.58V.02h3.29z"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Tiktok</h4>
                <span>@http_zidanitz</span>
              </div>
            </a>

            <!-- Gmail -->
            <a href="mailto:iankharl.ramos@hcdc.edu.ph" class="bento-card span-2 gm">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="text-box">
                <h4>Gmail</h4>
                <span>iankharl.ramos@hcdc.edu.ph</span>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  `;
}
