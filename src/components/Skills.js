export function Skills() {
  const skillsList = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Git', icon: '🔀' },
    { name: 'Postman', icon: '📮' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'React Native', icon: '📱' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Laravel', icon: '⚙️' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'SQLite', icon: '🗃️' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'APIs & Backend', icon: '🔌' },
    { name: 'Mobile UI / UX', icon: '✨' },
  ];

  const renderSkills = (isDuplicate = false) => skillsList.map((skill) => `
    <div class="skill-box" role="listitem"${isDuplicate ? ' aria-hidden="true"' : ''}>
      <div class="skill-icon-bg">
        <span class="skill-icon">${skill.icon}</span>
      </div>
      <h3 class="skill-name">${skill.name}</h3>
    </div>
  `).join('');

  return `
    <style>
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 25px;
        margin-top: 50px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }
      .skill-box {
        background: #0f121a;
        border: 1px solid rgba(255, 255, 255, 0.05);
        padding: 30px 20px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: transform 0.3s ease, border-color 0.3s ease;
      }
      .skill-box:hover {
        transform: translateY(-8px);
        border-color: var(--accent-cyan);
        box-shadow: 0 10px 25px rgba(0, 240, 255, 0.1);
      }
      .skill-icon-bg {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        transition: background 0.3s ease;
      }
      .skill-box:hover .skill-icon-bg {
        background: rgba(0, 240, 255, 0.1);
        border-color: var(--accent-cyan);
      }
      .skill-icon {
        font-size: 1.8rem;
      }
      .skill-name {
        font-size: 1rem;
        font-weight: 600;
        color: #e2e8f0;
      }
      @media (max-width: 768px) {
        .skills-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    </style>
    <section id="skills" class="bento-panel skills-panel">
      <div class="container">
        <div class="bento-heading">
          <span class="bento-icon">✳</span>
          <div><span class="bento-eyebrow">TECHNICAL TOOLKIT</span><h2 class="section-title fade-up">Skills & tools</h2></div>
        </div>
        <div class="skills-marquee" role="region" aria-label="Technical skills">
          <div class="skills-marquee-track">
            <div class="skills-marquee-group" role="list">${renderSkills()}</div>
            <div class="skills-marquee-group" role="list" aria-hidden="true">${renderSkills(true)}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
