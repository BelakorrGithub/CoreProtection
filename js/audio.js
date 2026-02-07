// Audio context, buffers and shoot/hit SFX - requires: config, dom, state

var audioCtx = null;
var masterGain = null;
var bgMusic = null;
var bgMusicTrack = null;
var melodyTimer = null;
var gamePulse = null;
var countdownTimer = null;
var isInCountdown = false;
var waveTimeout = null;
var waveMessageTimer = null;
var victoryTimer = null;
var gameGain = null;
var melodyIntervalMs = 140;
var baseMelodyIntervalMs = 140;
var baseMusicGain = 0.24;
var musicVolume = 1;
var sfxVolume = 1;
var previousMusicVolume = 1;
var previousSfxVolume = 1;
var pausedBgMusicVolume = 1;
var pausedGameGainValue = 1;
var musicSlowFactor = 1;
var leadOsc = null;
var melodyStep = 0;
var lastMusicPreview = 0;
var lastSfxPreview = 0;
var debugHoldTimer = null;
var debugHoldTriggered = false;
var adminToastTimer = null;
var moneyToastTimer = null;
var levelLockedToastTimer = null;
var adminCreditsTimer = null;
var adminCreditsTriggered = false;
var adminCreditFloaterTimer = null;
var debugModeTimer = null;
var debugModeTriggered = false;
var shootSfx = null;
var hitSfx = null;
var shootSfxBuffer = null;
var hitSfxBuffer = null;
var audioBuffersLoaded = false;

async function loadAudioBuffers() {
  if (!audioCtx || audioBuffersLoaded) return;
  try {
    var destroyResponse = await fetch('sound/destroy.wav');
    var destroyArrayBuffer = await destroyResponse.arrayBuffer();
    shootSfxBuffer = await audioCtx.decodeAudioData(destroyArrayBuffer);
    var hitResponse = await fetch('sound/hit.wav');
    var hitArrayBuffer = await hitResponse.arrayBuffer();
    hitSfxBuffer = await audioCtx.decodeAudioData(hitArrayBuffer);
    audioBuffersLoaded = true;
  } catch (err) {
    console.warn('Failed to load audio buffers, using HTML Audio fallback:', err);
  }
}

function playShootSfx() {
  if (audioCtx && audioBuffersLoaded && shootSfxBuffer) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(function() {
        var source = audioCtx.createBufferSource();
        var gain = audioCtx.createGain();
        source.buffer = shootSfxBuffer;
        var masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
        gain.gain.value = (baseShootVolume * sfxVolume) / Math.max(0.001, masterGainValue);
        source.connect(gain);
        gain.connect(masterGain);
        source.start(0);
      }).catch(function() {});
      return;
    }
    var source = audioCtx.createBufferSource();
    var gain = audioCtx.createGain();
    source.buffer = shootSfxBuffer;
    var masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
    gain.gain.value = (baseShootVolume * sfxVolume) / Math.max(0.001, masterGainValue);
    source.connect(gain);
    gain.connect(masterGain);
    source.start(0);
    return;
  }
  if (!shootSfx) {
    shootSfx = new Audio('sound/destroy.wav');
    shootSfx.preload = 'auto';
    shootSfx.volume = baseShootVolume * sfxVolume;
    shootSfx.load();
  }
  shootSfx.volume = baseShootVolume * sfxVolume;
  var audioClone = shootSfx.cloneNode();
  audioClone.volume = baseShootVolume * sfxVolume;
  void audioClone.play().catch(function() {});
}

function playHitSfx() {
  if (audioCtx && audioBuffersLoaded && hitSfxBuffer) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(function() {
        var source = audioCtx.createBufferSource();
        var gain = audioCtx.createGain();
        source.buffer = hitSfxBuffer;
        var masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
        gain.gain.value = (baseHitVolume * sfxVolume) / Math.max(0.001, masterGainValue);
        source.connect(gain);
        gain.connect(masterGain);
        source.start(0);
      }).catch(function() {});
      return;
    }
    var source = audioCtx.createBufferSource();
    var gain = audioCtx.createGain();
    source.buffer = hitSfxBuffer;
    var masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
    gain.gain.value = (baseHitVolume * sfxVolume) / Math.max(0.001, masterGainValue);
    source.connect(gain);
    gain.connect(masterGain);
    source.start(0);
    return;
  }
  if (!hitSfx) {
    hitSfx = new Audio('sound/hit.wav');
    hitSfx.preload = 'auto';
    hitSfx.volume = baseHitVolume * sfxVolume;
    hitSfx.load();
  }
  hitSfx.volume = baseHitVolume * sfxVolume;
  var audioClone = hitSfx.cloneNode();
  audioClone.volume = baseHitVolume * sfxVolume;
  void audioClone.play().catch(function() {});
}
