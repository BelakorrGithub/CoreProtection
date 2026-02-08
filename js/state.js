// Game state - requires: config, dom


var width = window.innerWidth;
var height = window.innerHeight;
var dpr = window.devicePixelRatio || 1;
var mouseX = width / 2;
var mouseY = height / 2;

var state = {
  running: false,
  level: 1,
  wave: 1,
  wavesTotal: 3,
  countdown: 3,
  spawnTimer: 0,
  spawnInterval: 1.1,
  waveSpawned: 0,
  waveTarget: 0,
  bossSpawnTimer: 0,
  money: 0,
  unlockedLevel: 1,
  selectedLevel: 1,
  betweenLevels: false,
  finalLevel: false,
  hardcoreLevel: false,
  survivalLevel: false,
  bossLevel: false,
  bossPhase: false,
  paused: false,
  runStartMoney: 0,
  slowTimer: 0,
  aegisTimer: 0,
  survivalTime: 0,
  musicGain: 0.24,
  musicTempo: 140,
  lastTime: 0,
  animationTime: 0, // Time used for animations, only updates when game is running and not paused
  debugMode: false,
  bossTestMode: false,
  bossTestEntry: 'top'
};

var shieldLayers = [];

var core = {
  radius: baseCoreRadius,
  alive: true
};

var layout = {
  x: width / 2,
  y: height / 2,
  scale: 1,
  safeBottom: 0
};

var missiles = [];
var twinGroups = new Map();
let twinCounter = 0;
var explosions = [];
var confetti = [];
var cashFloaters = [];
var debugMeteorTemplates = [];
var debugRespawnQueue = [];
var boss = {
  active: false,
  x: 0,
  y: -400,
  width: 260,
  height: 200,
  entry: 'top',
  targetX: 0,
  targetY: 0,
  speed: 90,
  hp: 20,
  maxHp: 20,
  bodyFlash: 0,
  driftSpeed: 0,
  driftDir: 1,
  settled: false,
  parts: [],
  hitInvulnTimer: 0
};

var stars = [];
var screenFlash = 0;
var shockwave = 0;