// Debug buttons visibility - set to true to show admin debug buttons
var SHOW_DEBUG_BUTTONS = false;

var levels = [
  { level: 1, spawnInterval: 1.35, music: { gain: 0.2, tempo: 220 } },
  { level: 2, spawnInterval: 1.05, music: { gain: 0.26, tempo: 170 } },
  { level: 3, spawnInterval: 0.75, music: { gain: 0.32, tempo: 130 } },
  { level: 4, spawnInterval: 0.4, music: { gain: 0.4, tempo: 90 } },
  { level: 5, spawnInterval: 1.2, music: { gain: 0.3, tempo: 140 } }
];

var baseCoreRadius = 28;
var baseShieldRadius = 68;
var layerGap = 24;
var maxLayers = 3;
var survivalRecordsKey = 'survivalRecords';
var maxNormalLevels = 3;

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
