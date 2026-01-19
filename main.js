const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const hudLevel = document.getElementById('level');
const hudWave = document.getElementById('wave');
const countdownEl = document.getElementById('countdown');
const waveMessageEl = document.getElementById('wave-message');
const gameoverEl = document.getElementById('gameover');
const gameoverMenu = document.getElementById('gameover-menu');
const victoryEl = document.getElementById('victory');
const victoryClose = document.getElementById('victory-close');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const resetProgressButton = document.getElementById('reset-progress');
const debugSkip = document.getElementById('debug-skip');
const adminToast = document.getElementById('admin-toast');
const moneyToast = document.getElementById('money-toast');
const menuCredits = document.getElementById('menu-credits');
const confirmReset = document.getElementById('confirm-reset');
const confirmResetYes = document.getElementById('confirm-reset-yes');
const confirmResetNo = document.getElementById('confirm-reset-no');
const actionsBar = document.getElementById('actions');
const skillButtons = document.querySelectorAll('[data-skill]');
const upgradeButtons = document.querySelectorAll('[data-upgrade]');
const levelButtons = document.querySelectorAll('.level-button');
const moneyEl = document.getElementById('money');

let width = window.innerWidth;
let height = window.innerHeight;
let dpr = window.devicePixelRatio || 1;

const state = {
  running: false,
  level: 1,
  wave: 1,
  wavesTotal: 3,
  countdown: 3,
  spawnTimer: 0,
  spawnInterval: 1.1,
  waveSpawned: 0,
  waveTarget: 0,
  money: 0,
  unlockedLevel: 1,
  selectedLevel: 1,
  betweenLevels: false,
  finalLevel: false,
  musicGain: 0.24,
  musicTempo: 140,
  lastTime: 0
};

const levels = [
  { level: 1, spawnInterval: 1.35, music: { gain: 0.2, tempo: 220 } },
  { level: 2, spawnInterval: 1.05, music: { gain: 0.26, tempo: 170 } },
  { level: 3, spawnInterval: 0.75, music: { gain: 0.32, tempo: 130 } },
  { level: 4, spawnInterval: 1.2, music: { gain: 0.36, tempo: 110 } }
];

const baseCoreRadius = 28;
const baseShieldRadius = 68;
const layerGap = 24;
const maxLayers = 3;
const shieldLayers = [];

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
const confetti = [];
const cashFloaters = [];
const boss = {
  active: false,
  x: 0,
  y: -400,
  width: 260,
  height: 200,
  targetY: 0,
  speed: 90,
  mainHp: 20,
  parts: []
};
let stars = [];
let screenFlash = 0;
let shockwave = 0;

let audioCtx = null;
let masterGain = null;
let melodyTimer = null;
let gamePulse = null;
let countdownTimer = null;
let waveTimeout = null;
let waveMessageTimer = null;
let victoryTimer = null;
let gameGain = null;
let melodyIntervalMs = 140;
let leadOsc = null;
let debugHoldTimer = null;
let debugHoldTriggered = false;
let adminToastTimer = null;
let moneyToastTimer = null;

const skillCooldownLevels = [30, 20, 10];
const skillState = {
  nova: 0,
  regen: 0
};

const upgradeCosts = {
  shield: [0, 18, 36, 60],
  nova: [0, 30, 60, 90],
  regen: [0, 24, 48, 72]
};

let shieldUpgrades = 0;
let novaLevel = 0;
let regenLevel = 0;

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
  const actionsRect = actionsBar.getBoundingClientRect();
  layout.safeBottom = actionsRect.height + 16;
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
  if (boss.active) {
    const baseSize = Math.min(width, height) * 0.42;
    boss.width = baseSize;
    boss.height = baseSize * 0.72;
    boss.x = layout.x - boss.width / 2;
    boss.targetY = 20 * layout.scale;
  }
}

function center() {
  return { x: layout.x, y: layout.y };
}

function rebuildShields() {
  const count = Math.min(maxLayers, shieldUpgrades);
  shieldLayers.length = 0;
  for (let i = 0; i < count; i += 1) {
    shieldLayers.push({
      radius: baseShieldRadius + layerGap * i,
      max: 60,
      hp: 60
    });
  }
  updateLayout();
  updateSkillLocks();
}

function initBoss() {
  const { x, y } = center();
  const scale = layout.scale;
  const baseSize = Math.min(width, height) * 0.42;
  boss.active = true;
  boss.width = baseSize;
  boss.height = baseSize * 0.72;
  boss.x = x - boss.width / 2;
  boss.y = -boss.height - 40;
  boss.targetY = 20 * scale;
  boss.mainHp = 20;
  boss.parts = [
    { id: 'main', x: 0.2, y: 0.25, w: 0.6, h: 0.5, hp: 20, type: 'main', flash: 0 },
    { id: 'front-left', x: 0.05, y: 0.15, w: 0.18, h: 0.18, hp: 4, type: 'standard', flash: 0, cooldown: 0, rate: 2.4 },
    { id: 'front-right', x: 0.77, y: 0.15, w: 0.18, h: 0.18, hp: 4, type: 'standard', flash: 0, cooldown: 0, rate: 2.4 },
    { id: 'rear-left', x: 0.12, y: 0.7, w: 0.2, h: 0.18, hp: 6, type: 'fast', flash: 0, cooldown: 0, rate: 3.2 },
    { id: 'rear-right', x: 0.68, y: 0.7, w: 0.2, h: 0.18, hp: 8, type: 'tank', flash: 0, cooldown: 0, rate: 4.2 }
  ];
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
  lfo.frequency.value = 0.22;
  lfoGain.gain.value = 0.12;
  lfo.connect(lfoGain);
  lfoGain.connect(padGain.gain);

  const pulseGain = audioCtx.createGain();
  pulseGain.gain.value = 0.16;
  pulseGain.connect(gameGain);
  const pulse = audioCtx.createOscillator();
  pulse.type = 'square';
  pulse.frequency.value = 220;
  pulse.connect(pulseGain);
  gamePulse = pulse;

  const leadGain = audioCtx.createGain();
  leadGain.gain.value = 0.08;
  leadGain.connect(gameGain);
  const lead = audioCtx.createOscillator();
  lead.type = 'sawtooth';
  lead.frequency.value = 440;
  lead.connect(leadGain);
  leadOsc = lead;

  osc1.start();
  osc2.start();
  lfo.start();
  pulse.start();
  lead.start();

  const melody = [220, 262, 330, 392, 440, 494, 440, 392, 330, 262, 330, 392];
  const leadLine = [440, 523, 659, 784, 659, 523, 440, 392];
  let step = 0;
  melodyTimer = setInterval(() => {
    const freq = melody[step % melody.length];
    pulse.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.02);
    const leadFreq = leadLine[step % leadLine.length];
    lead.frequency.setTargetAtTime(leadFreq, audioCtx.currentTime, 0.02);
    step += 1;
  }, melodyIntervalMs);

}

function setMusicMode(mode) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  if (mode === 'game') {
    gameGain.gain.exponentialRampToValueAtTime(state.musicGain, now + 0.4);
  } else {
    gameGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
  }
}

function restartMelodyTimer() {
  if (!audioCtx || !gamePulse || !leadOsc) return;
  if (melodyTimer) {
    clearInterval(melodyTimer);
  }
  const melody = [220, 262, 330, 392, 440, 494, 440, 392, 330, 262, 330, 392];
  const leadLine = [440, 523, 659, 784, 659, 523, 440, 392];
  let step = 0;
  melodyTimer = setInterval(() => {
    const freq = melody[step % melody.length];
    gamePulse.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.02);
    const leadFreq = leadLine[step % leadLine.length];
    leadOsc.frequency.setTargetAtTime(leadFreq, audioCtx.currentTime, 0.02);
    step += 1;
  }, melodyIntervalMs);
}

function setMusicIntensity(level) {
  const config = levels.find(item => item.level === level);
  if (!config || !config.music) return;
  state.musicGain = config.music.gain;
  melodyIntervalMs = config.music.tempo;
  restartMelodyTimer();
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
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(150, now);
    osc2.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.5);
    osc2.frequency.exponentialRampToValueAtTime(30, now + 0.5);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.85, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(masterGain);

    const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.5, audioCtx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.5);
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.4, now + 0.03);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    noise.start(now);
    osc1.stop(now + 0.55);
    osc2.stop(now + 0.55);
    noise.stop(now + 0.55);
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

  if (type === 'hitsoft') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.2);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.45, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.3);
    return;
  }

  if (type === 'success') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.35, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.frequency.setValueAtTime(330, now);
    osc.frequency.setTargetAtTime(520, now + 0.12, 0.04);
    osc.frequency.setTargetAtTime(660, now + 0.22, 0.04);
    osc.start(now);
    osc.stop(now + 0.45);
    return;
  }

  if (type === 'victory') {
    const notes = [330, 392, 440, 523, 659];
    notes.forEach((freq, index) => {
      const start = now + index * 0.12;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.4, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.25);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(start);
      osc.stop(start + 0.28);
    });
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
  state.waveSpawned = 0;
  state.waveTarget = 0;
  state.lastTime = 0;
  state.wave = 1;
  state.betweenLevels = false;
  state.finalLevel = false;
  core.alive = true;
  if (victoryTimer) {
    clearTimeout(victoryTimer);
    victoryTimer = null;
  }
  victoryEl.classList.add('hidden');
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  if (waveTimeout) {
    clearTimeout(waveTimeout);
    waveTimeout = null;
  }
  if (waveMessageTimer) {
    clearTimeout(waveMessageTimer);
    waveMessageTimer = null;
  }
  shieldLayers.forEach(layer => {
    layer.hp = layer.max;
  });
  missiles.length = 0;
  confetti.length = 0;
  cashFloaters.length = 0;
  boss.active = false;
  boss.parts = [];
  adminToast.classList.add('hidden');
  moneyToast.classList.add('hidden');
  gameoverEl.classList.add('hidden');
  gameoverMenu.classList.add('hidden');
  waveMessageEl.classList.add('hidden');
}

function showWaveMessage(text, duration = 1.4) {
  waveMessageEl.textContent = text;
  waveMessageEl.classList.remove('hidden');
  if (waveMessageTimer) {
    clearTimeout(waveMessageTimer);
  }
  waveMessageTimer = setTimeout(() => {
    waveMessageEl.classList.add('hidden');
  }, duration * 1000);
}

function getWaveTarget(level, wave) {
  const base = 7 + (level - 1) * 4;
  return base + (wave - 1) * 2;
}

function getWaveLabel() {
  return `Wave ${state.wave}`;
}

function applyLevelConfig(level) {
  const config = levels.find(item => item.level === level) || levels[0];
  state.level = config.level;
  state.finalLevel = state.level === 4;
  state.wavesTotal = state.finalLevel ? 1 : 3;
  state.wave = 1;
  state.spawnInterval = config.spawnInterval;
  setMusicIntensity(state.level);
  updateHud();
}

function startWave(showMessage = true) {
  state.waveSpawned = 0;
  state.waveTarget = getWaveTarget(state.level, state.wave);
  state.running = true;
  state.betweenLevels = false;
  updateHud();
  updateUpgradeVisibility();
  if (showMessage) {
    showWaveMessage(getWaveLabel(), 1.1);
  }
}

function startFinalLevel() {
  state.running = true;
  state.betweenLevels = false;
  initBoss();
  updateHud();
  updateUpgradeVisibility();
  showWaveMessage('Final Level', 1.6);
}

function completeLevel() {
  state.running = false;
  if (state.level >= levels.length) {
    stopMusic();
    playSfx('victory');
    triggerConfetti();
    victoryEl.classList.remove('hidden');
    return;
  }

  showWaveMessage('Level complete', 2.2);
  playSfx('success');
  if (state.level >= state.unlockedLevel && state.level < levels.length) {
    state.unlockedLevel = state.level + 1;
    localStorage.setItem('unlockedLevel', String(state.unlockedLevel));
    updateLevelButtons();
  }
  stopMusic();
  setTimeout(() => {
    state.betweenLevels = true;
    startScreen.classList.remove('hidden');
    updateUpgradeVisibility();
  }, 2200);
}

function endWave() {
  state.running = false;
  if (state.wave < state.wavesTotal) {
    state.wave += 1;
    updateHud();
    showWaveMessage(getWaveLabel(), 1.1);
    waveTimeout = setTimeout(() => {
      startWave(false);
    }, 1200);
  } else {
    completeLevel();
  }
}

function buildMissile(x, y, forcedType = null) {
  const target = center();
  const angle = Math.atan2(target.y - y, target.x - x);
  const distance = Math.hypot(target.x - x, target.y - y);
  let type = forcedType || 'normal';
  if (!forcedType) {
    const roll = Math.random();
    if (state.level === 1) {
      type = 'normal';
    } else if (roll > 0.88) {
      type = 'tank';
    } else if (roll > 0.7) {
      type = 'fast';
    }
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
    } else if (hpRoll < 0.98) {
      hp = 5;
    } else if (hpRoll < 0.99) {
      hp = 6;
    } else if (hpRoll < 0.995) {
      hp = 7;
    } else if (hpRoll < 0.998) {
      hp = 8;
    } else {
      hp = 9;
    }
  }
  const speed = distance / travelTime;
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: radius,
    type,
    hp
  };
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
  missiles.push(buildMissile(x, y));
}

function spawnMissileFrom(x, y, type) {
  missiles.push(buildMissile(x, y, type));
}

function update(dt) {
  updateCooldowns(dt);
  updateExplosions(dt);
  updateScreenEffects(dt);
  if (!state.running || !core.alive) return;

  if (state.finalLevel) {
    updateBoss(dt);
  } else {
    state.spawnTimer += dt;
    if (state.spawnTimer >= state.spawnInterval && state.waveSpawned < state.waveTarget) {
      state.spawnTimer = 0;
      spawnMissile();
      state.waveSpawned += 1;
    }
  }

  const target = center();
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    const m = missiles[i];
    m.x += m.vx * dt;
    m.y += m.vy * dt;

    const dx = m.x - target.x;
    const dy = m.y - target.y;
    const dist = Math.hypot(dx, dy);

    let activeLayer = null;
    for (let j = shieldLayers.length - 1; j >= 0; j -= 1) {
      if (shieldLayers[j].hp > 0) {
        activeLayer = shieldLayers[j];
        break;
      }
    }
    const shieldRadius = activeLayer ? activeLayer.radius : 0;

    if (shieldRadius > 0 && dist <= shieldRadius) {
      activeLayer.hp = Math.max(0, activeLayer.hp - 35);
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
      gameoverMenu.classList.remove('hidden');
      stopMusic();
      if (waveTimeout) {
        clearTimeout(waveTimeout);
        waveTimeout = null;
      }
    }
  }

  if (!state.finalLevel && state.waveSpawned >= state.waveTarget && missiles.length === 0) {
    endWave();
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
    const layerColors = ['#52b8ff', '#58e28f', '#ff6b6b'];
    const color = layerColors[Math.min(layerColors.length - 1, shieldLayers.indexOf(layer))];
    ctx.beginPath();
    ctx.arc(x, y, layer.radius, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = (3 + ratio * 3) * layout.scale;
    ctx.shadowColor = color;
    ctx.shadowBlur = 12 * layout.scale;
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

function updateBoss(dt) {
  if (!boss.active) return;
  if (boss.y < boss.targetY) {
    boss.y = Math.min(boss.targetY, boss.y + boss.speed * dt);
  }
  boss.parts.forEach(part => {
    if (part.hp <= 0 || part.type === 'main') return;
    part.cooldown += dt;
    if (part.cooldown >= part.rate) {
      part.cooldown = 0;
      const partX = boss.x + part.x * boss.width + part.w * boss.width * 0.5;
      const partY = boss.y + part.y * boss.height + part.h * boss.height * 0.5;
      spawnMissileFrom(partX, partY, part.type);
    }
  });

  boss.parts.forEach(part => {
    if (part.flash > 0) {
      part.flash = Math.max(0, part.flash - dt * 2.5);
    }
  });

  const main = boss.parts.find(part => part.id === 'main');
  if (main && main.hp <= 0) {
    boss.active = false;
    completeLevel();
  }
}

function drawBoss() {
  if (!boss.active) return;
  ctx.save();
  const x = boss.x;
  const y = boss.y;
  const w = boss.width;
  const h = boss.height;
  const bevel = Math.min(w, h) * 0.08;
  const hullGradient = ctx.createLinearGradient(x, y, x, y + h);
  hullGradient.addColorStop(0, 'rgba(10, 20, 35, 0.95)');
  hullGradient.addColorStop(1, 'rgba(25, 45, 70, 0.95)');
  ctx.fillStyle = hullGradient;
  ctx.strokeStyle = 'rgba(90, 140, 190, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + bevel, y);
  ctx.lineTo(x + w - bevel, y);
  ctx.lineTo(x + w, y + bevel);
  ctx.lineTo(x + w, y + h - bevel);
  ctx.lineTo(x + w - bevel, y + h);
  ctx.lineTo(x + bevel, y + h);
  ctx.lineTo(x, y + h - bevel);
  ctx.lineTo(x, y + bevel);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = 'rgba(15, 30, 50, 0.9)';
  ctx.beginPath();
  ctx.moveTo(x + w * 0.1, y + h * 0.3);
  ctx.lineTo(x + w * 0.3, y + h * 0.15);
  ctx.lineTo(x + w * 0.7, y + h * 0.15);
  ctx.lineTo(x + w * 0.9, y + h * 0.3);
  ctx.lineTo(x + w * 0.75, y + h * 0.4);
  ctx.lineTo(x + w * 0.25, y + h * 0.4);
  ctx.closePath();
  ctx.fill();

  const panelW = w * 0.5;
  const panelH = h * 0.08;
  const panelX = x + w * 0.25;
  const panelY = y + h * 0.16;
  const panelGradient = ctx.createLinearGradient(panelX, panelY, panelX + panelW, panelY);
  panelGradient.addColorStop(0, 'rgba(20, 40, 60, 0.8)');
  panelGradient.addColorStop(1, 'rgba(40, 80, 120, 0.9)');
  ctx.fillStyle = panelGradient;
  ctx.beginPath();
  ctx.roundRect(panelX, panelY, panelW, panelH, 4);
  ctx.fill();

  ctx.strokeStyle = 'rgba(80, 140, 200, 0.4)';
  ctx.beginPath();
  ctx.moveTo(x + w * 0.2, y + h * 0.55);
  ctx.lineTo(x + w * 0.8, y + h * 0.55);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + w * 0.2, y + h * 0.65);
  ctx.lineTo(x + w * 0.8, y + h * 0.65);
  ctx.stroke();

  boss.parts.forEach(part => {
    if (part.hp <= 0) return;
    const x = boss.x + part.x * boss.width;
    const y = boss.y + part.y * boss.height;
    const w = part.w * boss.width;
    const h = part.h * boss.height;
    const baseColor = part.type === 'main' ? '#8fb6ff' : part.type === 'tank' ? '#7fdc7a' : part.type === 'fast' ? '#6ce3ff' : '#ffb347';
    ctx.fillStyle = baseColor;
    ctx.globalAlpha = part.flash > 0 ? 0.6 + part.flash * 0.4 : 0.85;
    ctx.fillRect(x, y, w, h);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.strokeRect(x, y, w, h);
  });
  ctx.restore();
}

function hitBossAt(x, y) {
  if (!boss.active) return false;
  for (let i = boss.parts.length - 1; i >= 0; i -= 1) {
    const part = boss.parts[i];
    if (part.hp <= 0) continue;
    const px = boss.x + part.x * boss.width;
    const py = boss.y + part.y * boss.height;
    const pw = part.w * boss.width;
    const ph = part.h * boss.height;
    if (x >= px && x <= px + pw && y >= py && y <= py + ph) {
      part.hp -= 1;
      part.flash = 0.6;
      playSfx('hitsoft');
      triggerExplosion(x, y, '#9cd3ff', 32, 0.2, 6);
      if (part.hp <= 0) {
        const bounty = part.type === 'main' ? 50 : 10;
        awardMoney(bounty);
        spawnCashFloater(x, y, bounty);
      }
      return true;
    }
  }
  return false;
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

function triggerConfetti() {
  confetti.length = 0;
  const count = 120;
  for (let i = 0; i < count; i += 1) {
    confetti.push({
      x: Math.random() * width,
      y: -20 - Math.random() * height * 0.3,
      vx: (Math.random() - 0.5) * 40,
      vy: 80 + Math.random() * 120,
      size: 6 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 4,
      color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`
    });
  }
}

function spawnCashFloater(x, y, amount) {
  cashFloaters.push({
    x,
    y,
    vy: -30 - Math.random() * 20,
    life: 0.9,
    t: 0,
    text: `+${amount}`
  });
}

function updateScreenEffects(dt) {
  if (screenFlash > 0) {
    screenFlash = Math.max(0, screenFlash - dt * 1.6);
  }
  if (shockwave > 0) {
    shockwave = Math.max(0, shockwave - dt * 1.1);
  }

  for (let i = confetti.length - 1; i >= 0; i -= 1) {
    const c = confetti[i];
    c.x += c.vx * dt;
    c.y += c.vy * dt;
    c.rot += c.vr * dt;
    if (c.y > height + 30) {
      confetti.splice(i, 1);
    }
  }

  for (let i = cashFloaters.length - 1; i >= 0; i -= 1) {
    const c = cashFloaters[i];
    c.t += dt;
    c.y += c.vy * dt;
    if (c.t >= c.life) {
      cashFloaters.splice(i, 1);
    }
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

  for (const c of confetti) {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rot);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.size * 0.5, -c.size * 0.3, c.size, c.size * 0.6);
    ctx.restore();
  }

  for (const f of cashFloaters) {
    const alpha = Math.max(0, 1 - f.t / f.life);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#ffd26a';
    ctx.font = '14px "Orbitron", "Russo One", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(f.text, f.x, f.y);
    ctx.restore();
  }
}

function render(timestamp) {
  const dt = Math.min(0.033, (timestamp - state.lastTime) / 1000 || 0);
  state.lastTime = timestamp;

  update(dt);

  drawBackground();
  drawCore();
  drawBoss();
  drawMissiles();
  drawExplosions();
  drawScreenEffects();

  requestAnimationFrame(render);
}

function startCountdown() {
  stopMusic();
  countdownEl.textContent = state.countdown;
  countdownEl.classList.remove('hidden');
  showWaveMessage(state.finalLevel ? 'Final Level' : getWaveLabel(), 2.2);
  playSfx('tick');
  const timer = setInterval(() => {
    state.countdown -= 1;
    if (state.countdown <= 0) {
      clearInterval(timer);
      countdownEl.classList.add('hidden');
      setMusicMode('game');
      if (state.finalLevel) {
        startFinalLevel();
      } else {
        startWave(false);
      }
      return;
    }
    countdownEl.textContent = state.countdown;
    playSfx('tick');
  }, 1000);
  countdownTimer = timer;
}

function updateHud() {
  hudLevel.textContent = `Level ${state.level}`;
  hudWave.textContent = `Wave ${state.wave} of ${state.wavesTotal}`;
  moneyEl.lastChild.textContent = `Credits: ${state.money}`;
  if (menuCredits) {
    const label = menuCredits.querySelector('.label');
    if (label) {
      label.textContent = `Credits: ${state.money}`;
    }
  }
}

function showAdminToast() {
  adminToast.classList.remove('hidden');
  if (adminToastTimer) {
    clearTimeout(adminToastTimer);
  }
  adminToastTimer = setTimeout(() => {
    adminToast.classList.add('hidden');
  }, 1200);
}

function showMoneyToast() {
  moneyToast.classList.remove('hidden');
  if (moneyToastTimer) {
    clearTimeout(moneyToastTimer);
  }
  moneyToastTimer = setTimeout(() => {
    moneyToast.classList.add('hidden');
  }, 1200);
}

function getBounty(type) {
  if (type === 'fast') return 3;
  if (type === 'tank') return 5;
  return 1;
}

function awardMoney(amount) {
  state.money += amount;
  sessionStorage.setItem('money', String(state.money));
  updateHud();
  updateUpgrades();
  updateUpgradeVisibility();
}

function getSkillCooldown(skill) {
  const level = skill === 'nova' ? novaLevel : regenLevel;
  if (level <= 0) return 0;
  const index = Math.min(skillCooldownLevels.length - 1, level - 1);
  return skillCooldownLevels[index];
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
          const bounty = getBounty(m.type);
          awardMoney(bounty);
          spawnCashFloater(m.x, m.y, bounty);
        } else {
          playSfx('hitsoft');
          triggerExplosion(m.x, m.y, '#b8ff9b', 22, 0.16, 4);
        }
      } else {
        missiles.splice(i, 1);
        playSfx('boom');
        triggerExplosion(m.x, m.y, '#ff9b6b', 40, 0.22);
        const bounty = getBounty(m.type);
        awardMoney(bounty);
        spawnCashFloater(m.x, m.y, bounty);
      }
      break;
    }
  }
  if (state.finalLevel) {
    hitBossAt(x, y);
  }
});

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.dataset.skill;
    if (!state.running || !core.alive) return;
    if (!skill) return;
    if (skill === 'nova' && novaLevel === 0) return;
    if (skill === 'regen' && regenLevel === 0) return;
    if (skillState[skill] > 0) return;
    if (skill === 'nova') {
      if (missiles.length > 0) {
        let reward = 0;
        missiles.forEach(missile => {
          reward += getBounty(missile.type);
          spawnCashFloater(missile.x, missile.y, getBounty(missile.type));
        });
        awardMoney(reward);
      }
      missiles.length = 0;
      playSfx('nova');
      triggerNovaEffect();
      setCooldown(skill);
      return;
    }
    if (skill === 'regen') {
      shieldLayers.forEach(layer => {
        layer.hp = layer.max;
      });
      playSfx('shield');
      setCooldown(skill);
    }
  });
});

startButton.addEventListener('click', () => {
  initAudio();
  stopMusic();
  resetGame();
  applyLevelConfig(state.selectedLevel);
  rebuildShields();
  updateHud();
  startScreen.classList.add('hidden');
  state.betweenLevels = false;
  updateUpgradeVisibility();
  startCountdown();
});

startScreen.addEventListener('pointerdown', () => {
  initAudio();
});

victoryClose.addEventListener('click', () => {
  victoryEl.classList.add('hidden');
  startScreen.classList.remove('hidden');
  state.betweenLevels = false;
  updateUpgradeVisibility();
});

resetProgressButton.addEventListener('click', () => {
  if (startScreen.classList.contains('hidden')) return;
  confirmReset.classList.remove('hidden');
});

confirmResetYes.addEventListener('click', () => {
  confirmReset.classList.add('hidden');
  resetProgress();
});

confirmResetNo.addEventListener('click', () => {
  confirmReset.classList.add('hidden');
});

gameoverMenu.addEventListener('click', () => {
  stopMusic();
  startScreen.classList.remove('hidden');
  state.betweenLevels = false;
  gameoverMenu.classList.add('hidden');
  gameoverEl.classList.add('hidden');
  updateUpgradeVisibility();
});

function clearDebugHold() {
  if (debugHoldTimer) {
    clearTimeout(debugHoldTimer);
    debugHoldTimer = null;
  }
}

debugSkip.addEventListener('pointerdown', () => {
  if (!state.running) return;
  debugHoldTriggered = false;
  clearDebugHold();
  debugHoldTimer = setTimeout(() => {
    debugHoldTriggered = true;
    completeLevel();
  }, 1000);
});

debugSkip.addEventListener('pointerup', () => {
  if (!state.running) return;
  clearDebugHold();
  if (!debugHoldTriggered) {
    showAdminToast();
  }
});

debugSkip.addEventListener('pointerleave', () => {
  if (!state.running) return;
  clearDebugHold();
});

debugSkip.addEventListener('pointercancel', () => {
  if (!state.running) return;
  clearDebugHold();
});

levelButtons.forEach(button => {
  button.addEventListener('click', () => {
    const level = Number(button.dataset.level);
    if (Number.isNaN(level)) return;
    if (level > state.unlockedLevel) return;
    state.selectedLevel = level;
    updateLevelButtons();
  });
});

upgradeButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    const upgrade = button.dataset.upgrade;
    if (!upgrade) return;
    if (upgrade === 'shield') {
      if (shieldUpgrades >= maxLayers) return;
      const nextLevel = shieldUpgrades + 1;
      const cost = upgradeCosts.shield[nextLevel];
      if (cost === undefined) return;
      if (state.money < cost) {
        showMoneyToast();
        return;
      }
      shieldUpgrades = nextLevel;
      sessionStorage.setItem('shieldUpgrades', String(shieldUpgrades));
      awardMoney(-cost);
      rebuildShields();
      updateUpgrades();
      updateSkillLocks();
      return;
    }
    if (upgrade === 'nova') {
      if (novaLevel >= 3) return;
      const nextLevel = novaLevel + 1;
      const cost = upgradeCosts.nova[nextLevel];
      if (state.money < cost) {
        showMoneyToast();
        return;
      }
      novaLevel = nextLevel;
      sessionStorage.setItem('novaLevel', String(novaLevel));
      awardMoney(-cost);
      updateUpgrades();
      updateSkillLocks();
      return;
    }
    if (upgrade === 'regen') {
      if (regenLevel >= 3) return;
      const nextLevel = regenLevel + 1;
      const cost = upgradeCosts.regen[nextLevel];
      if (state.money < cost) {
        showMoneyToast();
        return;
      }
      regenLevel = nextLevel;
      sessionStorage.setItem('regenLevel', String(regenLevel));
      awardMoney(-cost);
      updateUpgrades();
      updateSkillLocks();
    }
  });
});

window.addEventListener('resize', resize);
resize();
document.querySelectorAll('.skill').forEach(button => {
  const label = button.querySelector('.label');
  if (label) {
    button.dataset.label = label.textContent;
  }
});

loadProgress();
updateHud();
updateUpgradeVisibility();

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
      const total = getSkillCooldown(skill);
      const ratio = total > 0 ? remaining / total : 0;
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
  skillState[skill] = getSkillCooldown(skill);
  updateCooldowns(0);
}

function updateLevelButtons() {
  levelButtons.forEach(button => {
    const level = Number(button.dataset.level);
    button.disabled = level > state.unlockedLevel;
    button.classList.toggle('active', level === state.selectedLevel);
  });
}

function updateUpgrades() {
  upgradeButtons.forEach(button => {
    const upgrade = button.dataset.upgrade;
    const status = button.querySelector('.status');
    const label = button.querySelector('.label');
    let cost = null;
    let owned = false;
    let unaffordable = false;

    if (upgrade === 'shield') {
      if (shieldUpgrades >= maxLayers) {
        owned = true;
        if (label) {
          label.textContent = 'Shield level 3';
        }
        if (status) {
          status.textContent = 'Max';
        }
      } else {
        const nextLevel = shieldUpgrades + 1;
        cost = upgradeCosts.shield[nextLevel];
        if (label) {
          label.textContent = `Shield level ${nextLevel}`;
        }
        if (status) {
          status.textContent = '';
        }
      }
    } else if (upgrade === 'nova') {
      owned = novaLevel >= 3;
      const nextLevel = Math.min(3, novaLevel + 1);
      cost = upgradeCosts.nova[nextLevel];
      if (label) {
        label.textContent = novaLevel === 0 ? 'Unlock Nova' : `Nova Level ${nextLevel}`;
      }
      if (status) {
        const cooldown = skillCooldownLevels[nextLevel - 1];
        status.textContent = novaLevel >= 3 ? 'Max' : `Cooldown ${cooldown}s`;
      }
    } else if (upgrade === 'regen') {
      owned = regenLevel >= 3;
      const nextLevel = Math.min(3, regenLevel + 1);
      cost = upgradeCosts.regen[nextLevel];
      if (label) {
        label.textContent = regenLevel === 0 ? 'Unlock Regen' : `Regen Level ${nextLevel}`;
      }
      if (status) {
        const cooldown = skillCooldownLevels[nextLevel - 1];
        status.textContent = regenLevel >= 3 ? 'Max' : `Cooldown ${cooldown}s`;
      }
    }

    if (owned) {
      button.disabled = true;
      button.classList.add('locked');
      const costEl = button.querySelector('.cost');
      if (costEl) {
        costEl.remove();
      }
      return;
    }

    button.disabled = false;
    const lockedByMoney = cost !== null && state.money < cost;
    unaffordable = lockedByMoney;
    button.classList.toggle('locked', lockedByMoney);
    button.classList.toggle('unaffordable', unaffordable);
    button.setAttribute('aria-disabled', lockedByMoney ? 'true' : 'false');
    let costEl = button.querySelector('.cost');
    if (cost !== null) {
      if (!costEl) {
        costEl = document.createElement('span');
        costEl.className = 'cost';
        costEl.innerHTML = '<span class="icon icon-coin" aria-hidden="true"></span><span class="amount"></span>';
        button.appendChild(costEl);
      }
      const amount = costEl.querySelector('.amount');
      if (amount) {
        amount.textContent = `${cost}`;
      }
    } else if (costEl) {
      costEl.remove();
    }
  });
}

function updateSkillLocks() {
  skillButtons.forEach(button => {
    const skill = button.dataset.skill;
    let unlocked = false;
    if (skill === 'nova') {
      unlocked = novaLevel > 0;
    } else if (skill === 'regen') {
      unlocked = regenLevel > 0;
    }
    button.disabled = !unlocked;
    button.classList.toggle('unlocked', unlocked);
    button.classList.toggle('locked', !unlocked);
    const status = button.querySelector('.status');
    if (status) {
      status.textContent = unlocked ? '' : 'Locked';
    }
  });
}

function updateUpgradeVisibility() {
  const upgradesRow = document.getElementById('menu-upgrades');
  if (!upgradesRow) return;
  const showUpgrades = !startScreen.classList.contains('hidden') && state.money > 0;
  upgradesRow.classList.toggle('hidden', !showUpgrades);
}

function loadProgress() {
  const unlocked = Number(localStorage.getItem('unlockedLevel')) || 1;
  state.unlockedLevel = Math.min(Math.max(1, unlocked), levels.length);
  state.selectedLevel = Math.min(state.selectedLevel, state.unlockedLevel);
  const money = Number(sessionStorage.getItem('money')) || 0;
  state.money = Math.max(0, money);
  const storedUpgrades = Number(sessionStorage.getItem('shieldUpgrades')) || 0;
  shieldUpgrades = Math.min(Math.max(0, storedUpgrades), maxLayers);
  novaLevel = Math.min(Math.max(0, Number(sessionStorage.getItem('novaLevel')) || 0), 3);
  regenLevel = Math.min(Math.max(0, Number(sessionStorage.getItem('regenLevel')) || 0), 3);
  rebuildShields();
  updateLevelButtons();
  updateUpgrades();
  updateSkillLocks();
}

function resetProgress() {
  localStorage.removeItem('unlockedLevel');
  sessionStorage.removeItem('money');
  sessionStorage.removeItem('shieldUpgrades');
  sessionStorage.removeItem('novaLevel');
  sessionStorage.removeItem('regenLevel');
  state.unlockedLevel = 1;
  state.selectedLevel = 1;
  state.money = 0;
  shieldUpgrades = 0;
  novaLevel = 0;
  regenLevel = 0;
  state.betweenLevels = false;
  rebuildShields();
  updateLevelButtons();
  updateUpgrades();
  updateSkillLocks();
  updateHud();
  updateUpgradeVisibility();
}
