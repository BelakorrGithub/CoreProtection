const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
}
resize();
window.addEventListener('resize', resize);

// Cuadrado
let square = {
  x: window.innerWidth / 2 - 50,
  y: window.innerHeight / 2 - 50,
  size: 100,
  alive: true,
  exploding: false,
  explosionRadius: 0
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (square.alive) {
    ctx.fillStyle = 'white';
    ctx.fillRect(square.x, square.y, square.size, square.size);
  }

  if (square.exploding) {
    ctx.beginPath();
    ctx.arc(
      square.x + square.size / 2,
      square.y + square.size / 2,
      square.explosionRadius,
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 4;
    ctx.stroke();

    square.explosionRadius += 6;
    if (square.explosionRadius > 80) {
      square.exploding = false;
    }
  }

  requestAnimationFrame(draw);
}

canvas.addEventListener('pointerdown', e => {
  const x = e.clientX;
  const y = e.clientY;

  if (
    square.alive &&
    x >= square.x &&
    x <= square.x + square.size &&
    y >= square.y &&
    y <= square.y + square.size
  ) {
    square.alive = false;
    square.exploding = true;
    square.explosionRadius = 0;
  }
});

draw();
