const projects = [
  {
    title: 'Portfolio Landing Page',
    description: 'A responsive portfolio page built with HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    title: 'Interactive Gallery',
    description: 'A project gallery with dynamic filters and animations.',
    link: '#',
  },
  {
    title: 'Contact Form',
    description: 'A working contact form with JavaScript validation.',
    link: '#contact',
  },
];

const projectGrid = document.getElementById('projectGrid');
const formMessage = document.getElementById('formMessage');

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View project</a>
  `;
  return card;
}

projects.forEach(project => {
  projectGrid.appendChild(createProjectCard(project));
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill out all fields.';
    return;
  }

  formMessage.textContent = `Thanks, ${name}! Your message has been received.`;
  contactForm.reset();
});
