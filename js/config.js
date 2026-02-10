// Debug buttons visibility - set to true to show admin debug buttons
var SHOW_DEBUG_BUTTONS = true;

var levels = [
  { level: 1, spawnInterval: 1.4, music: { gain: 0.18, tempo: 240 } },
  { level: 2, spawnInterval: 1.0, music: { gain: 0.22, tempo: 200 } },
  { level: 3, spawnInterval: 0.95, music: { gain: 0.26, tempo: 170 } },
  { level: 4, spawnInterval: 0.9, music: { gain: 0.28, tempo: 155 } },
  { level: 5, spawnInterval: 0.85, music: { gain: 0.3, tempo: 140 } },
  { level: 6, spawnInterval: 0.7, music: { gain: 0.32, tempo: 125 } },
  { level: 7, spawnInterval: 0.58, music: { gain: 0.34, tempo: 110 } },
  { level: 8, spawnInterval: 0.5, music: { gain: 0.36, tempo: 98 } },
  { level: 9, spawnInterval: 0.42, music: { gain: 0.4, tempo: 85 } },
  { level: 10, spawnInterval: 0.4, music: { gain: 0.4, tempo: 90 } },
  { level: 11, spawnInterval: 1.2, music: { gain: 0.3, tempo: 140 } },
  { level: 12, spawnInterval: 0.42, music: { gain: 0.4, tempo: 85 } } // Boss Mode (reuse level 9 music)
];

var baseCoreRadius = 28;
var baseShieldRadius = 68;
var layerGap = 24;
var maxLayers = 3;
var survivalRecordsKey = 'survivalRecords';
var maxNormalLevels = 9;

var skillCooldownLevels = [30, 20, 10];
var upgradeCosts = {
  shield: [0, 18, 36, 60],
  nova: [0, 30, 60, 90],
  regen: [0, 24, 48, 72],
  slow: [0, 20, 40, 70],
  aegis: [0, 28, 56, 84],
  godsFinger: [0, 1000]
};

var themeMusic = {
  default: { gain: 1, tempo: 1, pulse: 'square', lead: 'sawtooth' },
  retro: { gain: 0.85, tempo: 1.15, pulse: 'square', lead: 'square' },
  neon: { gain: 1.2, tempo: 0.8, pulse: 'sawtooth', lead: 'triangle' },
  forge: { gain: 1.05, tempo: 0.92, pulse: 'triangle', lead: 'sawtooth' }
};
var themeMusicTracks = {
  default: null,
  retro: 'music/retroMusic.mp3',
  neon: 'music/neonMusic.mp3',
  forge: 'music/forgeMusic.mp3'
};
var menuChillTrack = 'music/menu.mp3';
var menuChillGain = 0.28;
var themeColors = {
  space1: '#1a2a4f',
  space2: '#070b16',
  space3: '#020308',
  star: '200, 220, 255'
};
var themePalette = {
  shield: ['#52b8ff', '#58e28f', '#ff6b6b'],
  coreOuter: '#ffb347',
  coreInner: '#ffe1b3',
  missileNormal: '#ff7c57',
  missileFast: '#6ce3ff',
  missileTank: '#7fdc7a',
  missileTwin: '#7fdc7a',
  missileStrokeNormal: 'rgba(255, 220, 180, 0.7)',
  missileStrokeFast: 'rgba(160, 240, 255, 0.8)',
  missileFinNormal: 'rgba(255, 160, 110, 0.9)',
  missileFinFast: 'rgba(120, 220, 255, 0.9)',
  missileTrailNormal: 'rgba(255, 140, 60, 0.9)',
  missileTrailFast: 'rgba(120, 220, 255, 0.9)',
  twinBeam: 'rgba(110, 255, 150, 0.85)',
  screenFlash: '#9cd3ff',
  shockwave: '140, 220, 255'
};

var audioSettingsKey = { music: 'musicVolume', sfx: 'sfxVolume' };
var baseSfxGain = 0.2;
var baseShootVolume = 0.4;
var baseHitVolume = 0.55;
var showMeteorHitboxes = false;
var showShieldHitboxes = false;
