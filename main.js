const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const hudLevel = document.getElementById('level');
const hudWave = document.getElementById('wave');
const countdownEl = document.getElementById('countdown');
const gameoverEl = document.getElementById('gameover');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const skillsBar = document.getElementById('skills');
const skillButtons = document.querySelectorAll('.skill');

let width = window.innerWidth;
let height = window.innerHeight;
let dpr = window.devicePixelRatio || 1;

const state = {
  running: false,
  level: 1,
  wave: 1,
  wavesTotal: 5,
  countdown: 3,
  spawnTimer: 0,
  spawnInterval: 1.1,
  lastTime: 0
};

const baseCoreRadius = 28;
const baseShieldRadius = 68;
const layerGap = 24;
const maxLayers = 3;
const shieldLayers = [
  { radius: baseShieldRadius, max: 100, hp: 100 }
];

const core = {
  radius: baseCoreRadius,
  alive: true
};

const layout = {
  x: width / 2,
  y: height / 2,
  scale: 1,
  safeBottom: 0
};

const missiles = [];
const explosions = [];
let stars = [];
let screenFlash = 0;
let shockwave = 0;

let audioCtx = null;
let masterGain = null;
let melodyTimer = null;
let gamePulse = null;
let countdownTimer = null;
let gameGain = null;

const skillCooldowns = {
  nova: 5,
  regen: 5
};
const skillState = {
  nova: 0,
  regen: 0
};

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createStars();
  updateLayout();
}

function createStars() {
  const count = Math.floor((width + height) * 0.35);
  stars = [];
  for (let i = 0; i < count; i += 1) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.3,
      tw: Math.random() * Math.PI * 2
    });
  }
}

function updateLayout() {
  const skillsRect = skillsBar.getBoundingClientRect();
  layout.safeBottom = skillsRect.height + 16;
  const safeTop = 56;
  const availableHeight = Math.max(200, height - layout.safeBottom - safeTop);
  layout.x = width / 2;
  layout.y = safeTop + availableHeight / 2;
  const minDim = Math.min(width, height - layout.safeBottom);
  layout.scale = Math.min(1.2, Math.max(0.6, minDim / 520));
  core.radius = baseCoreRadius * layout.scale;
  shieldLayers.forEach((layer, index) => {
    layer.radius = (baseShieldRadius + layerGap * index) * layout.scale;
  });
}

function center() {
  return { x: layout.x, y: layout.y };
}

function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.2;
  masterGain.connect(audioCtx.destination);

  gameGain = audioCtx.createGain();
  gameGain.gain.value = 0.0001;
  gameGain.connect(masterGain);

  const padGain = audioCtx.createGain();
  padGain.gain.value = 0.1;
  padGain.connect(gameGain);

  const osc1 = audioCtx.createOscillator();
  osc1.type = 'sine';
  osc1.frequency.value = 110;
  osc1.connect(padGain);

  const osc2 = audioCtx.createOscillator();
  osc2.type = 'triangle';
  osc2.frequency.value = 220;
  osc2.connect(padGain);

  const lfo = audioCtx.createOscillator();
  const lfoGain = audioCtx.createGain();
  lfo.frequency.value = 0.08;
  lfoGain.gain.value = 0.08;
  lfo.connect(lfoGain);
  lfoGain.connect(padGain.gain);

  const pulseGain = audioCtx.createGain();
  pulseGain.gain.value = 0.1;
  pulseGain.connect(gameGain);
  const pulse = audioCtx.createOscillator();
  pulse.type = 'square';
  pulse.frequency.value = 220;
  pulse.connect(pulseGain);
  gamePulse = pulse;

  osc1.start();
  osc2.start();
  lfo.start();
  pulse.start();

  const melody = [196, 220, 247, 262, 294, 330, 294, 262, 247, 220];
  let step = 0;
  melodyTimer = setInterval(() => {
    const freq = melody[step % melody.length];
    pulse.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.02);
    step += 1;
  }, 240);

}

function setMusicMode(mode) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  if (mode === 'game') {
    gameGain.gain.exponentialRampToValueAtTime(0.24, now + 0.4);
  } else {
    gameGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
  }
}

function stopMusic() {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  gameGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
}

function playSfx(type) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  if (type === 'hit') {
    const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.4, audioCtx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.35);
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.6, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    noise.start(now);
    noise.stop(now + 0.35);
    return;
  }

  if (type === 'boom') {
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc1.type = 'sawtooth';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(180, now);
    osc2.frequency.setValueAtTime(90, now);
    osc1.frequency.exponentialRampToValueAtTime(50, now + 0.4);
    osc2.frequency.exponentialRampToValueAtTime(40, now + 0.4);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.7, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(masterGain);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.45);
    osc2.stop(now + 0.45);
    return;
  }

  if (type === 'tick') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.15);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.35, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.2);
    return;
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(masterGain);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.4, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

  if (type === 'shield') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(360, now);
  } else if (type === 'nova') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.3);
  } else if (type === 'core') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
  } else {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
  }

  osc.start(now);
  osc.stop(now + 0.6);
}

function resetGame() {
  state.running = false;
  state.countdown = 3;
  state.spawnTimer = 0;
  state.spawnInterval = 1.1;
  state.lastTime = 0;
  state.wave = 1;
  core.alive = true;
  shieldLayers.forEach(layer => {
    layer.hp = layer.max;
  });
  missiles.length = 0;
  gameoverEl.classList.add('hidden');
}

function spawnMissile() {
  const edge = Math.floor(Math.random() * 4);
  const offset = 40;
  let x = 0;
  let y = 0;
  if (edge === 0) {
    x = Math.random() * width;
    y = -offset;
  } else if (edge === 1) {
    x = width + offset;
    y = Math.random() * height;
  } else if (edge === 2) {
    x = Math.random() * width;
    y = height + offset;
  } else {
    x = -offset;
    y = Math.random() * height;
  }
  const target = center();
  const angle = Math.atan2(target.y - y, target.x - x);
  const distance = Math.hypot(target.x - x, target.y - y);
  const roll = Math.random();
  let type = 'normal';
  if (roll > 0.88) {
    type = 'tank';
  } else if (roll > 0.7) {
    type = 'fast';
  }

  let travelTime = 2.6 + Math.random() * 1.2;
  let radius = 10 + Math.random() * 4;
  let hp = 1;
  if (type === 'fast') {
    travelTime = 1.6 + Math.random() * 0.8;
    radius = 8 + Math.random() * 3;
  } else if (type === 'tank') {
    travelTime = 3.6 + Math.random() * 1.2;
    radius = 18 + Math.random() * 4;
    const hpRoll = Math.random();
    if (hpRoll < 0.55) {
      hp = 2;
    } else if (hpRoll < 0.85) {
      hp = 3;
    } else if (hpRoll < 0.95) {
      hp = 4;
    } else {
      hp = 5;
    }
  }
  const speed = distance / travelTime;
  missiles.push({
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: radius,
    type,
    hp
  });
}

function update(dt) {
  updateCooldowns(dt);
  updateExplosions(dt);
  updateScreenEffects(dt);
  if (!state.running || !core.alive) return;

  state.spawnTimer += dt;
  if (state.spawnTimer >= state.spawnInterval) {
    state.spawnTimer = 0;
    spawnMissile();
  }

  const target = center();
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    const m = missiles[i];
    m.x += m.vx * dt;
    m.y += m.vy * dt;

    const dx = m.x - target.x;
    const dy = m.y - target.y;
    const dist = Math.hypot(dx, dy);

    const activeLayer = shieldLayers.find(layer => layer.hp > 0);
    const shieldRadius = activeLayer ? activeLayer.radius : 0;

    if (shieldRadius > 0 && dist <= shieldRadius) {
      activeLayer.hp = Math.max(0, activeLayer.hp - 25);
      missiles.splice(i, 1);
      playSfx('shield');
      triggerExplosion(m.x, m.y, '#6ecbff', 28, 0.18);
      continue;
    }

    if (dist <= core.radius) {
      core.alive = false;
      state.running = false;
      missiles.splice(i, 1);
      playSfx('core');
      triggerExplosion(target.x, target.y, '#ffb347', 140, 0.7, 18);
      gameoverEl.classList.remove('hidden');
      stopMusic();
    }
  }

}

function drawBackground() {
  const gradient = ctx.createRadialGradient(
    width * 0.5,
    height * 0.4,
    10,
    width * 0.5,
    height * 0.4,
    Math.max(width, height)
  );
  gradient.addColorStop(0, '#1a2a4f');
  gradient.addColorStop(0.5, '#070b16');
  gradient.addColorStop(1, '#020308');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (const star of stars) {
    const alpha = 0.4 + Math.sin(star.tw + state.lastTime * 0.002) * 0.3;
    ctx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawCore() {
  const { x, y } = center();

  for (let i = 0; i < maxLayers; i += 1) {
    const radius = (baseShieldRadius + layerGap * i) * layout.scale;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(80, 140, 200, 0.12)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  for (const layer of shieldLayers) {
    if (layer.hp <= 0) continue;
    const ratio = layer.hp / layer.max;
    ctx.beginPath();
    ctx.arc(x, y, layer.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(80, 200, 255, ${0.4 + ratio * 0.5})`;
    ctx.lineWidth = 6 + ratio * 4;
    ctx.shadowColor = 'rgba(80, 200, 255, 0.8)';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  ctx.beginPath();
  ctx.arc(x, y, core.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#ffb347';
  ctx.shadowColor = 'rgba(255, 180, 70, 0.8)';
  ctx.shadowBlur = 18;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.arc(x, y, core.radius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = '#ffe1b3';
  ctx.fill();
}

function drawMissiles() {
  for (const m of missiles) {
    const angle = Math.atan2(m.vy, m.vx);
    const isFast = m.type === 'fast';
    const isTank = m.type === 'tank';
    const length = m.r * (isFast ? 3.2 : 2.4);
    const width = m.r * (isFast ? 0.7 : 1.1);
    const tipX = m.x + Math.cos(angle) * length * 0.6;
    const tipY = m.y + Math.sin(angle) * length * 0.6;
    const leftX = m.x + Math.cos(angle + Math.PI * 0.75) * width;
    const leftY = m.y + Math.sin(angle + Math.PI * 0.75) * width;
    const rightX = m.x + Math.cos(angle - Math.PI * 0.75) * width;
    const rightY = m.y + Math.sin(angle - Math.PI * 0.75) * width;
    const tailX = m.x - Math.cos(angle) * length * 0.6;
    const tailY = m.y - Math.sin(angle) * length * 0.6;

    if (isTank) {
      ctx.fillStyle = '#7fdc7a';
    } else if (isFast) {
      ctx.fillStyle = '#6ce3ff';
    } else {
      ctx.fillStyle = '#ff7c57';
    }
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(leftX, leftY);
    ctx.lineTo(tailX, tailY);
    ctx.lineTo(rightX, rightY);
    ctx.closePath();
    ctx.fill();

    if (!isTank) {
      ctx.strokeStyle = isFast ? 'rgba(160, 240, 255, 0.8)' : 'rgba(255, 220, 180, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    if (!isTank) {
      const finX = m.x - Math.cos(angle) * length * 0.15;
      const finY = m.y - Math.sin(angle) * length * 0.15;
      ctx.beginPath();
      ctx.moveTo(finX, finY);
      ctx.lineTo(
        finX + Math.cos(angle + Math.PI / 2) * width * 0.7,
        finY + Math.sin(angle + Math.PI / 2) * width * 0.7
      );
      ctx.lineTo(
        finX + Math.cos(angle - Math.PI / 2) * width * 0.7,
        finY + Math.sin(angle - Math.PI / 2) * width * 0.7
      );
      ctx.closePath();
      ctx.fillStyle = isFast ? 'rgba(120, 220, 255, 0.9)' : 'rgba(255, 160, 110, 0.9)';
      ctx.fill();
    }

    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(
      tailX - Math.cos(angle) * length * (isFast ? 0.75 : 0.4),
      tailY - Math.sin(angle) * length * (isFast ? 0.75 : 0.4)
    );
    ctx.strokeStyle = isFast ? 'rgba(120, 220, 255, 0.9)' : 'rgba(255, 140, 60, 0.9)';
    ctx.lineWidth = isFast ? 2.5 : 2;
    ctx.stroke();

    if (isTank) {
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r * 0.85, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(120, 220, 140, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#eaffdf';
      ctx.font = `${Math.max(12, m.r * 0.9)}px "Orbitron", "Russo One", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(m.hp), m.x, m.y);
    } else {
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = isFast ? '#d6fbff' : '#ffd4a6';
      ctx.fill();
    }
  }
}

function triggerExplosion(x, y, color, size, duration = 0.35, sparkCount = null) {
  const sparks = [];
  const count = sparkCount ?? (6 + Math.floor(Math.random() * 6));
  for (let i = 0; i < count; i += 1) {
    sparks.push({
      angle: Math.random() * Math.PI * 2,
      length: size * (0.4 + Math.random() * 0.5)
    });
  }
  explosions.push({
    x,
    y,
    color,
    size,
    t: 0,
    duration,
    sparks
  });
}

function updateExplosions(dt) {
  for (let i = explosions.length - 1; i >= 0; i -= 1) {
    explosions[i].t += dt;
    if (explosions[i].t >= explosions[i].duration) {
      explosions.splice(i, 1);
    }
  }
}

function drawExplosions() {
  for (const ex of explosions) {
    const p = ex.t / ex.duration;
    const radius = ex.size * (0.3 + p);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = ex.color;
    ctx.lineWidth = 1 + (1 - p) * 3;
    ctx.globalAlpha = 1 - p;
    ctx.beginPath();
    ctx.arc(ex.x, ex.y, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.lineWidth = 1.5;
    for (const spark of ex.sparks) {
      const sx = ex.x + Math.cos(spark.angle) * radius * 0.5;
      const sy = ex.y + Math.sin(spark.angle) * radius * 0.5;
      const exx = ex.x + Math.cos(spark.angle) * spark.length * (0.5 + p);
      const eyy = ex.y + Math.sin(spark.angle) * spark.length * (0.5 + p);
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(exx, eyy);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}

function triggerNovaEffect() {
  screenFlash = 1;
  shockwave = 1;
}

function updateScreenEffects(dt) {
  if (screenFlash > 0) {
    screenFlash = Math.max(0, screenFlash - dt * 1.6);
  }
  if (shockwave > 0) {
    shockwave = Math.max(0, shockwave - dt * 1.1);
  }
}

function drawScreenEffects() {
  if (screenFlash > 0) {
    ctx.save();
    ctx.globalAlpha = screenFlash * 0.6;
    ctx.fillStyle = '#9cd3ff';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

  if (shockwave > 0) {
    const maxRadius = Math.hypot(width, height);
    const radius = maxRadius * (1 - shockwave);
    ctx.save();
    ctx.strokeStyle = `rgba(140, 220, 255, ${shockwave * 0.7})`;
    ctx.lineWidth = 6;
    ctx.beginPath();
    const { x, y } = center();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function render(timestamp) {
  const dt = Math.min(0.033, (timestamp - state.lastTime) / 1000 || 0);
  state.lastTime = timestamp;

  update(dt);

  drawBackground();
  drawCore();
  drawMissiles();
  drawExplosions();
  drawScreenEffects();

  requestAnimationFrame(render);
}

function startCountdown() {
  stopMusic();
  countdownEl.textContent = state.countdown;
  countdownEl.classList.remove('hidden');
  playSfx('tick');
  const timer = setInterval(() => {
    state.countdown -= 1;
    if (state.countdown <= 0) {
      clearInterval(timer);
      countdownEl.classList.add('hidden');
      state.running = true;
      setMusicMode('game');
      return;
    }
    countdownEl.textContent = state.countdown;
    playSfx('tick');
  }, 1000);
  countdownTimer = timer;
}

function updateHud() {
  hudLevel.textContent = `Nivel ${state.level}`;
  hudWave.textContent = `Oleada ${state.wave} de ${state.wavesTotal}`;
}

canvas.addEventListener('pointerdown', e => {
  if (!state.running) return;
  const x = e.clientX;
  const y = e.clientY;
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    const m = missiles[i];
    const dist = Math.hypot(m.x - x, m.y - y);
    if (dist <= m.r + 18) {
      if (m.type === 'tank') {
        m.hp -= 1;
        if (m.hp <= 0) {
          missiles.splice(i, 1);
          playSfx('boom');
          triggerExplosion(m.x, m.y, '#b8ff9b', 46, 0.26);
        } else {
          playSfx('tick');
          triggerExplosion(m.x, m.y, '#b8ff9b', 22, 0.16, 4);
        }
      } else {
        missiles.splice(i, 1);
        playSfx('boom');
        triggerExplosion(m.x, m.y, '#ff9b6b', 40, 0.22);
      }
      break;
    }
  }
});

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.dataset.skill;
    if (!state.running || !core.alive) return;
    if (!skill) return;
    if (skillState[skill] > 0) return;
    if (skill === 'nova') {
      missiles.length = 0;
      playSfx('nova');
      triggerNovaEffect();
      setCooldown(skill);
      return;
    }
    if (skill === 'regen') {
      const layer = shieldLayers[0];
      layer.hp = layer.max;
      playSfx('shield');
      setCooldown(skill);
    }
  });
});

startButton.addEventListener('click', () => {
  initAudio();
  stopMusic();
  resetGame();
  updateHud();
  startScreen.classList.add('hidden');
  startCountdown();
});

startScreen.addEventListener('pointerdown', () => {
  initAudio();
});

window.addEventListener('resize', resize);
resize();
updateHud();

skillButtons.forEach(button => {
  const label = button.querySelector('.label');
  if (label) {
    button.dataset.label = label.textContent;
  }
});

requestAnimationFrame(render);

function updateCooldowns(dt) {
  skillButtons.forEach(button => {
    const skill = button.dataset.skill;
    if (!skill) return;
    const remaining = Math.max(0, skillState[skill] - dt);
    skillState[skill] = remaining;
    const label = button.querySelector('.label');
    if (remaining > 0) {
      button.classList.add('cooldown');
      const ratio = remaining / skillCooldowns[skill];
      button.style.setProperty('--cooldown-scale', ratio.toString());
      button.dataset.remaining = `${Math.ceil(remaining)}s`;
      if (label) {
        label.textContent = `${button.dataset.label}`;
      }
    } else {
      button.classList.remove('cooldown');
      button.style.setProperty('--cooldown-scale', '0');
      button.dataset.remaining = '';
      if (label) {
        label.textContent = `${button.dataset.label}`;
      }
    }
  });
}

function setCooldown(skill) {
  skillState[skill] = skillCooldowns[skill];
  updateCooldowns(0);
}
