const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particles = [];

class Particle {
  constructor() {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.speedX = -2 + Math.random() * 4;
    this.speedY = -2 + Math.random() * 4;
    this.color = '#00ff00'; // Màu sắc hacker thường là xanh lục (#00ff00).
  }

  move() {
    this.x += this.speedX * 0.5;
    this.y += this.speedY *0.5;

    if (this.x < 0 || this.x > canvas.width) {
      this.speedX = -this.speedX;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.speedY = -this.speedY;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createParticles() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].draw();
  }

  requestAnimationFrame(update);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

createParticles();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
update();

setTimeout(() => {
    alert("Đùa đấy =)))))))");
}, 2000);