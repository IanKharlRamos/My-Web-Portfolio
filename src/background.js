export function initBackground() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false });

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 160 };

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  
  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 40) + 5;
      // Slight constant movement
      this.velocityX = (Math.random() - 0.5) * 1.2;
      this.velocityY = (Math.random() - 0.5) * 1.2;
    }
    
    update() {
      this.x += this.velocityX;
      this.y += this.velocityY;

      // Bounce off boundaries
      if (this.x < 0 || this.x > width) this.velocityX = -this.velocityX;
      if (this.y < 0 || this.y > height) this.velocityY = -this.velocityY;

      // Mouse interactivity (connecting/repelling)
      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          // Parallax push effect to make space around the mouse
          this.x -= directionX * 0.5;
          this.y -= directionY * 0.5;
        }
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const numberOfParticles = Math.min((width * height) / 10000, 200); // adjust density scaling
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    // Fill background with incredibly dark space color to prevent trails
    ctx.fillStyle = '#030305';
    ctx.fillRect(0, 0, width, height);
    
    // Optional gradient overlay could be drawn here, but keeping it dark makes neon pop!
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      for (let j = i; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        
        let connectRange = 130;
        
        if (distance < connectRange) {
          ctx.beginPath();
          // Fade alpha to 0 as it approaches the maximum connecting range
          let alpha = 1 - (distance / connectRange);
          // Neon purple lines
          ctx.strokeStyle = `rgba(138, 43, 226, ${alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    // Draw mouse orbital
    if (mouse.x && mouse.y) {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.stroke();
    }
    
    requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();
}
