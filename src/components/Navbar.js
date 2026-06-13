export function Navbar() {
  return `
    <style>
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 15px 0;
        background: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        border-bottom: none;
        z-index: 100;
        transition: all 0.3s ease;
        box-shadow: none;
      }

      .navbar::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background: transparent;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .navbar:hover::after {
        opacity: 0;
      }

      .navbar.scrolled {
        padding: 12px 0;
        background: transparent;
        border-bottom-color: transparent;
        box-shadow: none;
      }

      .nav-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        padding-right: 60px;
      }

      .brand {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: 2px;
        background: linear-gradient(135deg, var(--text-primary) 0%, rgba(255, 255, 255, 0.9) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease;
      }

      .brand span {
        color: var(--accent-cyan);
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .brand:hover {
        filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.4));
      }

      /* Animated brand letters */
      .brand-letter {
        display: inline-block;
        transform-origin: center;
        transition: all 0.2s ease;
      }

      .nav-links {
        display: flex;
        gap: 40px;
        align-items: center;
      }

      .nav-links a {
        font-size: 0.95rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        position: relative;
        padding: 8px 0;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
        color: rgba(255, 255, 255, 0.8);
      }

      .nav-links a .nav-text {
        display: inline-block;
        transition: all 0.3s ease;
      }

      .nav-links a .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, var(--accent-cyan), rgba(0, 240, 255, 0.5));
        pointer-events: none;
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
        transition: width 0.3s ease;
      }

      .nav-links a:hover .underline {
        width: 100%;
      }

      .nav-links a:hover .nav-text {
        color: var(--accent-cyan);
        text-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
        transform: translateY(-2px);
      }

      @media (max-width: 768px) {
        .nav-container {
          padding: 0 20px;
        }

        .nav-links { 
          gap: 20px;
        }

        .nav-links a {
          font-size: 0.85rem;
          letter-spacing: 0.8px;
        }
      }
    </style>
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <ul class="nav-links">
          <li><a href="#hero" class="hoverable"><span class="nav-text">Home</span><span class="underline"></span></a></li>
          <li><a href="#about" class="hoverable"><span class="nav-text">About</span><span class="underline"></span></a></li>
          <li><a href="#skills" class="hoverable"><span class="nav-text">Skills</span><span class="underline"></span></a></li>
          <li><a href="#projects" class="hoverable"><span class="nav-text">Projects</span><span class="underline"></span></a></li>
          <li><a href="#certificates" class="hoverable"><span class="nav-text">Certificates</span><span class="underline"></span></a></li>
          <li><a href="#contact" class="hoverable"><span class="nav-text">Contact</span><span class="underline"></span></a></li>
        </ul>
      </div>
    </nav>
  `;
}
