export function Skills() {
  const skillsList = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'React Native', icon: '📱' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'APIs & Backend', icon: '🔌' },
    { name: 'Mobile UI / UX', icon: '✨' },
  ];

  const renderSkills = () => skillsList.map((skill, index) => `
    <div class="skill-box hoverable fade-up stagger-${(index % 3) + 1}">
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
    <section id="skills">
      <div class="container">
        <h2 class="section-title fade-up">My <span>Skills</span></h2>
        <div class="skills-grid">
          ${renderSkills()}
        </div>
      </div>
    </section>
  `;
}
