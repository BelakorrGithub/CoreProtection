// Debug buttons visibility - set to true to show admin debug buttons
const SHOW_DEBUG_BUTTONS = false;

// ── i18n ──────────────────────────────────────────────────
const i18n = {
  es: {
    // HUD
    level: n => `Nivel ${n}`,
    waveOf: (w, t) => `Oleada ${w} de ${t}`,
    wave: w => `Oleada ${w}`,
    boss: 'Jefe',
    credits: n => `Créditos: ${n}`,
    time: t => `Tiempo ${t}s`,
    survival: 'Supervivencia',
    hardcore: 'Extremo',
    debugMode: 'Modo Depuración',
    meteorViewer: 'Visor de Meteoritos',

    // Menu
    gameTitle: 'Core Protection',
    play: 'Jugar',
    upgrades: 'Mejoras',
    options: 'Opciones',
    start: 'Iniciar',
    backToMenu: 'Volver al Menú',
    backToModes: 'Volver a Modos',
    modes: 'Modos',
    normalMode: 'Modo Normal',
    hardcoreMode: 'Modo Extremo',
    survivalMode: 'Modo Supervivencia',
    normalLevels: 'Niveles Normales',
    levelN: n => `Nivel ${n}`,
    hardcoreDesc: 'No habrá habilidades ni mejoras disponibles en este modo.',
    survivalDesc: 'Oleadas infinitas con puntuación basada en tiempo de supervivencia.',
    highScores: 'Mejores Puntuaciones',
    noRecords: 'Sin registros aún',

    // Options
    music: 'Música',
    sounds: 'Sonidos',
    styles: 'Estilos',
    language: 'Idioma',
    defaultStyle: 'Predeterminado',
    defaultDesc: 'Defensa espacial clásica',
    retroStyle: 'Retro',
    retroDesc: 'Arcade retro con cuadrícula',
    neonStyle: 'Neón',
    neonDesc: 'Ciencia ficción con brillo',
    forgeStyle: 'Forja',
    forgeDesc: 'Defensa de acero fundido',
    resetProgress: 'Reiniciar Progreso',
    resetTitle: 'Reiniciar Progreso?',
    resetText: 'Esto borrará niveles, créditos y mejoras.',
    yes: 'Sí',
    cancel: 'Cancelar',

    // Pause
    paused: 'Pausado',
    tapResume: 'Toca para continuar',
    returnToMenu: 'Volver al Menú',
    returnToMenuQ: 'Volver al Menú?',
    pauseLoseCredits: 'Perderás todos los créditos ganados en esta partida.',

    // Game messages
    bossIncoming: 'Jefe Entrante',
    levelComplete: 'Nivel Completado',
    gameOver: 'Fin del Juego',
    hardcoreModeMsg: 'Modo Extremo',
    survivalModeMsg: 'Modo Supervivencia',
    survivalTime: t => `Supervivencia: ${t}`,
    survivalNewRecord: t => `Supervivencia: ${t} — ¡Nuevo Récord!`,
    godsFingerDeath: 'La ira de Dios está fuera de control...\n¡Te has matado a ti mismo!',

    // Victory / Result
    congratulations: 'Felicidades',
    completedAll: 'Has completado todos los niveles',
    hardcoreUnlocked: 'MODO EXTREMO DESBLOQUEADO',
    continue_: 'Continuar',
    retryLevel: 'Reintentar Nivel',
    nextLevel: 'Siguiente Nivel',
    playHardcore: 'Jugar Extremo',
    playSurvival: 'Jugar Supervivencia',

    // Abilities
    abilities: 'Habilidades',
    pause: 'Pausa',
    debug: 'Depurar',
    locked: 'Bloqueado',
    max: 'Máx',
    cooldownS: s => `Enfriamiento ${s}s`,
    shieldLevel: n => `Escudo nivel ${n}`,
    unlockNova: 'Desbloquear Nova',
    novaLevel: n => `Nova Nivel ${n}`,
    unlockRegen: 'Desbloquear Regen',
    regenLevel: n => `Regen Nivel ${n}`,
    unlockSlow: 'Desbloquear Lento',
    slowLevel: n => `Lento Nivel ${n}`,
    unlockAegis: 'Desbloquear Aegis',
    aegisLevel: n => `Aegis Nivel ${n}`,
    unlockGodsFinger: 'Desbloquear Dedo de Dios',
    disableGodsFinger: 'Desactivar Dedo de Dios',
    enableGodsFinger: 'Activar Dedo de Dios',
    clickToDisable: 'Clic para desactivar',
    clickToEnable: 'Clic para activar (gratis)',
    permanentUpgrade: 'Mejora permanente',
    adminCreditsLabel: '+1000 Créditos',
    admin: 'Admin',
    notAdmin: 'No eres administrador',
    notEnoughCredits: 'Créditos insuficientes',
    levelNotAvailable: 'Este nivel aún no está disponible',

    // Hardcore confirm
    hardcoreConfirmTitle: 'Modo Extremo',
    hardcoreConfirmPlay: 'Jugar Extremo',

    // Medal aria
    goldMedal: 'Medalla de oro',
    silverMedal: 'Medalla de plata',
    bronzeMedal: 'Medalla de bronce',
  },
  en: {
    level: n => `Level ${n}`,
    waveOf: (w, t) => `Wave ${w} of ${t}`,
    wave: w => `Wave ${w}`,
    boss: 'Boss',
    credits: n => `Credits: ${n}`,
    time: t => `Time ${t}s`,
    survival: 'Survival',
    hardcore: 'Hardcore',
    debugMode: 'Debug Mode',
    meteorViewer: 'Meteor Viewer',

    gameTitle: 'Core Protection',
    play: 'Play',
    upgrades: 'Upgrades',
    options: 'Options',
    start: 'Start',
    backToMenu: 'Back to Menu',
    backToModes: 'Back to Modes',
    modes: 'Modes',
    normalMode: 'Normal Mode',
    hardcoreMode: 'Hardcore Mode',
    survivalMode: 'Survival Mode',
    normalLevels: 'Normal Levels',
    levelN: n => `Level ${n}`,
    hardcoreDesc: 'No skills or upgrades will be available in this mode.',
    survivalDesc: 'Endless waves with scores tracked by time survived.',
    highScores: 'High Scores',
    noRecords: 'No records yet',

    music: 'Music',
    sounds: 'Sounds',
    styles: 'Styles',
    language: 'Language',
    defaultStyle: 'Default',
    defaultDesc: 'Classic space defense',
    retroStyle: 'Retro',
    retroDesc: 'Retro arcade grid',
    neonStyle: 'Neon',
    neonDesc: 'Hyper glow sci-fi',
    forgeStyle: 'Forge',
    forgeDesc: 'Molten steel defense',
    resetProgress: 'Reset Progress',
    resetTitle: 'Reset Progress?',
    resetText: 'This will clear levels, credits, and upgrades.',
    yes: 'Yes',
    cancel: 'Cancel',

    paused: 'Paused',
    tapResume: 'Tap to resume',
    returnToMenu: 'Return to Menu',
    returnToMenuQ: 'Return to Menu?',
    pauseLoseCredits: 'You will lose all credits earned this run.',

    bossIncoming: 'Boss Incoming',
    levelComplete: 'Level Complete',
    gameOver: 'Game Over',
    hardcoreModeMsg: 'Hardcore Mode',
    survivalModeMsg: 'Survival Mode',
    survivalTime: t => `Survival: ${t}`,
    survivalNewRecord: t => `Survival: ${t} — New Record!`,
    godsFingerDeath: 'The wrath of God is out of control...\nYou killed yourself!',

    congratulations: 'Congratulations',
    completedAll: 'You completed all levels',
    hardcoreUnlocked: 'HARDCORE MODE UNLOCKED',
    continue_: 'Continue',
    retryLevel: 'Retry Level',
    nextLevel: 'Next Level',
    playHardcore: 'Play Hardcore',
    playSurvival: 'Play Survival',

    abilities: 'Abilities',
    pause: 'Pause',
    debug: 'Debug',
    locked: 'Locked',
    max: 'Max',
    cooldownS: s => `Cooldown ${s}s`,
    shieldLevel: n => `Shield level ${n}`,
    unlockNova: 'Unlock Nova',
    novaLevel: n => `Nova Level ${n}`,
    unlockRegen: 'Unlock Regen',
    regenLevel: n => `Regen Level ${n}`,
    unlockSlow: 'Unlock Slow',
    slowLevel: n => `Slow Level ${n}`,
    unlockAegis: 'Unlock Aegis',
    aegisLevel: n => `Aegis Level ${n}`,
    unlockGodsFinger: "Unlock God's Finger",
    disableGodsFinger: "Disable God's Finger",
    enableGodsFinger: "Enable God's Finger",
    clickToDisable: 'Click to disable',
    clickToEnable: 'Click to enable (free)',
    permanentUpgrade: 'Permanent upgrade',
    adminCreditsLabel: '+1000 Credits',
    admin: 'Admin',
    notAdmin: 'You are not an admin',
    notEnoughCredits: 'Not enough credits',
    levelNotAvailable: 'This level is not available yet',

    hardcoreConfirmTitle: 'Hardcore Mode',
    hardcoreConfirmPlay: 'Play Hardcore',

    goldMedal: 'Gold medal',
    silverMedal: 'Silver medal',
    bronzeMedal: 'Bronze medal',
  },
  fr: {
    level: n => `Niveau ${n}`,
    waveOf: (w, t) => `Vague ${w} sur ${t}`,
    wave: w => `Vague ${w}`,
    boss: 'Boss',
    credits: n => `Crédits : ${n}`,
    time: t => `Temps ${t}s`,
    survival: 'Survie',
    hardcore: 'Extrême',
    debugMode: 'Mode Débogage',
    meteorViewer: 'Visionneur de Météores',

    gameTitle: 'Core Protection',
    play: 'Jouer',
    upgrades: 'Améliorations',
    options: 'Options',
    start: 'Lancer',
    backToMenu: 'Retour au Menu',
    backToModes: 'Retour aux Modes',
    modes: 'Modes',
    normalMode: 'Mode Normal',
    hardcoreMode: 'Mode Extrême',
    survivalMode: 'Mode Survie',
    normalLevels: 'Niveaux Normaux',
    levelN: n => `Niveau ${n}`,
    hardcoreDesc: 'Aucune compétence ni amélioration ne sera disponible dans ce mode.',
    survivalDesc: 'Vagues infinies avec scores basés sur le temps de survie.',
    highScores: 'Meilleurs Scores',
    noRecords: 'Aucun record',

    music: 'Musique',
    sounds: 'Sons',
    styles: 'Styles',
    language: 'Langue',
    defaultStyle: 'Défaut',
    defaultDesc: 'Défense spatiale classique',
    retroStyle: 'Rétro',
    retroDesc: 'Arcade rétro avec grille',
    neonStyle: 'Néon',
    neonDesc: 'Sci-fi lumineux',
    forgeStyle: 'Forge',
    forgeDesc: 'Défense d\'acier fondu',
    resetProgress: 'Réinitialiser la Progression',
    resetTitle: 'Réinitialiser la Progression ?',
    resetText: 'Cela effacera les niveaux, crédits et améliorations.',
    yes: 'Oui',
    cancel: 'Annuler',

    paused: 'En Pause',
    tapResume: 'Touchez pour reprendre',
    returnToMenu: 'Retour au Menu',
    returnToMenuQ: 'Retour au Menu ?',
    pauseLoseCredits: 'Vous perdrez tous les crédits gagnés durant cette partie.',

    bossIncoming: 'Boss en Approche',
    levelComplete: 'Niveau Terminé',
    gameOver: 'Fin de Partie',
    hardcoreModeMsg: 'Mode Extrême',
    survivalModeMsg: 'Mode Survie',
    survivalTime: t => `Survie : ${t}`,
    survivalNewRecord: t => `Survie : ${t} — Nouveau Record !`,
    godsFingerDeath: 'La colère de Dieu est hors de contrôle...\nVous vous êtes tué !',

    congratulations: 'Félicitations',
    completedAll: 'Vous avez terminé tous les niveaux',
    hardcoreUnlocked: 'MODE EXTRÊME DÉBLOQUÉ',
    continue_: 'Continuer',
    retryLevel: 'Réessayer le Niveau',
    nextLevel: 'Niveau Suivant',
    playHardcore: 'Jouer Extrême',
    playSurvival: 'Jouer Survie',

    abilities: 'Compétences',
    pause: 'Pause',
    debug: 'Débogage',
    locked: 'Verrouillé',
    max: 'Max',
    cooldownS: s => `Recharge ${s}s`,
    shieldLevel: n => `Bouclier niveau ${n}`,
    unlockNova: 'Débloquer Nova',
    novaLevel: n => `Nova Niveau ${n}`,
    unlockRegen: 'Débloquer Regen',
    regenLevel: n => `Regen Niveau ${n}`,
    unlockSlow: 'Débloquer Lent',
    slowLevel: n => `Lent Niveau ${n}`,
    unlockAegis: 'Débloquer Aegis',
    aegisLevel: n => `Aegis Niveau ${n}`,
    unlockGodsFinger: 'Débloquer Doigt de Dieu',
    disableGodsFinger: 'Désactiver Doigt de Dieu',
    enableGodsFinger: 'Activer Doigt de Dieu',
    clickToDisable: 'Cliquer pour désactiver',
    clickToEnable: 'Cliquer pour activer (gratuit)',
    permanentUpgrade: 'Amélioration permanente',
    adminCreditsLabel: '+1000 Crédits',
    admin: 'Admin',
    notAdmin: 'Vous n\'êtes pas administrateur',
    notEnoughCredits: 'Crédits insuffisants',
    levelNotAvailable: 'Ce niveau n\'est pas encore disponible',

    hardcoreConfirmTitle: 'Mode Extrême',
    hardcoreConfirmPlay: 'Jouer Extrême',

    goldMedal: 'Médaille d\'or',
    silverMedal: 'Médaille d\'argent',
    bronzeMedal: 'Médaille de bronze',
  }
};

let currentLang = localStorage.getItem('language') || 'es';

function t(key, ...args) {
  const val = i18n[currentLang]?.[key] ?? i18n.es[key];
  return typeof val === 'function' ? val(...args) : val;
}

function applyLanguage() {
  document.documentElement.lang = currentLang === 'es' ? 'es' : currentLang === 'fr' ? 'fr' : 'en';

  // Toasts
  if (adminToast) adminToast.textContent = t('notAdmin');
  if (moneyToast) moneyToast.textContent = t('notEnoughCredits');
  if (levelLockedToast) levelLockedToast.textContent = t('levelNotAvailable');

  // Boss bar
  const bossLabel = document.querySelector('.boss-label');
  if (bossLabel) bossLabel.textContent = t('boss');

  // Pause overlay
  const pauseTitle = document.querySelector('.pause-title');
  if (pauseTitle) pauseTitle.textContent = t('paused');
  const pauseResEl = document.getElementById('pause-resume');
  if (pauseResEl) pauseResEl.textContent = t('tapResume');
  const pauseMenuBtn = document.getElementById('pause-menu');
  if (pauseMenuBtn) pauseMenuBtn.textContent = t('returnToMenu');

  // Pause confirm
  const pcTitle = document.querySelector('#pause-confirm .confirm-title');
  if (pcTitle) pcTitle.textContent = t('returnToMenuQ');
  const pcText = document.querySelector('#pause-confirm .confirm-text');
  if (pcText) pcText.textContent = t('pauseLoseCredits');
  const pcYes = document.getElementById('pause-confirm-yes');
  if (pcYes) pcYes.textContent = t('yes');
  const pcNo = document.getElementById('pause-confirm-no');
  if (pcNo) pcNo.textContent = t('cancel');

  // Result screen
  const resultRetryEl = document.getElementById('result-retry');
  if (resultRetryEl) resultRetryEl.textContent = t('retryLevel');
  const resultNextEl = document.getElementById('result-next');
  if (resultNextEl) resultNextEl.textContent = t('nextLevel');
  const resultHardcoreEl = document.getElementById('result-hardcore');
  if (resultHardcoreEl) resultHardcoreEl.textContent = t('playHardcore');
  const resultSurvivalEl = document.getElementById('result-survival');
  if (resultSurvivalEl) resultSurvivalEl.textContent = t('playSurvival');
  const resultMenuEl = document.getElementById('result-menu');
  if (resultMenuEl) resultMenuEl.textContent = t('returnToMenu');
  // Row titles in result upgrades
  const resultUpgRowTitle = document.querySelector('#result-upgrades .row-title');
  if (resultUpgRowTitle) resultUpgRowTitle.textContent = t('upgrades');

  // Victory
  const vicTitle = document.querySelector('#victory .title');
  if (vicTitle) vicTitle.textContent = t('congratulations');
  const vicSubtitle = document.querySelector('#victory .subtitle:not(#hardcore-unlocked)');
  if (vicSubtitle) vicSubtitle.textContent = t('completedAll');
  const hcUnlocked = document.getElementById('hardcore-unlocked');
  if (hcUnlocked) hcUnlocked.textContent = t('hardcoreUnlocked');
  const vicClose = document.getElementById('victory-close');
  if (vicClose) vicClose.textContent = t('continue_');

  // Start screen - Home
  const homeTitle = document.querySelector('#menu-home-panel .title');
  if (homeTitle) homeTitle.textContent = t('gameTitle');
  const menuPlayBtn = document.getElementById('menu-play');
  if (menuPlayBtn) menuPlayBtn.textContent = t('play');
  const menuUpgBtn = document.getElementById('menu-upgrades-button');
  if (menuUpgBtn) menuUpgBtn.textContent = t('upgrades');
  const menuOptBtn = document.getElementById('menu-options-button');
  if (menuOptBtn) menuOptBtn.textContent = t('options');
  const debugLabel = document.querySelector('#debug-mode-button .label');
  if (debugLabel) debugLabel.textContent = t('debugMode');
  const debugStatus = document.querySelector('#debug-mode-button .status');
  if (debugStatus) debugStatus.textContent = t('admin');

  // Play panel
  const playBackBtn = document.getElementById('play-back');
  if (playBackBtn) { playBackBtn.innerHTML = '<span aria-hidden="true">&lt;</span> ' + t('backToMenu'); }
  const modesTitle = document.querySelector('#menu-play-panel .modes-title');
  if (modesTitle) modesTitle.textContent = t('modes');
  const normalToggle = document.getElementById('normal-mode-toggle');
  if (normalToggle) normalToggle.textContent = t('normalMode');
  const hardcoreToggle = document.getElementById('hardcore-mode-toggle');
  if (hardcoreToggle) hardcoreToggle.textContent = t('hardcoreMode');
  const survivalToggle = document.getElementById('survival-mode-toggle');
  if (survivalToggle) survivalToggle.textContent = t('survivalMode');

  // Normal panel
  const normalBackBtn = document.getElementById('normal-back');
  if (normalBackBtn) { normalBackBtn.innerHTML = '<span aria-hidden="true">&lt;</span> ' + t('backToModes'); }
  const normalTitle = document.querySelector('#menu-normal-panel .modes-title');
  if (normalTitle) normalTitle.textContent = t('normalLevels');
  document.querySelectorAll('.normal-level').forEach(btn => {
    const lv = Number(btn.dataset.level);
    if (!Number.isNaN(lv)) btn.textContent = t('levelN', lv);
  });
  const normalStartBtn = document.getElementById('normal-start');
  if (normalStartBtn) normalStartBtn.textContent = t('start');

  // Hardcore panel
  const hcBackBtn = document.getElementById('hardcore-back');
  if (hcBackBtn) { hcBackBtn.innerHTML = '<span aria-hidden="true">&lt;</span> ' + t('backToModes'); }
  const hcTitle = document.querySelector('#menu-hardcore-panel .modes-title');
  if (hcTitle) hcTitle.textContent = t('hardcoreMode');
  const hcDesc = document.querySelector('#menu-hardcore-panel .confirm-text');
  if (hcDesc) hcDesc.textContent = t('hardcoreDesc');
  const hcStartBtn = document.getElementById('hardcore-start');
  if (hcStartBtn) hcStartBtn.textContent = t('start');

  // Survival panel
  const svBackBtn = document.getElementById('survival-back');
  if (svBackBtn) { svBackBtn.innerHTML = '<span aria-hidden="true">&lt;</span> ' + t('backToModes'); }
  const svTitle = document.querySelector('#menu-survival-panel .modes-title');
  if (svTitle) svTitle.textContent = t('survivalMode');
  const svDesc = document.querySelector('#menu-survival-panel .modes-description');
  if (svDesc) svDesc.textContent = t('survivalDesc');
  const svRecTitle = document.querySelector('#survival-records .records-title');
  if (svRecTitle) svRecTitle.textContent = t('highScores');
  const svStartBtn = document.getElementById('survival-start');
  if (svStartBtn) svStartBtn.textContent = t('start');

  // Upgrades panel
  const upgRowTitle = document.querySelector('#menu-upgrades .row-title');
  if (upgRowTitle) upgRowTitle.textContent = t('upgrades');
  const upgBackBtn = document.getElementById('upgrades-back');
  if (upgBackBtn) { upgBackBtn.innerHTML = '<span aria-hidden="true">&lt;</span> ' + t('backToMenu'); }
  const admCredLabel = document.querySelector('#admin-credits .label');
  if (admCredLabel) admCredLabel.textContent = t('adminCreditsLabel');
  const admCredStatus = document.querySelector('#admin-credits .status');
  if (admCredStatus) admCredStatus.textContent = t('admin');

  // Options panel
  const optTitle = document.querySelector('.options-title');
  if (optTitle) optTitle.textContent = t('options');
  const musicLabel = document.querySelector('label[for="music-volume"]');
  if (musicLabel) musicLabel.textContent = t('music');
  const sfxLabel = document.querySelector('label[for="sfx-volume"]');
  if (sfxLabel) sfxLabel.textContent = t('sounds');
  const stylesTitle = document.querySelector('.styles-title');
  if (stylesTitle) stylesTitle.textContent = t('styles');
  const styleCards = { default: ['defaultStyle','defaultDesc'], retro: ['retroStyle','retroDesc'], neon: ['neonStyle','neonDesc'], forge: ['forgeStyle','forgeDesc'] };
  Object.entries(styleCards).forEach(([key, [nameKey, descKey]]) => {
    const card = document.querySelector(`.style-card[data-style="${key}"]`);
    if (card) {
      const nm = card.querySelector('.style-name');
      if (nm) nm.textContent = t(nameKey);
      const ds = card.querySelector('.style-desc');
      if (ds) ds.textContent = t(descKey);
    }
  });
  const resetBtn = document.getElementById('reset-progress');
  if (resetBtn) resetBtn.textContent = t('resetProgress');
  const optBackBtn = document.getElementById('options-back');
  if (optBackBtn) { optBackBtn.innerHTML = '<span aria-hidden="true">&lt;</span> ' + t('backToMenu'); }

  // Language selector
  const langTitle = document.querySelector('.language-title');
  if (langTitle) langTitle.textContent = t('language');

  // Reset confirm
  const rcTitle = document.querySelector('#confirm-reset .confirm-title');
  if (rcTitle) rcTitle.textContent = t('resetTitle');
  const rcText = document.querySelector('#confirm-reset .confirm-text');
  if (rcText) rcText.textContent = t('resetText');
  const rcYes = document.getElementById('confirm-reset-yes');
  if (rcYes) rcYes.textContent = t('yes');
  const rcNo = document.getElementById('confirm-reset-no');
  if (rcNo) rcNo.textContent = t('cancel');

  // Hardcore confirm
  const hccTitle = document.querySelector('#hardcore-confirm .confirm-title');
  if (hccTitle) hccTitle.textContent = t('hardcoreConfirmTitle');
  const hccText = document.querySelector('#hardcore-confirm .confirm-text');
  if (hccText) hccText.textContent = t('hardcoreDesc');
  const hccYes = document.getElementById('hardcore-confirm-yes');
  if (hccYes) hccYes.textContent = t('hardcoreConfirmPlay');
  const hccNo = document.getElementById('hardcore-confirm-no');
  if (hccNo) hccNo.textContent = t('cancel');

  // Gameover buttons (old, still in DOM)
  if (gameoverMenu) gameoverMenu.textContent = t('returnToMenu');
  if (gameoverRetry) gameoverRetry.textContent = t('retryLevel');

  // Skills bar
  const skillsRowTitle = document.querySelector('#skills .row-title');
  if (skillsRowTitle) skillsRowTitle.textContent = t('abilities');
  const pauseBtnLabel = document.querySelector('#pause-button .label');
  if (pauseBtnLabel) pauseBtnLabel.textContent = t('pause');
  const debugSkipLabel = document.querySelector('#debug-skip .label');
  if (debugSkipLabel) debugSkipLabel.textContent = t('debug');

  // Re-capture skill dataset.label after language change
  document.querySelectorAll('.skill').forEach(button => {
    const lbl = button.querySelector('.label');
    if (lbl) button.dataset.label = lbl.textContent;
  });

  // Refresh dynamic content
  updateHud();
  updateUpgrades();
  updateSkillLocks();
  renderSurvivalRecords();
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const hudLevel = document.getElementById('level');
const hudWave = document.getElementById('wave');
const countdownEl = document.getElementById('countdown');
const waveMessageEl = document.getElementById('wave-message');
const gameoverEl = document.getElementById('gameover');
const gameoverMenu = document.getElementById('gameover-menu');
const gameoverRetry = document.getElementById('gameover-retry');
const victoryEl = document.getElementById('victory');
const hardcoreUnlocked = document.getElementById('hardcore-unlocked');
const victoryClose = document.getElementById('victory-close');
const startScreen = document.getElementById('start-screen');
const normalStartButton = document.getElementById('normal-start');
const resetProgressButton = document.getElementById('reset-progress');
const debugSkip = document.getElementById('debug-skip');
const adminToast = document.getElementById('admin-toast');
const moneyToast = document.getElementById('money-toast');
const levelLockedToast = document.getElementById('level-locked-toast');
const pauseOverlay = document.getElementById('pause-overlay');
const pauseButton = document.getElementById('pause-button');
const pauseMenu = document.getElementById('pause-menu');
const pauseResume = document.getElementById('pause-resume');
const pauseConfirm = document.getElementById('pause-confirm');
const pauseConfirmYes = document.getElementById('pause-confirm-yes');
const pauseConfirmNo = document.getElementById('pause-confirm-no');
const menuCredits = document.getElementById('menu-credits');
const bossBar = document.getElementById('boss-bar');
const bossBarFill = bossBar ? bossBar.querySelector('.boss-fill') : null;
const menuPlay = document.getElementById('menu-play');
const menuUpgradesButton = document.getElementById('menu-upgrades-button');
const menuHomePanel = document.getElementById('menu-home-panel');
const menuPlayPanel = document.getElementById('menu-play-panel');
const menuNormalPanel = document.getElementById('menu-normal-panel');
const menuHardcorePanel = document.getElementById('menu-hardcore-panel');
const menuSurvivalPanel = document.getElementById('menu-survival-panel');
const menuUpgradesPanel = document.getElementById('menu-upgrades-panel');
const upgradesBack = document.getElementById('upgrades-back');
const playBack = document.getElementById('play-back');
const normalModeToggle = document.getElementById('normal-mode-toggle');
const hardcoreModeToggle = document.getElementById('hardcore-mode-toggle');
const survivalModeToggle = document.getElementById('survival-mode-toggle');
const normalLevels = document.getElementById('normal-levels');
const normalBack = document.getElementById('normal-back');
const hardcoreBack = document.getElementById('hardcore-back');
const survivalBack = document.getElementById('survival-back');
const hardcoreStartButton = document.getElementById('hardcore-start');
const survivalStartButton = document.getElementById('survival-start');
const menuOptionsButton = document.getElementById('menu-options-button');
const menuOptionsPanel = document.getElementById('menu-options-panel');
const optionsBack = document.getElementById('options-back');
const musicVolumeSlider = document.getElementById('music-volume');
const sfxVolumeSlider = document.getElementById('sfx-volume');
const musicVolumeValue = document.getElementById('music-volume-value');
const sfxVolumeValue = document.getElementById('sfx-volume-value');
const styleButtons = document.querySelectorAll('[data-style]');
const adminCreditsButton = document.getElementById('admin-credits');
const adminCreditFloater = document.getElementById('admin-credit-floater');
const debugModeButton = document.getElementById('debug-mode-button');
const debugPanel = document.getElementById('debug-panel');
const debugDistanceInput = document.getElementById('debug-distance');
const debugAngleOffsetInput = document.getElementById('debug-angle-offset');
const debugUseBaseAngleInput = document.getElementById('debug-use-base-angle');
const debugShowVariablesInput = document.getElementById('debug-show-variables');
const resultScreen = document.getElementById('result-screen');
const resultTitle = document.getElementById('result-title');
const resultCredits = document.getElementById('result-credits');
const resultRetry = document.getElementById('result-retry');
const resultNext = document.getElementById('result-next');
const resultHardcore = document.getElementById('result-hardcore');
const resultSurvival = document.getElementById('result-survival');
const resultMenu = document.getElementById('result-menu');
const confirmReset = document.getElementById('confirm-reset');
const confirmResetYes = document.getElementById('confirm-reset-yes');
const confirmResetNo = document.getElementById('confirm-reset-no');
const actionsBar = document.getElementById('actions');
const skillButtons = document.querySelectorAll('[data-skill]');
const upgradeButtons = document.querySelectorAll('[data-upgrade]');
const levelButtons = document.querySelectorAll('.level-button');
const moneyEl = document.getElementById('money');
const survivalTimeEl = document.getElementById('survival-time');

let width = window.innerWidth;
let height = window.innerHeight;
let dpr = window.devicePixelRatio || 1;
let mouseX = width / 2;
let mouseY = height / 2;

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

const levels = [
  { level: 1, spawnInterval: 1.35, music: { gain: 0.2, tempo: 220 } },
  { level: 2, spawnInterval: 1.05, music: { gain: 0.26, tempo: 170 } },
  { level: 3, spawnInterval: 0.75, music: { gain: 0.32, tempo: 130 } },
  { level: 4, spawnInterval: 0.4, music: { gain: 0.4, tempo: 90 } },
  { level: 5, spawnInterval: 1.2, music: { gain: 0.3, tempo: 140 } }
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
const twinGroups = new Map();
let twinCounter = 0;
const explosions = [];
const confetti = [];
const cashFloaters = [];
const debugMeteorTemplates = [];
const debugRespawnQueue = [];
const boss = {
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
  parts: []
};

// ── Boss spaceship image & hitbox ────────────────────────
const bossImage = new Image();
bossImage.src = 'img/spaceship.png';
const bossImageLeftDestroyed = new Image();
bossImageLeftDestroyed.src = 'img/spaceship_left_destroyed.png';
const bossImageRightDestroyed = new Image();
bossImageRightDestroyed.src = 'img/spaceship_right_destroyed.png';
const bossImageBothDestroyed = new Image();
bossImageBothDestroyed.src = 'img/spaceship_both_destroyed.png';

function getBossCurrentImage() {
  const left = boss.parts.find(p => p.id === 'front-left');
  const right = boss.parts.find(p => p.id === 'front-right');
  const leftDead = left && left.hp <= 0;
  const rightDead = right && right.hp <= 0;
  if (leftDead && rightDead) return bossImageBothDestroyed;
  if (leftDead) return bossImageLeftDestroyed;
  if (rightDead) return bossImageRightDestroyed;
  return bossImage;
}

// Polygon hitbox for the spaceship silhouette (normalized 0-1 in image/ship space)
const bossHitboxPoly = [
  { x: 0.12, y: 0.03 },
  { x: 0.35, y: 0.03 },
  { x: 0.35, y: 0.12 },
  { x: 0.42, y: 0.07 },
  { x: 0.58, y: 0.07 },
  { x: 0.65, y: 0.12 },
  { x: 0.65, y: 0.03 },
  { x: 0.88, y: 0.03 },
  { x: 0.97, y: 0.20 },
  { x: 0.99, y: 0.34 },
  { x: 0.99, y: 0.52 },
  { x: 0.90, y: 0.58 },
  { x: 0.73, y: 0.63 },
  { x: 0.62, y: 0.76 },
  { x: 0.55, y: 0.90 },
  { x: 0.50, y: 0.97 },
  { x: 0.45, y: 0.90 },
  { x: 0.38, y: 0.76 },
  { x: 0.27, y: 0.63 },
  { x: 0.10, y: 0.58 },
  { x: 0.01, y: 0.52 },
  { x: 0.01, y: 0.34 },
  { x: 0.03, y: 0.20 },
];

function getBossRotation() {
  if (boss.entry === 'left') return -Math.PI / 2;
  if (boss.entry === 'right') return Math.PI / 2;
  return 0;
}

function getBossImageDims() {
  if (boss.entry === 'left' || boss.entry === 'right') {
    return { imgW: boss.height, imgH: boss.width };
  }
  return { imgW: boss.width, imgH: boss.height };
}

function shipToScreen(normX, normY) {
  const cx = boss.x + boss.width / 2;
  const cy = boss.y + boss.height / 2;
  const rotation = getBossRotation();
  const { imgW, imgH } = getBossImageDims();
  const localX = normX * imgW - imgW / 2;
  const localY = normY * imgH - imgH / 2;
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  return {
    x: cx + localX * cos - localY * sin,
    y: cy + localX * sin + localY * cos
  };
}

function screenToShip(sx, sy) {
  const cx = boss.x + boss.width / 2;
  const cy = boss.y + boss.height / 2;
  const rotation = getBossRotation();
  const dx = sx - cx;
  const dy = sy - cy;
  const cos = Math.cos(-rotation);
  const sin = Math.sin(-rotation);
  const localX = dx * cos - dy * sin;
  const localY = dx * sin + dy * cos;
  const { imgW, imgH } = getBossImageDims();
  return {
    x: (localX + imgW / 2) / imgW,
    y: (localY + imgH / 2) / imgH
  };
}

function pointInPolygon(px, py, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x, yi = poly[i].y;
    const xj = poly[j].x, yj = poly[j].y;
    if ((yi > py) !== (yj > py) && px < (xj - xi) * (py - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

let stars = [];
let screenFlash = 0;
let shockwave = 0;

let audioCtx = null;
let masterGain = null;
let bgMusic = null;
let bgMusicTrack = null;
let melodyTimer = null;
let gamePulse = null;
let countdownTimer = null;
let isInCountdown = false; // Track if we're currently in countdown phase
let waveTimeout = null;
let waveMessageTimer = null;
let victoryTimer = null;
let gameGain = null;
let melodyIntervalMs = 140;
let baseMelodyIntervalMs = 140;
let baseMusicGain = 0.24;
const audioSettingsKey = {
  music: 'musicVolume',
  sfx: 'sfxVolume'
};
const baseSfxGain = 0.2;
const baseShootVolume = 0.4;
const baseHitVolume = 0.55;
let musicVolume = 1;
let sfxVolume = 1;
let previousMusicVolume = 1; // Store previous volume when muting
let previousSfxVolume = 1; // Store previous volume when muting
let pausedBgMusicVolume = 1; // Store bgMusic volume before pause to restore it
let pausedGameGainValue = 1; // Store gameGain value before pause to restore it
let musicSlowFactor = 1;
let leadOsc = null;
let melodyStep = 0;
let lastMusicPreview = 0;
let lastSfxPreview = 0;
let debugHoldTimer = null;
let debugHoldTriggered = false;
let adminToastTimer = null;
let moneyToastTimer = null;
let levelLockedToastTimer = null;
let adminCreditsTimer = null;
let adminCreditsTriggered = false;
let adminCreditFloaterTimer = null;
let debugModeTimer = null;
let debugModeTriggered = false;
const survivalRecordsKey = 'survivalRecords';
const maxNormalLevels = 3;
const themeMusic = {
  default: { gain: 1, tempo: 1, pulse: 'square', lead: 'sawtooth' },
  retro: { gain: 0.85, tempo: 1.15, pulse: 'square', lead: 'square' },
  neon: { gain: 1.2, tempo: 0.8, pulse: 'sawtooth', lead: 'triangle' },
  forge: { gain: 1.05, tempo: 0.92, pulse: 'triangle', lead: 'sawtooth' }
};
const themeMusicTracks = {
  default: null,
  retro: 'music/retroMusic.mp3',
  neon: 'music/neonMusic.mp3',
  forge: 'music/forgeMusic.mp3'
};
const themeColors = {
  space1: '#1a2a4f',
  space2: '#070b16',
  space3: '#020308',
  star: '200, 220, 255'
};
const themePalette = {
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
const showMeteorHitboxes = false;
const showShieldHitboxes = false; // Set to true to show shield hitboxes in normal gameplay
let shootSfx = null;
let hitSfx = null;
let shootSfxBuffer = null;
let hitSfxBuffer = null;
let audioBuffersLoaded = false;

// Cargar buffers de audio para reducir latencia en móviles
async function loadAudioBuffers() {
  if (!audioCtx || audioBuffersLoaded) return;
  
  try {
    // Cargar destroy.wav
    const destroyResponse = await fetch('sound/destroy.wav');
    const destroyArrayBuffer = await destroyResponse.arrayBuffer();
    shootSfxBuffer = await audioCtx.decodeAudioData(destroyArrayBuffer);
    
    // Cargar hit.wav
    const hitResponse = await fetch('sound/hit.wav');
    const hitArrayBuffer = await hitResponse.arrayBuffer();
    hitSfxBuffer = await audioCtx.decodeAudioData(hitArrayBuffer);
    
    audioBuffersLoaded = true;
  } catch (err) {
    // Si falla, usar el método HTML Audio como fallback
    console.warn('Failed to load audio buffers, using HTML Audio fallback:', err);
  }
}

function playShootSfx() {
  // En móviles, usar AudioContext con buffers para menor latencia
  if (audioCtx && audioBuffersLoaded && shootSfxBuffer) {
    // Asegurar que el contexto esté activo
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        // Reproducir después de resumir
        const source = audioCtx.createBufferSource();
        const gain = audioCtx.createGain();
        source.buffer = shootSfxBuffer;
        // Compensar por masterGain para que el volumen sea equivalente al HTML Audio
        // HTML Audio: volume = baseShootVolume * sfxVolume
        // AudioBuffer: necesita dividir por masterGain para obtener el mismo volumen final
        const masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
        gain.gain.value = (baseShootVolume * sfxVolume) / Math.max(0.001, masterGainValue);
        source.connect(gain);
        gain.connect(masterGain);
        source.start(0);
      }).catch(() => {});
      return;
    }
    // Si ya está activo, reproducir inmediatamente
    const source = audioCtx.createBufferSource();
    const gain = audioCtx.createGain();
    source.buffer = shootSfxBuffer;
    // Compensar por masterGain para que el volumen sea equivalente al HTML Audio
    const masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
    gain.gain.value = (baseShootVolume * sfxVolume) / Math.max(0.001, masterGainValue);
    source.connect(gain);
    gain.connect(masterGain);
    source.start(0);
    return;
  }
  
  // Fallback a HTML Audio si los buffers no están cargados
  if (!shootSfx) {
    shootSfx = new Audio('sound/destroy.wav');
    shootSfx.preload = 'auto';
    shootSfx.volume = baseShootVolume * sfxVolume;
    // En móviles, intentar cargar inmediatamente
    shootSfx.load();
  }
  shootSfx.volume = baseShootVolume * sfxVolume;
  // Usar cloneNode para evitar latencia de resetear currentTime
  const audioClone = shootSfx.cloneNode();
  audioClone.volume = baseShootVolume * sfxVolume;
  void audioClone.play().catch(() => {});
}

function playHitSfx() {
  // En móviles, usar AudioContext con buffers para menor latencia
  if (audioCtx && audioBuffersLoaded && hitSfxBuffer) {
    // Asegurar que el contexto esté activo
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        // Reproducir después de resumir
        const source = audioCtx.createBufferSource();
        const gain = audioCtx.createGain();
        source.buffer = hitSfxBuffer;
        // Compensar por masterGain para que el volumen sea equivalente al HTML Audio
        const masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
        gain.gain.value = (baseHitVolume * sfxVolume) / Math.max(0.001, masterGainValue);
        source.connect(gain);
        gain.connect(masterGain);
        source.start(0);
      }).catch(() => {});
      return;
    }
    // Si ya está activo, reproducir inmediatamente
    const source = audioCtx.createBufferSource();
    const gain = audioCtx.createGain();
    source.buffer = hitSfxBuffer;
    // Compensar por masterGain para que el volumen sea equivalente al HTML Audio
    const masterGainValue = masterGain ? masterGain.gain.value : baseSfxGain * sfxVolume;
    gain.gain.value = (baseHitVolume * sfxVolume) / Math.max(0.001, masterGainValue);
    source.connect(gain);
    gain.connect(masterGain);
    source.start(0);
    return;
  }
  
  // Fallback a HTML Audio si los buffers no están cargados
  if (!hitSfx) {
    hitSfx = new Audio('sound/hit.wav');
    hitSfx.preload = 'auto';
    hitSfx.volume = baseHitVolume * sfxVolume;
    // En móviles, intentar cargar inmediatamente
    hitSfx.load();
  }
  hitSfx.volume = baseHitVolume * sfxVolume;
  // Usar cloneNode para evitar latencia de resetear currentTime
  const audioClone = hitSfx.cloneNode();
  audioClone.volume = baseHitVolume * sfxVolume;
  void audioClone.play().catch(() => {});
}
const meteorSprite = new Image();
const meteorSpriteData = {
  ready: false,
  cols: 3,
  rows: 3,
  frameW: 0,
  frameH: 0,
  frameCount: 3,
  frameTime: 140,
  rowByType: {
    normal: 0,
    tank: 1,
    fast: 2,
    twin: 1
  },
  hitBounds: null,
  manualHitbox: {
    enabled: true,
    widthScale: 1.1,
    heightScale: 0.7,
    centerX: 0.6,
    centerY: 0.52,
    rotation: -(25 * Math.PI) / 180,
    offsetForward: -0.1,
    offsetRight: -0.1
  },
  manualShieldHitbox: {
    enabled: true,
    widthScale: 0.95,
    heightScale: 0.45,
    centerX: 0.6,
    centerY: 0.5,
    rotation: -(25 * Math.PI) / 180,
    offsetForward: -0.08,
    offsetRight: -0.08
  },
  scale: 1.4,
  scaleByType: {
    twin: 0.85
  },
  rotationOffset: Math.PI + Math.PI / 8 + (5 * Math.PI) / 180,
  anchorX: 0.82,
  anchorY: 0.5,
  rockHeightRatio: 0.8
};

meteorSprite.onload = () => {
  meteorSpriteData.ready = true;
  meteorSpriteData.frameW = meteorSprite.width / meteorSpriteData.cols;
  meteorSpriteData.frameH = meteorSprite.height / meteorSpriteData.rows;
  const canvas = document.createElement('canvas');
  const spriteCtx = canvas.getContext('2d');
  canvas.width = meteorSprite.width;
  canvas.height = meteorSprite.height;
  spriteCtx.drawImage(meteorSprite, 0, 0);
  
  let imageData;
  try {
    imageData = spriteCtx.getImageData(0, 0, canvas.width, canvas.height);
  } catch (e) {
    // Si falla por CORS, usar solo hitboxes manuales en lugar de calcular desde la imagen
    console.warn('Cannot read image data due to CORS, using manual hitboxes only');
    meteorSpriteData.hitBounds = null;
    return;
  }
  
  const { data, width, height } = imageData;
  const hitBounds = Array.from({ length: meteorSpriteData.rows }, () =>
    Array.from({ length: meteorSpriteData.cols }, () => null)
  );

  for (let row = 0; row < meteorSpriteData.rows; row += 1) {
    for (let col = 0; col < meteorSpriteData.cols; col += 1) {
      const x0 = Math.floor(col * meteorSpriteData.frameW);
      const y0 = Math.floor(row * meteorSpriteData.frameH);
      const x1 = col === meteorSpriteData.cols - 1 ? width : Math.floor((col + 1) * meteorSpriteData.frameW);
      const y1 = row === meteorSpriteData.rows - 1 ? height : Math.floor((row + 1) * meteorSpriteData.frameH);
      const frameW = x1 - x0;
      const frameH = y1 - y0;
      let minX = x1;
      let maxX = x0 - 1;
      let minY = y1;
      let maxY = y0 - 1;
      const colCounts = new Array(frameW).fill(0);
      for (let y = y0; y < y1; y += 1) {
        for (let x = x0; x < x1; x += 1) {
          const alpha = data[(y * width + x) * 4 + 3];
          if (alpha > 10) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            colCounts[x - x0] += 1;
          }
        }
      }
      if (maxX < minX || maxY < minY) {
        minX = x0;
        minY = y0;
        maxX = x1 - 1;
        maxY = y1 - 1;
      }
      const maxCount = colCounts.reduce((acc, value) => Math.max(acc, value), 0);
      const threshold = Math.max(2, Math.floor(maxCount * 0.55));
      let minCol = -1;
      let maxCol = -1;
      for (let i = 0; i < colCounts.length; i += 1) {
        if (colCounts[i] >= threshold) {
          if (minCol === -1) minCol = i;
          maxCol = i;
        }
      }
      let hitMinX = minX;
      let hitMaxX = maxX;
      let hitMinY = minY;
      let hitMaxY = maxY;
      if (minCol !== -1) {
        hitMinX = x0 + minCol;
        hitMaxX = x0 + maxCol;
        hitMinY = y1;
        hitMaxY = y0 - 1;
        for (let y = y0; y < y1; y += 1) {
          for (let x = hitMinX; x <= hitMaxX; x += 1) {
            const alpha = data[(y * width + x) * 4 + 3];
            if (alpha > 10) {
              if (y < hitMinY) hitMinY = y;
              if (y > hitMaxY) hitMaxY = y;
            }
          }
        }
        if (hitMaxY < hitMinY) {
          hitMinX = minX;
          hitMinY = minY;
          hitMaxX = maxX;
          hitMaxY = maxY;
        }
      }
      hitBounds[row][col] = {
        minX: hitMinX - x0,
        minY: hitMinY - y0,
        maxX: hitMaxX - x0,
        maxY: hitMaxY - y0,
        frameW,
        frameH
      };
    }
  }
  meteorSpriteData.hitBounds = hitBounds;
};
// Solo establecer crossOrigin si no estamos en file:// (para evitar errores CORS en desarrollo local)
if (window.location.protocol !== 'file:') {
  meteorSprite.crossOrigin = 'anonymous';
}
meteorSprite.src = 'img/meteorSprite.png';

function isPixelTheme() {
  return document.body.dataset.theme === 'retro';
}

function isNeonTheme() {
  return document.body.dataset.theme === 'neon';
}

function isForgeTheme() {
  return document.body.dataset.theme === 'forge';
}

function getHudFont(size) {
  if (isPixelTheme()) {
    return `${Math.max(10, Math.round(size))}px "Press Start 2P", monospace`;
  }
  if (isNeonTheme()) {
    return `${size}px "Rajdhani", sans-serif`;
  }
  if (isForgeTheme()) {
    return `${size}px "Chakra Petch", sans-serif`;
  }
  return `${size}px "Orbitron", "Russo One", sans-serif`;
}

const skillCooldownLevels = [30, 20, 10];
const skillState = {
  nova: 0,
  regen: 0,
  slow: 0,
  aegis: 0
  // godsFinger no tiene cooldown, es permanente
};

const upgradeCosts = {
  shield: [0, 18, 36, 60],
  nova: [0, 30, 60, 90],
  regen: [0, 24, 48, 72],
  slow: [0, 20, 40, 70],
  aegis: [0, 28, 56, 84],
  godsFinger: [0, 1000] // Solo un nivel, mejora permanente
};

let shieldUpgrades = 0;
let novaLevel = 0;
let regenLevel = 0;
let slowLevel = 0;
let aegisLevel = 0;
let godsFingerUnlocked = false; // Solo desbloqueado/no desbloqueado, sin niveles
let godsFingerPurchased = false; // Indica si ya se pagó por God's Finger

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
  document.body.style.setProperty('--safe-bottom', `${layout.safeBottom}px`);
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
    if (boss.entry === 'left') {
      boss.targetX = 20 * layout.scale;
      boss.targetY = layout.y - boss.height / 2;
    } else if (boss.entry === 'right') {
      boss.targetX = width - boss.width - 20 * layout.scale;
      boss.targetY = layout.y - boss.height / 2;
    } else {
      boss.targetX = layout.x - boss.width / 2;
      boss.targetY = 20 * layout.scale;
    }
  }
}

function readThemeColors() {
  const styles = getComputedStyle(document.body);
  themeColors.space1 = styles.getPropertyValue('--space-1').trim() || themeColors.space1;
  themeColors.space2 = styles.getPropertyValue('--space-2').trim() || themeColors.space2;
  themeColors.space3 = styles.getPropertyValue('--space-3').trim() || themeColors.space3;
  themeColors.star = styles.getPropertyValue('--star-color').trim() || themeColors.star;
}

function normalizeThemeKey(theme) {
  if (theme === 'pixel') return 'retro';
  return theme || 'default';
}

function getThemeKey() {
  return normalizeThemeKey(document.body.dataset.theme);
}

function getThemeMelody() {
  const theme = getThemeKey();
  if (theme === 'retro') {
    return [660, 550, 440, 494, 523, 440, 392, 330, 392, 440, 494, 523, 588, 523, 494, 440];
  }
  if (theme === 'neon') {
    return [392, 440, 523, 659, 784, 659, 523, 440];
  }
  if (theme === 'forge') {
    return [196, 220, 262, 294, 330, 294, 262, 220, 196, 220, 262, 294];
  }
  return [220, 262, 330, 392, 440, 494, 440, 392, 330, 262, 330, 392];
}

function getThemeLeadLine() {
  const theme = getThemeKey();
  if (theme === 'retro') {
    return [880, 660, 740, 660, 880, 990, 740, 660, 880, 740, 660, 740, 990, 880, 740, 660];
  }
  if (theme === 'neon') {
    return [659, 784, 988, 1175, 988, 784, 659, 523];
  }
  if (theme === 'forge') {
    return [392, 440, 523, 659, 523, 440, 392, 330, 392, 440];
  }
  return [440, 523, 659, 784, 659, 523, 440, 392];
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function updateVolumeLabel(element, value) {
  if (element) {
    element.textContent = `${Math.round(value * 100)}%`;
  }
}

function canPreviewVolume(now, lastTime, interval = 120) {
  return now - lastTime >= interval;
}

function previewMusicVolume() {
  if (!audioCtx || !gameGain) return;
  const nowMs = performance.now();
  if (!canPreviewVolume(nowMs, lastMusicPreview)) return;
  lastMusicPreview = nowMs;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(480, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  osc.connect(gain);
  gain.connect(gameGain);
  osc.start(now);
  osc.stop(now + 0.18);
}

function previewSfxVolume() {
  if (!audioCtx) return;
  const nowMs = performance.now();
  if (!canPreviewVolume(nowMs, lastSfxPreview)) return;
  lastSfxPreview = nowMs;
  playSfx('tick');
}

function updateMusicGain(theme = getThemeKey()) {
  const previousInterval = melodyIntervalMs;
  const config = themeMusic[theme] || themeMusic.default;
  state.musicGain = baseMusicGain * config.gain * musicVolume;
  melodyIntervalMs = baseMelodyIntervalMs * config.tempo * musicSlowFactor;
  if (bgMusic) {
    bgMusic.volume = Math.min(1, state.musicGain);
  }
  if (gameGain) {
    gameGain.gain.value = state.musicGain;
  }
  if (melodyTimer && Math.abs(melodyIntervalMs - previousInterval) > 0.5) {
    restartProceduralMusic();
  }
}

function getThemeMusicSrc(theme = getThemeKey()) {
  return themeMusicTracks[theme] || themeMusicTracks.default;
}

function ensureThemeMusic(theme = getThemeKey()) {
  const nextSrc = getThemeMusicSrc(theme);
  if (!nextSrc) {
    if (bgMusic) {
      bgMusic.pause();
    }
    bgMusicTrack = null;
    return;
  }
  if (!bgMusic) {
    bgMusic = new Audio(nextSrc);
    bgMusic.loop = true;
    bgMusic.preload = 'auto';
    bgMusicTrack = nextSrc;
  }
  if (bgMusicTrack === nextSrc) {
    return;
  }
  const wasPlaying = !bgMusic.paused;
  bgMusic.src = nextSrc;
  bgMusicTrack = nextSrc;
  bgMusic.load();
  bgMusic.playbackRate = musicSlowFactor;
  bgMusic.volume = Math.min(1, state.musicGain);
  if (wasPlaying) {
    void bgMusic.play().catch(() => {});
  }
}

function isProceduralTheme(theme = getThemeKey()) {
  return theme === 'default';
}

function playProceduralTone(frequency, type, gainValue, duration) {
  if (!audioCtx || !gameGain) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(gameGain);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function startProceduralMusic() {
  if (!audioCtx || !gameGain) return;
  if (melodyTimer) return;
  const theme = getThemeKey();
  const config = themeMusic[theme] || themeMusic.default;
  const melody = getThemeMelody();
  const lead = getThemeLeadLine();
  melodyTimer = setInterval(() => {
    const melodyFreq = melody[melodyStep % melody.length];
    playProceduralTone(melodyFreq, config.pulse, 0.22, 0.16);
    if (melodyStep % 2 === 0) {
      const leadFreq = lead[Math.floor(melodyStep / 2) % lead.length];
      playProceduralTone(leadFreq, config.lead, 0.18, 0.28);
    }
    melodyStep += 1;
  }, melodyIntervalMs);
}

function stopProceduralMusic() {
  restartMelodyTimer();
  melodyStep = 0;
}

function restartProceduralMusic() {
  if (!melodyTimer) return;
  stopProceduralMusic();
  startProceduralMusic();
}

function applySfxVolume() {
  if (masterGain) {
    masterGain.gain.value = baseSfxGain * sfxVolume;
  }
  if (shootSfx) {
    shootSfx.volume = baseShootVolume * sfxVolume;
  }
  if (hitSfx) {
    hitSfx.volume = baseHitVolume * sfxVolume;
  }
}

function setMusicVolume(value) {
  musicVolume = clamp01(value);
  localStorage.setItem(audioSettingsKey.music, String(musicVolume));
  updateMusicGain();
  updateVolumeLabel(musicVolumeValue, musicVolume);
}

function setSfxVolume(value) {
  sfxVolume = clamp01(value);
  localStorage.setItem(audioSettingsKey.sfx, String(sfxVolume));
  applySfxVolume();
  updateVolumeLabel(sfxVolumeValue, sfxVolume);
}

function toggleMusicMute() {
  if (musicVolume > 0) {
    // Mute: save current volume and set to 0
    previousMusicVolume = musicVolume;
    setMusicVolume(0);
  } else {
    // Unmute: restore previous volume
    setMusicVolume(previousMusicVolume);
  }
}

function toggleSfxMute() {
  if (sfxVolume > 0) {
    // Mute: save current volume and set to 0
    previousSfxVolume = sfxVolume;
    setSfxVolume(0);
  } else {
    // Unmute: restore previous volume
    setSfxVolume(previousSfxVolume);
  }
}

function loadAudioSettings() {
  const storedMusicRaw = localStorage.getItem(audioSettingsKey.music);
  if (storedMusicRaw !== null) {
    const storedMusic = Number(storedMusicRaw);
    if (Number.isFinite(storedMusic)) {
      musicVolume = clamp01(storedMusic);
    } else {
      localStorage.setItem(audioSettingsKey.music, String(musicVolume));
    }
  } else {
    localStorage.setItem(audioSettingsKey.music, String(musicVolume));
  }
  const storedSfxRaw = localStorage.getItem(audioSettingsKey.sfx);
  if (storedSfxRaw !== null) {
    const storedSfx = Number(storedSfxRaw);
    if (Number.isFinite(storedSfx)) {
      sfxVolume = clamp01(storedSfx);
    } else {
      localStorage.setItem(audioSettingsKey.sfx, String(sfxVolume));
    }
  } else {
    localStorage.setItem(audioSettingsKey.sfx, String(sfxVolume));
  }
  if (musicVolumeSlider) {
    musicVolumeSlider.value = String(Math.round(musicVolume * 100));
  }
  if (sfxVolumeSlider) {
    sfxVolumeSlider.value = String(Math.round(sfxVolume * 100));
  }
  // Initialize previous volumes for mute toggle
  previousMusicVolume = musicVolume > 0 ? musicVolume : 1;
  previousSfxVolume = sfxVolume > 0 ? sfxVolume : 1;
  updateVolumeLabel(musicVolumeValue, musicVolume);
  updateVolumeLabel(sfxVolumeValue, sfxVolume);
  applySfxVolume();
  updateMusicGain();
  ensureThemeMusic();
}

function applyThemeAudio(theme) {
  updateMusicGain(theme);
  if (state.running && !state.paused) {
    setMusicMode('game');
    return;
  }
  if (isProceduralTheme(theme)) {
    stopProceduralMusic();
    return;
  }
  ensureThemeMusic(theme);
}

function applyTheme(theme) {
  const normalizedTheme = normalizeThemeKey(theme);
  document.body.dataset.theme = normalizedTheme;
  localStorage.setItem('theme', normalizedTheme);
  readThemeColors();
  applyThemeAudio(normalizedTheme);
  if (normalizedTheme === 'retro') {
    themePalette.shield = ['#62c6ff', '#7dff9d', '#ff6d6d'];
    themePalette.coreOuter = '#ffcf6e';
    themePalette.coreInner = '#fff2cc';
    themePalette.missileNormal = '#ff7a6a';
    themePalette.missileFast = '#74d7ff';
    themePalette.missileTank = '#7fea9a';
    themePalette.missileTwin = '#7fea9a';
    themePalette.missileStrokeNormal = 'rgba(255, 220, 190, 0.75)';
    themePalette.missileStrokeFast = 'rgba(160, 240, 255, 0.85)';
    themePalette.missileFinNormal = 'rgba(255, 170, 120, 0.95)';
    themePalette.missileFinFast = 'rgba(130, 230, 255, 0.95)';
    themePalette.missileTrailNormal = 'rgba(255, 150, 80, 0.9)';
    themePalette.missileTrailFast = 'rgba(140, 240, 255, 0.95)';
    themePalette.twinBeam = 'rgba(110, 255, 160, 0.9)';
    themePalette.screenFlash = '#7dd6ff';
    themePalette.shockwave = '120, 210, 255';
  } else if (normalizedTheme === 'neon') {
    themePalette.shield = ['#5af2ff', '#9dff5a', '#ff5ad5'];
    themePalette.coreOuter = '#ff9a4f';
    themePalette.coreInner = '#ffe3a6';
    themePalette.missileNormal = '#ff6b8a';
    themePalette.missileFast = '#66fff2';
    themePalette.missileTank = '#7dff9c';
    themePalette.missileTwin = '#7dff9c';
    themePalette.missileStrokeNormal = 'rgba(255, 200, 220, 0.8)';
    themePalette.missileStrokeFast = 'rgba(160, 255, 255, 0.9)';
    themePalette.missileFinNormal = 'rgba(255, 140, 190, 0.95)';
    themePalette.missileFinFast = 'rgba(120, 255, 250, 0.95)';
    themePalette.missileTrailNormal = 'rgba(255, 120, 140, 0.95)';
    themePalette.missileTrailFast = 'rgba(120, 255, 255, 0.95)';
    themePalette.twinBeam = 'rgba(120, 255, 180, 0.9)';
    themePalette.screenFlash = '#64f2ff';
    themePalette.shockwave = '120, 255, 255';
  } else if (normalizedTheme === 'forge') {
    themePalette.shield = ['#ffb35b', '#f0703c', '#61d4c3'];
    themePalette.coreOuter = '#ff8b3d';
    themePalette.coreInner = '#ffe2b8';
    themePalette.missileNormal = '#ff9d5c';
    themePalette.missileFast = '#65e0c6';
    themePalette.missileTank = '#f2c24f';
    themePalette.missileTwin = '#f2c24f';
    themePalette.missileStrokeNormal = 'rgba(255, 210, 160, 0.75)';
    themePalette.missileStrokeFast = 'rgba(170, 255, 235, 0.85)';
    themePalette.missileFinNormal = 'rgba(255, 170, 120, 0.95)';
    themePalette.missileFinFast = 'rgba(120, 240, 220, 0.95)';
    themePalette.missileTrailNormal = 'rgba(255, 140, 80, 0.9)';
    themePalette.missileTrailFast = 'rgba(110, 230, 210, 0.9)';
    themePalette.twinBeam = 'rgba(120, 255, 170, 0.85)';
    themePalette.screenFlash = '#ffb36b';
    themePalette.shockwave = '255, 180, 120';
  } else {
    themePalette.shield = ['#52b8ff', '#58e28f', '#ff6b6b'];
    themePalette.coreOuter = '#ffb347';
    themePalette.coreInner = '#ffe1b3';
    themePalette.missileNormal = '#ff7c57';
    themePalette.missileFast = '#6ce3ff';
    themePalette.missileTank = '#7fdc7a';
    themePalette.missileTwin = '#7fdc7a';
    themePalette.missileStrokeNormal = 'rgba(255, 220, 180, 0.7)';
    themePalette.missileStrokeFast = 'rgba(160, 240, 255, 0.8)';
    themePalette.missileFinNormal = 'rgba(255, 160, 110, 0.9)';
    themePalette.missileFinFast = 'rgba(120, 220, 255, 0.9)';
    themePalette.missileTrailNormal = 'rgba(255, 140, 60, 0.9)';
    themePalette.missileTrailFast = 'rgba(120, 220, 255, 0.9)';
    themePalette.twinBeam = 'rgba(110, 255, 150, 0.85)';
    themePalette.screenFlash = '#9cd3ff';
    themePalette.shockwave = '140, 220, 255';
  }
  styleButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.style === normalizedTheme);
  });
  if (audioCtx) {
    playSfx(`theme-${normalizedTheme}`);
  }
}

function center() {
  return { x: layout.x, y: layout.y };
}

function drawPolygonPath(x, y, radius, sides, rotation = 0) {
  ctx.beginPath();
  for (let i = 0; i < sides; i += 1) {
    const angle = rotation + (Math.PI * 2 * i) / sides;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
}

function rebuildShields() {
  const count = state.hardcoreLevel ? 0 : Math.min(maxLayers, shieldUpgrades);
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

function removeTwinGroup(id) {
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    if (missiles[i].twinId === id) {
      const m = missiles[i];
      scheduleDebugRespawn(m);
      missiles.splice(i, 1);
    }
  }
  twinGroups.delete(id);
}

function handleTwinTap(m, tapX, tapY) {
  const group = twinGroups.get(m.twinId);
  if (!group) return false;
  const payoutX = Number.isFinite(tapX) ? tapX : m.x;
  const payoutY = Number.isFinite(tapY) ? tapY : m.y;
  const floaterY = payoutY - 30;
  const now = performance.now();
  const windowMs = 40;
  if (m.twinPart === 0) {
    if (group.primeB && now - group.primeB <= windowMs) {
      removeTwinGroup(m.twinId);
      playSfx('boom');
      triggerExplosion(tapX, tapY, '#7fdc7a', 36, 0.22, 8);
      const bounty = getBounty(m.type);
      awardMoney(bounty);
      spawnCashFloater(payoutX, floaterY, bounty);
    } else {
      group.primeA = now;
      playSfx('hitsoft');
      triggerExplosion(tapX, tapY, '#7fdc7a', 18, 0.14, 4);
    }
    return true;
  }
  if (group.primeA && now - group.primeA <= windowMs) {
    removeTwinGroup(m.twinId);
    playSfx('boom');
    triggerExplosion(tapX, tapY, '#7fdc7a', 36, 0.22, 8);
    const bounty = getBounty(m.type);
    awardMoney(bounty);
    spawnCashFloater(payoutX, floaterY, bounty);
  } else {
    group.primeB = now;
    playSfx('hitsoft');
    triggerExplosion(tapX, tapY, '#7fdc7a', 18, 0.14, 4);
  }
  return true;
}

function spawnTwinPair(x, y) {
  const target = center();
  const angle = Math.atan2(target.y - y, target.x - x);
  const distance = Math.hypot(target.x - x, target.y - y);
  const travelTime = 3.6 + Math.random() * 1.2;
  const speed = distance / travelTime;
  // Minimum offset of 40px scaled for comfortable two-finger tapping, with random variation up to 20px more
  const offset = (40 + Math.random() * 20) * layout.scale;
  const perpX = -Math.sin(angle);
  const perpY = Math.cos(angle);
  // Use same radius as normal meteors
  const r = 10 + Math.random() * 4;
  const id = twinCounter++;
  const base = {
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r,
    type: 'twin',
    twinId: id
  };
  const m1 = { x: x + perpX * offset, y: y + perpY * offset, twinPart: 0, seed: Math.random(), ...base };
  const m2 = { x: x - perpX * offset, y: y - perpY * offset, twinPart: 1, seed: Math.random(), ...base };
  missiles.push(m1, m2);
  twinGroups.set(id, { a: m1, b: m2, primeA: 0, primeB: 0 });
}

function buildBossParts(launchers) {
  const parts = [];
  if (!launchers) return parts;
  launchers.forEach((launcher, index) => {
    parts.push({
      id: launcher.id || `launcher-${index}`,
      x: launcher.x,
      y: launcher.y,
      w: launcher.w,
      h: launcher.h,
      hp: launcher.hp || launcher.baseHp || 8,
      type: launcher.type || 'standard',
      flash: 0,
      cooldown: 0,
      rate: launcher.rate || 3
    });
  });
  return parts;
}

function initBoss(options = {}) {
  const { x, y } = center();
  const scale = layout.scale;
  const baseSize = Math.min(width, height) * 0.42;
  const entry = options.entry || 'top';
  const bossHp = options.bossHp || 20;
  const launchers = options.launchers || [
    { id: 'front-left', x: 0.01, y: 0.02, w: 0.31, h: 0.56, hp: 10, type: 'standard', rate: 2.4 },
    { id: 'front-right', x: 0.68, y: 0.02, w: 0.31, h: 0.56, hp: 10, type: 'standard', rate: 2.4 }
  ];
  boss.active = true;
  boss.entry = entry;
  boss.deathTimer = 0;
  boss.bodyFlash = 0;
  boss.driftSpeed = options.driftSpeed || 40;
  boss.driftDir = 1;
  boss.settled = false;
  boss.width = baseSize;
  boss.height = baseSize * 0.72;
  if (entry === 'left') {
    boss.x = -boss.width - 40;
    boss.y = layout.y - boss.height / 2;
    boss.targetX = 20 * scale;
    boss.targetY = boss.y;
  } else if (entry === 'right') {
    boss.x = width + 40;
    boss.y = layout.y - boss.height / 2;
    boss.targetX = width - boss.width - 20 * scale;
    boss.targetY = boss.y;
  } else {
    boss.x = x - boss.width / 2;
    boss.y = -boss.height - 40;
    boss.targetX = boss.x;
    boss.targetY = 20 * scale;
  }
  boss.parts = buildBossParts(launchers);
  boss.hp = bossHp;
  boss.maxHp = bossHp;
  updateBossBar();
}

function initAudio() {
  if (audioCtx) {
    // Si el contexto existe pero está suspendido, resumirlo
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {
        // Si falla, continuar de todas formas
      });
    }
    // Cargar buffers de audio si aún no están cargados
    if (!audioBuffersLoaded) {
      loadAudioBuffers();
    }
    return;
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = baseSfxGain * sfxVolume;
  masterGain.connect(audioCtx.destination);
  if (!gameGain) {
    gameGain = audioCtx.createGain();
    gameGain.gain.value = state.musicGain;
    gameGain.connect(audioCtx.destination);
  }
  ensureThemeMusic();
  applySfxVolume();
  
  // En móviles, el AudioContext puede iniciarse suspendido
  // Intentar resumirlo inmediatamente si es posible
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {
      // Si falla (por ejemplo, por política de autoplay), se resumirá en la primera interacción
    });
  }
  
  // Cargar buffers de audio para reducir latencia en móviles
  loadAudioBuffers();
}

function setMusicMode(mode) {
  if (mode === 'game') {
    const theme = getThemeKey();
    if (isProceduralTheme(theme)) {
      stopMusic();
      startProceduralMusic();
    } else {
      stopProceduralMusic();
      ensureThemeMusic(theme);
      if (!bgMusic) return;
      bgMusic.volume = Math.min(1, state.musicGain);
      bgMusic.playbackRate = musicSlowFactor;
      void bgMusic.play().catch(() => {});
    }
  } else {
    stopProceduralMusic();
    if (bgMusic) {
      bgMusic.pause();
    }
  }
}

function restartMelodyTimer() {
  if (melodyTimer) {
    clearInterval(melodyTimer);
    melodyTimer = null;
  }
}

function setMusicIntensity(level) {
  const config = levels.find(item => item.level === level);
  if (!config || !config.music) return;
  baseMusicGain = config.music.gain;
  baseMelodyIntervalMs = config.music.tempo;
  updateMusicGain();
}

function setMusicSlow(isSlow) {
  musicSlowFactor = isSlow ? 0.5 : 1;
  if (bgMusic) {
    bgMusic.playbackRate = musicSlowFactor;
  }
  updateMusicGain();
}

function stopMusic() {
  stopProceduralMusic();
  if (!bgMusic) return;
  bgMusic.pause();
}

function resetMusic() {
  stopProceduralMusic();
  if (!bgMusic) return;
  bgMusic.pause();
  bgMusic.currentTime = 0; // Reiniciar desde el principio
}

function playSfx(type) {
  if (type === 'boom') {
    playShootSfx();
    return;
  }

  if (type === 'hitsoft') {
    playHitSfx();
    return;
  }

  if (!audioCtx) return;
  
  // En móviles, el AudioContext puede estar suspendido y necesita ser resumido
  // Esto reduce significativamente la latencia de audio
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {
      // Si falla, continuar de todas formas
    });
  }
  
  const now = audioCtx.currentTime;

  if (type === 'theme-default') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.25);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.25, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.3);
    return;
  }

  if (type === 'theme-retro') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.2);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.3, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.24);
    return;
  }

  if (type === 'theme-neon') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(740, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.35);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.35, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.36);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.38);
    return;
  }

  if (type === 'theme-forge') {
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc1.type = 'triangle';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(420, now);
    osc2.frequency.setValueAtTime(210, now);
    osc1.frequency.exponentialRampToValueAtTime(170, now + 0.32);
    osc2.frequency.exponentialRampToValueAtTime(90, now + 0.32);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.32, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(masterGain);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.36);
    osc2.stop(now + 0.36);
    return;
  }

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
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.22);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.45, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.3);
    return;
  }

  if (type === 'nova') {
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc1.type = 'sawtooth';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(260, now);
    osc2.frequency.setValueAtTime(160, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.7);
    osc2.frequency.exponentialRampToValueAtTime(30, now + 0.7);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.9, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.75);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(masterGain);

    const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.7, audioCtx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.7);
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.5, now + 0.03);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.75);
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    noise.start(now);
    osc1.stop(now + 0.75);
    osc2.stop(now + 0.75);
    noise.stop(now + 0.75);
    return;
  }

  if (type === 'godsFinger') {
    // Sonido más poderoso para God's Finger: múltiples osciladores, más volumen, frecuencias más bajas
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const osc3 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Oscilador principal: sawtooth con frecuencia más baja para más impacto
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(200, now);
    osc1.frequency.exponentialRampToValueAtTime(30, now + 0.8);
    
    // Oscilador medio: square para textura más rica
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(100, now);
    osc2.frequency.exponentialRampToValueAtTime(20, now + 0.8);
    
    // Oscilador bajo: triangle para profundidad
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(80, now);
    osc3.frequency.exponentialRampToValueAtTime(15, now + 0.8);
    
    // Ganancia más alta para más poder (más que nova)
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(1.0, now + 0.02); // Más volumen que nova (0.9)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    
    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(gain);
    gain.connect(masterGain);
    
    // Añadir ruido para más impacto
    const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.8, audioCtx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1500, now);
    filter.frequency.exponentialRampToValueAtTime(150, now + 0.8);
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.6, now + 0.03); // Más ruido que nova
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);
    
    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    noise.start(now);
    osc1.stop(now + 0.82);
    osc2.stop(now + 0.82);
    osc3.stop(now + 0.82);
    noise.stop(now + 0.82);
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

  if (type === 'regen') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(360, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.4);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.5, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.5);

    const shimmer = audioCtx.createOscillator();
    const shimmerGain = audioCtx.createGain();
    shimmer.type = 'triangle';
    shimmer.frequency.setValueAtTime(900, now);
    shimmer.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
    shimmerGain.gain.setValueAtTime(0.0001, now);
    shimmerGain.gain.exponentialRampToValueAtTime(0.2, now + 0.05);
    shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    shimmer.connect(shimmerGain);
    shimmerGain.connect(masterGain);
    shimmer.start(now);
    shimmer.stop(now + 0.4);
    return;
  }

  if (type === 'metal') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.2);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.6, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.26);

    const clang = audioCtx.createOscillator();
    const clangGain = audioCtx.createGain();
    clang.type = 'triangle';
    clang.frequency.setValueAtTime(540, now);
    clang.frequency.exponentialRampToValueAtTime(260, now + 0.18);
    clangGain.gain.setValueAtTime(0.0001, now);
    clangGain.gain.exponentialRampToValueAtTime(0.4, now + 0.02);
    clangGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    clang.connect(clangGain);
    clangGain.connect(masterGain);
    clang.start(now);
    clang.stop(now + 0.24);
    return;
  }

  if (type === 'slow') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.35);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.35, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    osc.connect(gain);
    gain.connect(masterGain);
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
  } else if (type === 'core') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
    const fall = audioCtx.createOscillator();
    const fallGain = audioCtx.createGain();
    fall.type = 'triangle';
    fall.frequency.setValueAtTime(220, now);
    fall.frequency.exponentialRampToValueAtTime(50, now + 1.1);
    fallGain.gain.setValueAtTime(0.0001, now);
    fallGain.gain.exponentialRampToValueAtTime(0.4, now + 0.04);
    fallGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);
    fall.connect(fallGain);
    fallGain.connect(masterGain);
    fall.start(now);
    fall.stop(now + 1.1);
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
  state.bossSpawnTimer = 0;
  state.lastTime = 0;
  state.animationTime = 0;
  state.wave = 1;
  state.betweenLevels = false;
  state.finalLevel = false;
  state.hardcoreLevel = false;
  state.survivalLevel = false;
  state.bossLevel = false;
  state.bossPhase = false;
  state.paused = false;
  state.debugMode = false;
  state.bossTestMode = false;
  if (debugPanel) {
    debugPanel.classList.add('hidden');
  }
  state.slowTimer = 0;
  state.aegisTimer = 0;
  state.survivalTime = 0;
  core.alive = true;
  Object.keys(skillState).forEach(skill => {
    skillState[skill] = 0;
  });
  updateCooldowns(0);
  if (victoryTimer) {
    clearTimeout(victoryTimer);
    victoryTimer = null;
  }
  victoryEl.classList.add('hidden');
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  isInCountdown = false;
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
  twinGroups.clear();
  confetti.length = 0;
  cashFloaters.length = 0;
  debugMeteorTemplates.length = 0;
  debugRespawnQueue.length = 0;
  boss.active = false;
  boss.hp = 0;
  boss.bodyFlash = 0;
  boss.deathTimer = 0;
  boss.settled = false;
  boss.driftDir = 1;
  boss.parts = [];
  updateBossBar();
  if (survivalTimeEl) {
    survivalTimeEl.classList.add('hidden');
  }
  adminToast.classList.add('hidden');
  moneyToast.classList.add('hidden');
  if (levelLockedToast) levelLockedToast.classList.add('hidden');
  gameoverEl.classList.add('hidden');
  gameoverMenu.classList.add('hidden');
  gameoverRetry.classList.add('hidden');
  hideResultScreen();
  waveMessageEl.classList.add('hidden');
  pauseOverlay.classList.add('hidden');
  pauseButton.disabled = false;
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
  if (level === 4) {
    const base = 20 + (wave - 1) * 6;
    return base;
  }
  const base = 7 + (level - 1) * 4;
  return base + (wave - 1) * 2;
}

function getWaveLabel() {
  return t('wave', state.wave);
}

function getSurvivalDifficulty(time) {
  // Escala gradualmente y uniformemente de 0 a 1.5 en 60 segundos
  // Usa una curva suave para que el aumento sea más constante
  const maxTime = 60;
  const maxDifficulty = 1.5;
  // Escala lineal más gradual: 0.025 por segundo (1.5 / 60)
  return Math.min(maxDifficulty, (time / maxTime) * maxDifficulty);
}

function getSurvivalSpawnInterval(time) {
  const factor = getSurvivalDifficulty(time);
  // Intervalo mucho más agresivo: de 1.4s a 0.15s (casi instantáneo)
  // A los 60s debería estar spawneando muy rápido
  return Math.max(0.15, 1.4 - factor * 1.25);
}

function applyLevelConfig(level) {
  const config = levels.find(item => item.level === level) || levels[0];
  state.level = config.level;
  state.finalLevel = false;
  state.hardcoreLevel = state.level === 4;
  state.survivalLevel = state.level === 5;
  state.bossLevel = state.level <= 3;
  state.bossPhase = false;
  state.wavesTotal = state.bossLevel ? 3 : state.hardcoreLevel ? 5 : 3;
  state.wave = 1;
  state.spawnInterval = config.spawnInterval;
  state.survivalTime = 0;
  setMusicIntensity(state.level);
  updateHud();
}

function startWave(showMessage = true) {
  state.waveSpawned = 0;
  state.waveTarget = getWaveTarget(state.level, state.wave);
  state.bossPhase = false;
  state.running = true;
  state.betweenLevels = false;
  updateHud();
  updateUpgradeVisibility();
  if (showMessage) {
    showWaveMessage(getWaveLabel(), 1.1);
  }
}

function getBossConfig(level) {
  if (level === 1) {
    return {
      entry: 'left',
      bossHp: 20,
      driftSpeed: 30,
      launchers: [
        { id: 'front-left', x: 0.01, y: 0.02, w: 0.31, h: 0.56, hp: 6, type: 'standard', rate: 3.4 },
        { id: 'front-right', x: 0.68, y: 0.02, w: 0.31, h: 0.56, hp: 6, type: 'standard', rate: 3.4 }
      ]
    };
  }
  if (level === 2) {
    return {
      entry: 'right',
      bossHp: 30,
      driftSpeed: 50,
      launchers: [
        { id: 'front-left', x: 0.01, y: 0.02, w: 0.31, h: 0.56, hp: 8, type: 'standard', rate: 2.9 },
        { id: 'front-right', x: 0.68, y: 0.02, w: 0.31, h: 0.56, hp: 8, type: 'standard', rate: 2.9 }
      ]
    };
  }
  return {
    entry: 'top',
    bossHp: 40,
    driftSpeed: 70,
    launchers: [
      { id: 'front-left', x: 0.01, y: 0.02, w: 0.31, h: 0.56, hp: 10, type: 'standard', rate: 2.2 },
      { id: 'front-right', x: 0.68, y: 0.02, w: 0.31, h: 0.56, hp: 10, type: 'standard', rate: 2.2 }
    ]
  };
}

function startBossLevel(showMessage = true) {
  state.running = true;
  state.betweenLevels = false;
  state.bossPhase = true;
  state.bossSpawnTimer = 0;
  initBoss(getBossConfig(state.level));
  updateHud();
  updateUpgradeVisibility();
  if (showMessage) {
    showWaveMessage(t('bossIncoming'), 1.6);
  }
}

function startBossTest(entry) {
  resetGame();
  state.bossTestMode = true;
  state.bossTestEntry = entry || 'top';
  state.running = true;
  state.bossPhase = true;
  state.bossSpawnTimer = 0;
  core.alive = true;
  // Hide menus
  const startScreen = document.getElementById('start-screen');
  if (startScreen) startScreen.classList.add('hidden');
  countdownEl.classList.add('hidden');
  // Init boss with given entry
  initBoss({
    entry: state.bossTestEntry,
    bossHp: 25,
    driftSpeed: 50,
    launchers: [
      { id: 'front-left', x: 0.01, y: 0.02, w: 0.31, h: 0.56, hp: 8, type: 'standard', rate: 3.0 },
      { id: 'front-right', x: 0.68, y: 0.02, w: 0.31, h: 0.56, hp: 8, type: 'standard', rate: 3.0 }
    ]
  });
  updateHud();
  updateUpgradeVisibility();
  showWaveMessage('BOSS TEST (' + entry.toUpperCase() + ') - INVINCIBLE', 2.0);
}

// Keyboard shortcut: B key cycles boss test (top → left → right → off)
// Only works from the menu screen
window._bossTestCycle = 0;
const _bossTestEntries = ['top', 'left', 'right'];

function startSurvival() {
  state.running = true;
  state.betweenLevels = false;
  state.survivalTime = 0;
  state.spawnTimer = 0;
  if (survivalTimeEl) {
    survivalTimeEl.classList.remove('hidden');
    survivalTimeEl.textContent = t('time', '0.0');
  }
  updateHud();
  updateUpgradeVisibility();
}

function completeLevel() {
  state.running = false;
  // In boss test mode, just respawn the boss with next entry direction
  if (state.bossTestMode) {
    showWaveMessage('BOSS DEFEATED! Press B for next entry', 2.5);
    return;
  }
  if (state.level >= levels.length) {
    stopMusic();
    playSfx('victory');
    triggerConfetti();
    if (hardcoreUnlocked) {
      hardcoreUnlocked.classList.toggle('hidden', state.level >= 5);
    }
    victoryEl.classList.remove('hidden');
    return;
  }

  showWaveMessage(t('levelComplete'), 2.2);
  playSfx('success');
  if (state.level >= state.unlockedLevel && state.level < levels.length) {
    state.unlockedLevel = state.level + 1;
    localStorage.setItem('unlockedLevel', String(state.unlockedLevel));
    state.selectedLevel = state.unlockedLevel;
    updateLevelButtons();
  }
  stopMusic();
  setTimeout(() => {
    showResultScreen('victory', t('levelComplete'));
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
  } else if (state.bossLevel) {
    showWaveMessage(t('bossIncoming'), 1.6);
    waveTimeout = setTimeout(() => {
      startBossLevel(false);
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
  // Boss launchers use 'standard' which must map to 'normal' for collision/rendering
  if (type === 'standard') type = 'normal';
  if (!forcedType) {
    const roll = Math.random();
    if (state.survivalLevel) {
      const t = state.survivalTime;
      // Escala mucho más rápido: más meteoritos difíciles aparecen antes
      if (t < 5) {
        type = 'normal';
      } else if (t < 12) {
        type = roll > 0.75 ? 'fast' : 'normal';
      } else if (t < 25) {
        type = roll > 0.7 ? 'tank' : roll > 0.4 ? 'fast' : 'normal';
      } else if (t < 40) {
        type = roll > 0.6 ? 'tank' : roll > 0.25 ? 'fast' : 'normal';
      } else {
        // Después de 40s, mayoría son tanks y fast, muy pocos normales
        type = roll > 0.5 ? 'tank' : roll > 0.15 ? 'fast' : 'normal';
      }
    } else if (state.level === 1) {
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
  if (state.survivalLevel) {
    const factor = getSurvivalDifficulty(state.survivalTime);
    // Los meteoritos se mueven mucho más rápido: hasta 60% más rápido
    travelTime *= 1 - factor * 0.6;
  }
  radius *= 1.5;
  const speed = distance / travelTime;
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: radius,
    type,
    hp,
    seed: Math.random()
  };
}

function getEdgeSpawnPoint(edge) {
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
  return { x, y };
}

function spawnMissile() {
  const edge = Math.floor(Math.random() * 4);
  const { x, y } = getEdgeSpawnPoint(edge);
  if (!state.bossLevel && state.level > 1 && Math.random() > 0.92) {
    spawnTwinPair(x, y);
    return;
  }
  missiles.push(buildMissile(x, y));
}

function spawnMissileFrom(x, y, type) {
  missiles.push(buildMissile(x, y, type));
}

function spawnDebugMeteors() {
  missiles.length = 0;
  twinGroups.clear();
  debugMeteorTemplates.length = 0;
  debugRespawnQueue.length = 0;
  const centerX = width / 2;
  const centerY = height / 2;
  const distance = Math.min(width, height) * 0.35;
  
  // 8 directions: N, NE, E, SE, S, SW, W, NW
  const directions = [
    { angle: -Math.PI / 2, type: 'normal' },    // North
    { angle: -Math.PI / 4, type: 'fast' },      // Northeast
    { angle: 0, type: 'tank' },                 // East
    { angle: Math.PI / 4, type: 'normal' },    // Southeast
    { angle: Math.PI / 2, type: 'fast' },       // South
    { angle: 3 * Math.PI / 4, type: 'tank' },   // Southwest
    { angle: Math.PI, type: 'normal' },         // West
    { angle: -3 * Math.PI / 4, type: 'fast' }   // Northwest
  ];
  
  directions.forEach((dir, index) => {
    const x = centerX + Math.cos(dir.angle) * distance;
    const y = centerY + Math.sin(dir.angle) * distance;
    
    let radius = 10 + Math.random() * 4;
    let hp = 1;
    
    if (dir.type === 'fast') {
      radius = 8 + Math.random() * 3;
    } else if (dir.type === 'tank') {
      radius = 18 + Math.random() * 4;
      hp = 5; // Show a clear HP number
    }
    
    radius *= 1.5;
    
    // Set velocity direction so meteor points in the correct direction
    // (even though it won't move, this determines the rotation)
    const speed = 100; // Just for direction, not actual movement
    const vx = Math.cos(dir.angle) * speed;
    const vy = Math.sin(dir.angle) * speed;
    
    // Save template for respawning
    const template = {
      x,
      y,
      vx,
      vy,
      r: radius,
      type: dir.type,
      hp,
      seed: Math.random()
    };
    debugMeteorTemplates.push(template);
    
    // Create static meteor with direction
    const meteor = {
      ...template,
      debugStatic: true
    };
    
    missiles.push(meteor);
  });
  
  // Add twin pairs in additional positions
  const twinAngles = [
    Math.PI / 6,      // 30 degrees
    Math.PI / 3,      // 60 degrees
    -Math.PI / 6,     // -30 degrees
    -Math.PI / 3      // -60 degrees
  ];
  
  twinAngles.forEach((angle) => {
    const x = centerX + Math.cos(angle) * distance * 0.7;
    const y = centerY + Math.sin(angle) * distance * 0.7;
    spawnDebugTwinPair(x, y, angle);
  });
}

function spawnDebugTwinPair(x, y, angle) {
  // Minimum offset of 40px scaled for comfortable two-finger tapping, with random variation up to 20px more
  const offset = (40 + Math.random() * 20) * layout.scale;
  const perpX = -Math.sin(angle);
  const perpY = Math.cos(angle);
  // Use same radius as normal meteors
  const r = 10 + Math.random() * 4;
  const id = twinCounter++;
  
  // Set velocity direction so meteors point in the correct direction
  const speed = 100; // Just for direction, not actual movement
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;
  
  const base = {
    vx,
    vy,
    r,
    type: 'twin',
    twinId: id,
    debugStatic: true,
    seed: Math.random()
  };
  
  const m1 = {
    x: x + perpX * offset,
    y: y + perpY * offset,
    twinPart: 0,
    ...base
  };
  
  const m2 = {
    x: x - perpX * offset,
    y: y - perpY * offset,
    twinPart: 1,
    ...base,
    seed: Math.random()
  };
  
  // Store templates for respawn
  debugMeteorTemplates.push({
    x: m1.x,
    y: m1.y,
    vx: m1.vx,
    vy: m1.vy,
    r: m1.r,
    type: 'twin',
    hp: 1,
    seed: m1.seed,
    twinId: id,
    twinPart: 0
  });
  
  debugMeteorTemplates.push({
    x: m2.x,
    y: m2.y,
    vx: m2.vx,
    vy: m2.vy,
    r: m2.r,
    type: 'twin',
    hp: 1,
    seed: m2.seed,
    twinId: id,
    twinPart: 1
  });
  
  missiles.push(m1, m2);
  twinGroups.set(id, { a: m1, b: m2, primeA: 0, primeB: 0 });
}

function scheduleDebugRespawn(meteor) {
  if (!state.debugMode || !meteor.debugStatic) return;
  
  // Handle twin pairs - respawn both meteors
  if (meteor.type === 'twin' && meteor.twinId !== undefined) {
    const templates = debugMeteorTemplates.filter(t => 
      t.twinId === meteor.twinId
    );
    templates.forEach(template => {
      debugRespawnQueue.push({
        template: { ...template, seed: Math.random() },
        timer: 3.0,
        isTwin: true,
        twinId: template.twinId
      });
    });
    return;
  }
  
  // Find matching template by position and type
  const template = debugMeteorTemplates.find(t => 
    Math.abs(t.x - meteor.x) < 5 && 
    Math.abs(t.y - meteor.y) < 5 && 
    t.type === meteor.type &&
    t.twinId === undefined // Not a twin
  );
  if (template) {
    debugRespawnQueue.push({
      template: { ...template, seed: Math.random() },
      timer: 3.0
    });
  }
}

function startDebugMode() {
  resetGame();
  state.debugMode = true;
  state.running = true;
  startScreen.classList.add('hidden');
  actionsBar.classList.remove('hidden');
  if (debugPanel) {
    debugPanel.classList.remove('hidden');
  }
  spawnDebugMeteors();
  initAudio();
  resetMusic(); // Reiniciar música desde el principio para nueva partida
  updateHud();
}

function update(dt) {
  updateExplosions(dt);
  updateScreenEffects(dt);
  if (!state.running || !core.alive || state.paused || isInCountdown) return;
  updateCooldowns(dt);
  if (state.survivalLevel) {
    state.survivalTime += dt;
    updateHud();
  }
  if (state.slowTimer > 0) {
    const wasSlow = state.slowTimer > 0;
    state.slowTimer = Math.max(0, state.slowTimer - dt);
    if (wasSlow && state.slowTimer <= 0) {
      setMusicSlow(false);
    }
  }
  if (state.aegisTimer > 0) {
    state.aegisTimer = Math.max(0, state.aegisTimer - dt);
  }

  if (state.debugMode) {
    // In debug mode, meteors don't move and don't spawn
    // Process respawn queue
    for (let i = debugRespawnQueue.length - 1; i >= 0; i -= 1) {
      const respawn = debugRespawnQueue[i];
      respawn.timer -= dt;
      if (respawn.timer <= 0) {
        // Handle twin pair respawn
        if (respawn.isTwin && respawn.twinId !== undefined) {
          // Find all templates for this twin pair
          const twinTemplates = debugRespawnQueue
            .filter(r => r.isTwin && r.twinId === respawn.twinId && r.timer <= 0)
            .map(r => r.template);
          
          if (twinTemplates.length === 2) {
            const m1 = {
              ...twinTemplates[0],
              debugStatic: true,
              twinPart: twinTemplates[0].twinPart || 0
            };
            const m2 = {
              ...twinTemplates[1],
              debugStatic: true,
              twinPart: twinTemplates[1].twinPart || 1
            };
            missiles.push(m1, m2);
            twinGroups.set(respawn.twinId, { a: m1, b: m2, primeA: 0, primeB: 0 });
            
            // Remove all twin templates from queue
            for (let j = debugRespawnQueue.length - 1; j >= 0; j -= 1) {
              if (debugRespawnQueue[j].twinId === respawn.twinId) {
                debugRespawnQueue.splice(j, 1);
              }
            }
          }
        } else {
          const meteor = {
            ...respawn.template,
            debugStatic: true
          };
          missiles.push(meteor);
          debugRespawnQueue.splice(i, 1);
        }
      }
    }
  } else if (state.bossPhase) {
    state.bossSpawnTimer += dt;
    if (state.bossSpawnTimer >= 2.6) {
      state.bossSpawnTimer = 0;
      spawnMissile();
    }
    updateBoss(dt);
  } else if (state.survivalLevel) {
    state.spawnTimer += dt;
    const interval = getSurvivalSpawnInterval(state.survivalTime);
    if (state.spawnTimer >= interval) {
      state.spawnTimer = 0;
      spawnMissile();
      
      // A partir de 20s, ocasionalmente spawnear múltiples meteoritos o twins
      const t = state.survivalTime;
      if (t > 20) {
        const extraRoll = Math.random();
        const difficultyFactor = Math.min(1, getSurvivalDifficulty(t));
        
        // A partir de 25s, spawnear twins ocasionalmente (más frecuente)
        if (t > 25 && extraRoll < 0.2 * difficultyFactor) {
          const edge = Math.floor(Math.random() * 4);
          const { x, y } = getEdgeSpawnPoint(edge);
          spawnTwinPair(x, y);
        }
        
        // A partir de 35s, spawnear múltiples meteoritos a la vez
        if (t > 35 && extraRoll < 0.25 * difficultyFactor && extraRoll >= 0.2 * difficultyFactor) {
          const edge = Math.floor(Math.random() * 4);
          const { x, y } = getEdgeSpawnPoint(edge);
          spawnMissileFrom(x, y, null);
        }
      }
    }
  } else {
    state.spawnTimer += dt;
    if (state.spawnTimer >= state.spawnInterval && state.waveSpawned < state.waveTarget) {
      state.spawnTimer = 0;
      spawnMissile();
      state.waveSpawned += 1;
    }
  }

  const target = center();
  const speedFactor = state.slowTimer > 0 ? 0.5 : 1;
  const aegisRadius = (baseShieldRadius + layerGap * (maxLayers - 1)) * layout.scale;
  for (const group of twinGroups.values()) {
    if (!group.a || !group.b) continue;
    const ax = group.a.x;
    const ay = group.a.y;
    const bx = group.b.x;
    const by = group.b.y;
    const distToCore = distancePointToSegment(target.x, target.y, ax, ay, bx, by);
    const midX = (ax + bx) * 0.5;
    const midY = (ay + by) * 0.5;
    const aegisHit = isPixelTheme()
      ? segmentIntersectsSquare(ax, ay, bx, by, target.x, target.y, aegisRadius)
      : distToCore <= aegisRadius;
    if (state.aegisTimer > 0 && aegisHit) {
      removeTwinGroup(group.a.twinId);
      triggerExplosion(midX, midY, '#c9d2dc', 26, 0.2, 6);
      continue;
    }
    const activeLayer = getActiveShield();
    const shieldRadius = activeLayer ? activeLayer.radius : 0;
    const shieldHit = isPixelTheme()
      ? segmentIntersectsSquare(ax, ay, bx, by, target.x, target.y, shieldRadius)
      : distToCore <= shieldRadius;
    if (shieldRadius > 0 && shieldHit) {
      activeLayer.hp = Math.max(0, activeLayer.hp - 35);
      removeTwinGroup(group.a.twinId);
      playSfx('shield');
      triggerExplosion(midX, midY, '#6ecbff', 28, 0.18);
      continue;
    }
    const coreHit = isPixelTheme()
      ? segmentIntersectsSquare(ax, ay, bx, by, target.x, target.y, core.radius)
      : distToCore <= core.radius;
    if (coreHit) {
      removeTwinGroup(group.a.twinId);
      handleCoreHit();
      break;
    }
  }
  const useShieldHitbox = meteorSpriteData.manualShieldHitbox?.enabled && meteorSpriteData.ready;
  const useForgeHex = useShieldHitbox && isForgeTheme() && !isPixelTheme();
  const hexRotation = Math.PI / 6;
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    const m = missiles[i];
    // Skip movement for debug static meteors
    if (!m.debugStatic) {
      m.x += m.vx * dt * speedFactor;
      m.y += m.vy * dt * speedFactor;
    }

    const dx = m.x - target.x;
    const dy = m.y - target.y;
    const dist = Math.hypot(dx, dy);
    const squareDist = Math.max(Math.abs(dx), Math.abs(dy));

    const aegisHitbox = useForgeHex
      ? isMeteorHitboxIntersectingHex(m, target.x, target.y, aegisRadius, meteorSpriteData.manualShieldHitbox, hexRotation)
      : useShieldHitbox
        ? isPixelTheme()
          ? isMeteorHitboxInSquare(m, target.x, target.y, aegisRadius * 2, meteorSpriteData.manualShieldHitbox)
          : isMeteorHitboxInRadius(m, target.x, target.y, aegisRadius, meteorSpriteData.manualShieldHitbox)
        : null;
    const aegisHit = useShieldHitbox
      ? Boolean(aegisHitbox)
      : (dist <= aegisRadius || (isPixelTheme() && squareDist <= aegisRadius));
    if (state.aegisTimer > 0 && aegisHit) {
      if (m.type === 'twin') {
        removeTwinGroup(m.twinId);
      } else {
        scheduleDebugRespawn(m);
        missiles.splice(i, 1);
      }
      triggerExplosion(m.x, m.y, '#c9d2dc', 26, 0.2, 6);
      continue;
    }

    const activeLayer = getActiveShield();
    const shieldRadius = activeLayer ? activeLayer.radius : 0;

    const shieldHitbox = useForgeHex
      ? isMeteorHitboxIntersectingHex(m, target.x, target.y, shieldRadius, meteorSpriteData.manualShieldHitbox, hexRotation)
      : useShieldHitbox
        ? isPixelTheme()
          ? isMeteorHitboxInSquare(m, target.x, target.y, shieldRadius * 2, meteorSpriteData.manualShieldHitbox)
          : isMeteorHitboxInRadius(m, target.x, target.y, shieldRadius, meteorSpriteData.manualShieldHitbox)
        : null;
    const shieldHit = useShieldHitbox
      ? Boolean(shieldHitbox)
      : (dist <= shieldRadius || (isPixelTheme() && squareDist <= shieldRadius));
    if (shieldRadius > 0 && shieldHit) {
      activeLayer.hp = Math.max(0, activeLayer.hp - 35);
      if (m.type === 'twin') {
        removeTwinGroup(m.twinId);
      } else {
        scheduleDebugRespawn(m);
        missiles.splice(i, 1);
      }
      playSfx('shield');
      triggerExplosion(m.x, m.y, '#6ecbff', 28, 0.18);
      continue;
    }

    const coreHitbox = useForgeHex
      ? isMeteorHitboxIntersectingHex(m, target.x, target.y, core.radius, meteorSpriteData.manualShieldHitbox, hexRotation)
      : useShieldHitbox
        ? isPixelTheme()
          ? isMeteorHitboxInSquare(m, target.x, target.y, core.radius * 2, meteorSpriteData.manualShieldHitbox)
          : isMeteorHitboxInRadius(m, target.x, target.y, core.radius, meteorSpriteData.manualShieldHitbox)
        : null;
    const coreHit = useShieldHitbox
      ? Boolean(coreHitbox)
      : (dist <= core.radius || (isPixelTheme() && squareDist <= core.radius));
    if (coreHit) {
      if (m.type === 'twin') {
        removeTwinGroup(m.twinId);
      } else {
        scheduleDebugRespawn(m);
        missiles.splice(i, 1);
      }
      handleCoreHit();
    }
  }

  if (state.running && !state.survivalLevel && !state.bossPhase && state.waveSpawned >= state.waveTarget && missiles.length === 0) {
    endWave();
  }

}

function drawBackground() {
  if (isPixelTheme()) {
    ctx.imageSmoothingEnabled = false;
  }
  const gradient = ctx.createRadialGradient(
    width * 0.5,
    height * 0.4,
    10,
    width * 0.5,
    height * 0.4,
    Math.max(width, height)
  );
  gradient.addColorStop(0, themeColors.space1);
  gradient.addColorStop(0.5, themeColors.space2);
  gradient.addColorStop(1, themeColors.space3);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (const star of stars) {
    const alpha = 0.4 + Math.sin(star.tw + state.lastTime * 0.002) * 0.3;
    ctx.fillStyle = `rgba(${themeColors.star}, ${alpha})`;
    if (isPixelTheme()) {
      const size = Math.max(1, Math.round(star.r));
      ctx.fillRect(Math.round(star.x), Math.round(star.y), size, size);
    } else {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawCore() {
  const { x, y } = center();
  const useHex = isForgeTheme();
  const hexRotation = Math.PI / 6;

  if (state.aegisTimer > 0) {
    const outer = (baseShieldRadius + layerGap * (maxLayers - 1)) * layout.scale;
    const inner = 0;
    const ratio = Math.max(0.2, state.aegisTimer / 3);
    ctx.save();
    const ironGradient = ctx.createLinearGradient(x - outer, y - outer, x + outer, y + outer);
    ironGradient.addColorStop(0, '#c9d2dc');
    ironGradient.addColorStop(0.5, '#7a8692');
    ironGradient.addColorStop(1, '#4a535e');
    ctx.globalAlpha = 0.55 + ratio * 0.35;
    ctx.fillStyle = ironGradient;
    if (isPixelTheme()) {
      const size = Math.round(outer * 2);
      ctx.fillRect(Math.round(x - size / 2), Math.round(y - size / 2), size, size);
      ctx.save();
      ctx.beginPath();
      ctx.rect(Math.round(x - size / 2), Math.round(y - size / 2), size, size);
      ctx.clip();
      ctx.globalAlpha = 0.2 + ratio * 0.2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1.5;
      const stripeGap = 10 * layout.scale;
      for (let i = -outer; i <= outer; i += stripeGap) {
        ctx.beginPath();
        ctx.moveTo(x - outer, y + i);
        ctx.lineTo(x + outer, y + i);
        ctx.stroke();
      }
      ctx.restore();
    } else if (useHex) {
      drawPolygonPath(x, y, outer, 6, hexRotation);
      ctx.fill();
      ctx.save();
      drawPolygonPath(x, y, outer, 6, hexRotation);
      ctx.clip();
      ctx.globalAlpha = 0.2 + ratio * 0.2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1.5;
      const stripeGap = 10 * layout.scale;
      for (let i = -outer; i <= outer; i += stripeGap) {
        ctx.beginPath();
        ctx.moveTo(x - outer, y + i);
        ctx.lineTo(x + outer, y + i + outer * 0.2);
        ctx.stroke();
      }
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, outer, 0, Math.PI * 2);
      ctx.arc(x, y, inner, 0, Math.PI * 2, true);
      ctx.fill('evenodd');
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, outer, 0, Math.PI * 2);
      ctx.clip();
      ctx.globalAlpha = 0.2 + ratio * 0.2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1.5;
      const stripeGap = 10 * layout.scale;
      for (let i = -outer; i <= outer; i += stripeGap) {
        ctx.beginPath();
        ctx.moveTo(x - outer, y + i);
        ctx.lineTo(x + outer, y + i + outer * 0.2);
        ctx.stroke();
      }
      ctx.restore();
    }
    ctx.restore();
  }

  if (isPixelTheme()) {
    for (let i = 0; i < maxLayers; i += 1) {
      const radius = (baseShieldRadius + layerGap * i) * layout.scale;
      const size = Math.round(radius * 2);
      ctx.strokeStyle = 'rgba(120, 180, 230, 0.2)';
      ctx.lineWidth = 2;
      ctx.strokeRect(Math.round(x - size / 2), Math.round(y - size / 2), size, size);
    }
    shieldLayers.forEach((layer, index) => {
      if (layer.hp <= 0) return;
      const ratio = layer.hp / layer.max;
      const color = themePalette.shield[Math.min(themePalette.shield.length - 1, index)];
      const size = Math.round(layer.radius * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(2, Math.round((2 + ratio * 2) * layout.scale));
      ctx.strokeRect(Math.round(x - size / 2), Math.round(y - size / 2), size, size);
    });
    const coreSize = Math.round(core.radius * 2);
    ctx.fillStyle = themePalette.coreOuter;
    ctx.fillRect(Math.round(x - coreSize / 2), Math.round(y - coreSize / 2), coreSize, coreSize);
    const innerSize = Math.round(core.radius * 1.1);
    ctx.fillStyle = themePalette.coreInner;
    ctx.fillRect(Math.round(x - innerSize / 2), Math.round(y - innerSize / 2), innerSize, innerSize);
    return;
  }

  for (let i = 0; i < maxLayers; i += 1) {
    const radius = (baseShieldRadius + layerGap * i) * layout.scale;
    if (useHex) {
      drawPolygonPath(x, y, radius, 6, hexRotation);
    } else {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
    }
    ctx.strokeStyle = 'rgba(80, 140, 200, 0.12)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  for (const layer of shieldLayers) {
    if (layer.hp <= 0) continue;
    const ratio = layer.hp / layer.max;
    const color = themePalette.shield[Math.min(themePalette.shield.length - 1, shieldLayers.indexOf(layer))];
    if (useHex) {
      drawPolygonPath(x, y, layer.radius, 6, hexRotation);
    } else {
      ctx.beginPath();
      ctx.arc(x, y, layer.radius, 0, Math.PI * 2);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = (3 + ratio * 3) * layout.scale;
    ctx.shadowColor = color;
    ctx.shadowBlur = 12 * layout.scale;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  if (useHex) {
    drawPolygonPath(x, y, core.radius, 6, hexRotation);
  } else {
    ctx.beginPath();
    ctx.arc(x, y, core.radius, 0, Math.PI * 2);
  }
  ctx.fillStyle = themePalette.coreOuter;
  if (isNeonTheme()) {
    ctx.shadowColor = 'rgba(120, 255, 240, 0.9)';
    ctx.shadowBlur = 28;
  } else if (useHex) {
    ctx.shadowColor = 'rgba(255, 170, 100, 0.85)';
    ctx.shadowBlur = 20;
  } else {
    ctx.shadowColor = 'rgba(255, 180, 70, 0.8)';
    ctx.shadowBlur = 18;
  }
  ctx.fill();
  ctx.shadowBlur = 0;

  if (useHex) {
    drawPolygonPath(x, y, core.radius * 0.6, 6, hexRotation);
  } else {
    ctx.beginPath();
    ctx.arc(x, y, core.radius * 0.6, 0, Math.PI * 2);
  }
  ctx.fillStyle = themePalette.coreInner;
  ctx.fill();

  // Draw core hitbox visualization
  if (showMeteorHitboxes || state.debugMode) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 80, 80, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    if (isPixelTheme()) {
      const coreSize = Math.round(core.radius * 2);
      ctx.strokeRect(Math.round(x - coreSize / 2), Math.round(y - coreSize / 2), coreSize, coreSize);
    } else if (useHex) {
      drawPolygonPath(x, y, core.radius, 6, hexRotation);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, core.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function updateBoss(dt) {
  if (!boss.active) return;
  // Move boss to initial target position
  if (!boss.settled) {
    const dx = boss.targetX - boss.x;
    const dy = boss.targetY - boss.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 0.5) {
      const step = boss.speed * dt;
      const move = Math.min(step, dist);
      boss.x += (dx / dist) * move;
      boss.y += (dy / dist) * move;
    } else {
      boss.x = boss.targetX;
      boss.y = boss.targetY;
      boss.settled = true;
    }
  }

  // Lateral drift movement once settled (skip during death)
  if (boss.settled && boss.hp > 0 && boss.driftSpeed > 0) {
    const scale = layout.scale;
    const margin = 20 * scale;
    if (boss.entry === 'top') {
      // Horizontal drift
      boss.x += boss.driftSpeed * boss.driftDir * dt;
      const minX = margin;
      const maxX = width - boss.width - margin;
      if (boss.x >= maxX) { boss.x = maxX; boss.driftDir = -1; }
      if (boss.x <= minX) { boss.x = minX; boss.driftDir = 1; }
    } else {
      // Vertical drift (for left/right entry)
      boss.y += boss.driftSpeed * boss.driftDir * dt;
      const minY = margin;
      const maxY = layout.y - boss.height / 2 + boss.height * 0.4;
      if (boss.y >= maxY) { boss.y = maxY; boss.driftDir = -1; }
      if (boss.y <= minY) { boss.y = minY; boss.driftDir = 1; }
    }
  }
  boss.parts.forEach(part => {
    if (part.hp <= 0) return;
    part.cooldown += dt;
    if (part.cooldown >= part.rate) {
      part.cooldown = 0;
      // Transform part center from ship-space to screen-space
      const spawnPos = shipToScreen(part.x + part.w * 0.5, part.y + part.h * 0.5);
      spawnMissileFrom(spawnPos.x, spawnPos.y, part.type);
    }
  });

  boss.parts.forEach(part => {
    if (part.flash > 0) {
      part.flash = Math.max(0, part.flash - dt * 2.5);
    }
  });
  if (boss.bodyFlash > 0) {
    boss.bodyFlash = Math.max(0, boss.bodyFlash - dt * 2.5);
  }

  // Boss dies when general HP reaches 0 (with death animation delay)
  if (boss.hp <= 0) {
    if (!boss.deathTimer) {
      boss.deathTimer = 2.0; // Show destroyed state before boss dies
      boss.deathExplosionTimer = 0;
      missiles.length = 0;
      twinGroups.clear();
      // Force all launchers destroyed for the "both destroyed" image
      boss.parts.forEach(p => { if (p.hp > 0) p.hp = 0; });
      // Initial big explosion + sound
      const cx = boss.x + boss.width / 2;
      const cy = boss.y + boss.height / 2;
      playSfx('boom');
      triggerExplosion(cx, cy, '#ff6b3b', 80, 0.6, 16);
      screenFlash = 0.4;
    }
    // Chain explosions during death animation
    boss.deathExplosionTimer = (boss.deathExplosionTimer || 0) + dt;
    if (boss.deathExplosionTimer >= 0.25) {
      boss.deathExplosionTimer = 0;
      const { imgW, imgH } = getBossImageDims();
      const rx = (0.15 + Math.random() * 0.7);
      const ry = (0.1 + Math.random() * 0.6);
      const pos = shipToScreen(rx, ry);
      const colors = ['#ff6b3b', '#ffb347', '#ff4444', '#ffa500', '#ff7700'];
      triggerExplosion(pos.x, pos.y, colors[Math.floor(Math.random() * colors.length)], 30 + Math.random() * 40, 0.4, 6 + Math.floor(Math.random() * 6));
    }
    boss.deathTimer -= dt;
    if (boss.deathTimer <= 0) {
      boss.deathTimer = 0;
      boss.active = false;
      state.bossPhase = false;
      // Final big explosion
      const cx = boss.x + boss.width / 2;
      const cy = boss.y + boss.height / 2;
      triggerExplosion(cx, cy, '#ffb347', 120, 0.8, 24);
      screenFlash = 0.6;
      shockwave = 1;
      playSfx('success');
      updateBossBar();
      completeLevel();
      return;
    }
  }
  updateBossBar();
}

function drawBoss() {
  if (!boss.active) return;
  ctx.save();
  const cx = boss.x + boss.width / 2;
  const cy = boss.y + boss.height / 2;
  const rotation = getBossRotation();
  const { imgW, imgH } = getBossImageDims();

  ctx.translate(cx, cy);
  ctx.rotate(rotation);

  // Draw the correct spaceship image based on launcher state
  const currentImg = getBossCurrentImage();
  if (currentImg.complete && currentImg.naturalWidth > 0) {
    ctx.drawImage(currentImg, -imgW / 2, -imgH / 2, imgW, imgH);
  } else if (bossImage.complete && bossImage.naturalWidth > 0) {
    ctx.drawImage(bossImage, -imgW / 2, -imgH / 2, imgW, imgH);
  } else {
    // Fallback rectangle if no image loaded
    ctx.fillStyle = 'rgba(10, 20, 35, 0.95)';
    ctx.fillRect(-imgW / 2, -imgH / 2, imgW, imgH);
  }

  // Draw body flash overlay when hit directly
  if (boss.bodyFlash > 0) {
    ctx.fillStyle = '#9cd3ff';
    ctx.globalAlpha = boss.bodyFlash * 0.35;
    ctx.beginPath();
    for (let i = 0; i < bossHitboxPoly.length; i++) {
      const p = bossHitboxPoly[i];
      const px = p.x * imgW - imgW / 2;
      const py = p.y * imgH - imgH / 2;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Draw flash overlays on damaged launcher parts (in ship-local space)
  boss.parts.forEach(part => {
    if (part.hp <= 0 || part.flash <= 0) return;
    const px = part.x * imgW - imgW / 2;
    const py = part.y * imgH - imgH / 2;
    const pw = part.w * imgW;
    const ph = part.h * imgH;
    ctx.fillStyle = '#ffb347';
    ctx.globalAlpha = part.flash * 0.45;
    ctx.fillRect(px, py, pw, ph);
    ctx.globalAlpha = 1;
  });

  // Debug: draw hitbox polygon outline (only in debug mode)
  if (state.debugMode) {
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < bossHitboxPoly.length; i++) {
      const p = bossHitboxPoly[i];
      const px = p.x * imgW - imgW / 2;
      const py = p.y * imgH - imgH / 2;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();

    // Draw part rectangles in debug
    boss.parts.forEach(part => {
      if (part.hp <= 0) return;
      const px = part.x * imgW - imgW / 2;
      const py = part.y * imgH - imgH / 2;
      const pw = part.w * imgW;
      const ph = part.h * imgH;
      ctx.fillStyle = 'rgba(255,180,70,0.3)';
      ctx.fillRect(px, py, pw, ph);
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.strokeRect(px, py, pw, ph);
    });
  }

  ctx.restore();
}

function hitBossAt(x, y) {
  if (!boss.active || boss.hp <= 0) return false;
  // Transform screen point to ship-normalized space
  const ship = screenToShip(x, y);

  // Priority 1: Check alive launcher hitboxes (half damage to boss HP)
  for (let i = boss.parts.length - 1; i >= 0; i -= 1) {
    const part = boss.parts[i];
    if (part.hp <= 0) continue;
    if (ship.x >= part.x && ship.x <= part.x + part.w &&
        ship.y >= part.y && ship.y <= part.y + part.h) {
      // Launcher hit: half damage to general HP + full damage to launcher HP
      part.hp -= 1;
      boss.hp = Math.max(0, boss.hp - 0.5);
      part.flash = 0.6;
      playSfx(part.hp <= 0 ? 'boom' : 'hitsoft');
      triggerExplosion(x, y, '#ffb347', 32, 0.2, 6);
      if (part.hp <= 0) {
        awardMoney(25);
        spawnCashFloater(x, y - 30, 25);
        // Trigger big explosion for destroyed launcher
        triggerExplosion(x, y, '#ff6b3b', 60, 0.5, 12);
      }
      updateBossBar();
      return true;
    }
  }

  // Priority 2: Check body (polygon hitbox) - full damage to boss HP
  if (pointInPolygon(ship.x, ship.y, bossHitboxPoly)) {
    boss.hp = Math.max(0, boss.hp - 1);
    boss.bodyFlash = 0.5;
    playSfx('hitsoft');
    triggerExplosion(x, y, '#9cd3ff', 28, 0.15, 5);
    updateBossBar();
    return true;
  }

  return false;
}

function seededRandom(seed, offset) {
  const value = Math.sin(seed * 1000 + offset) * 43758.5453;
  return value - Math.floor(value);
}

function getMissileColors(m) {
  const isFast = m.type === 'fast';
  const isTank = m.type === 'tank';
  const isTwin = m.type === 'twin';
  const body = isTank ? themePalette.missileTank : isTwin ? themePalette.missileTwin : isFast ? themePalette.missileFast : themePalette.missileNormal;
  const glow = isFast ? themePalette.missileStrokeFast : themePalette.missileStrokeNormal;
  const trail = isFast ? themePalette.missileTrailFast : themePalette.missileTrailNormal;
  return { body, glow, trail };
}

function getMeteorBodyDims(m) {
  const isFast = m.type === 'fast';
  const isTank = m.type === 'tank';
  if (isPixelTheme()) {
    // Reduced size to match other modes
    const bodyW = m.r * (isTank ? 1.2 : isFast ? 0.8 : 1.02);
    const bodyH = m.r * (isTank ? 1.2 : isFast ? 0.8 : 1.02);
    return { bodyW, bodyH };
  }
  const bodyLen = m.r * (isFast ? 1.2 : isTank ? 1.6 : 1.35);
  const bodyW = m.r * (isFast ? 0.8 : isTank ? 1.2 : 1.02);
  return { bodyLen, bodyW };
}

function isPointOnMeteor(m, x, y) {
  const angle = getMeteorRotation(m, Math.atan2(m.vy, m.vx));
  const dx = x - m.x;
  const dy = y - m.y;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const rx = dx * cos + dy * sin;
  const ry = -dx * sin + dy * cos;
  const spriteRect = getSpriteHitboxRect(m);
  if (spriteRect) {
    const manual = meteorSpriteData.manualHitbox;
    let localX = rx;
    let localY = ry;
    if (manual?.enabled && manual.rotation) {
      const cos = Math.cos(-manual.rotation);
      const sin = Math.sin(-manual.rotation);
      const nextX = localX * cos - localY * sin;
      const nextY = localX * sin + localY * cos;
      localX = nextX;
      localY = nextY;
    }
    return (
      localX >= spriteRect.x &&
      localX <= spriteRect.x + spriteRect.w &&
      localY >= spriteRect.y &&
      localY <= spriteRect.y + spriteRect.h
    );
  }
  const pad = Math.max(4, m.r * 0.18);
  if (isPixelTheme()) {
    const { bodyW, bodyH } = getMeteorBodyDims(m);
    return Math.abs(rx) <= bodyW * 0.5 + pad && Math.abs(ry) <= bodyH * 0.5 + pad;
  }
  const { bodyLen, bodyW } = getMeteorBodyDims(m);
  const rectHalf = Math.max(0, bodyLen - bodyW);
  const radius = bodyW + pad;
  if (Math.abs(rx) <= rectHalf) {
    return Math.abs(ry) <= radius;
  }
  const cx = Math.sign(rx || 1) * rectHalf;
  const dxCircle = rx - cx;
  return dxCircle * dxCircle + ry * ry <= radius * radius;
}

function isCircleIntersectingRect(px, py, rect, radius) {
  const clampedX = Math.max(rect.x, Math.min(px, rect.x + rect.w));
  const clampedY = Math.max(rect.y, Math.min(py, rect.y + rect.h));
  const dx = px - clampedX;
  const dy = py - clampedY;
  return dx * dx + dy * dy <= radius * radius;
}

function isSquareIntersectingRect(px, py, rect, squareSize) {
  // squareSize is the full width/height of the square, centered at (px, py)
  const halfSize = squareSize * 0.5;
  const squareLeft = px - halfSize;
  const squareRight = px + halfSize;
  const squareTop = py - halfSize;
  const squareBottom = py + halfSize;
  
  const rectLeft = rect.x;
  const rectRight = rect.x + rect.w;
  const rectTop = rect.y;
  const rectBottom = rect.y + rect.h;
  
  // Check if rectangles overlap
  return !(squareRight < rectLeft || squareLeft > rectRight || squareBottom < rectTop || squareTop > rectBottom);
}

function getRegularPolygonPoints(x, y, radius, sides, rotation = 0) {
  const points = [];
  for (let i = 0; i < sides; i += 1) {
    const angle = rotation + (Math.PI * 2 * i) / sides;
    points.push({
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius
    });
  }
  return points;
}

function projectPolygon(points, axisX, axisY) {
  let min = Infinity;
  let max = -Infinity;
  for (const p of points) {
    const dot = p.x * axisX + p.y * axisY;
    if (dot < min) min = dot;
    if (dot > max) max = dot;
  }
  return { min, max };
}

function polygonsIntersectSAT(polyA, polyB) {
  for (const poly of [polyA, polyB]) {
    for (let i = 0; i < poly.length; i += 1) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      const axisX = -(b.y - a.y);
      const axisY = b.x - a.x;
      const projA = projectPolygon(polyA, axisX, axisY);
      const projB = projectPolygon(polyB, axisX, axisY);
      if (projA.max < projB.min || projB.max < projA.min) {
        return false;
      }
    }
  }
  return true;
}

function toHitboxSpace(m, x, y, config) {
  const angle = getMeteorRotation(m, Math.atan2(m.vy, m.vx));
  const dx = x - m.x;
  const dy = y - m.y;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  let rx = dx * cos + dy * sin;
  let ry = -dx * sin + dy * cos;
  const manual = config;
  if (manual?.enabled && manual.rotation) {
    const rotCos = Math.cos(-manual.rotation);
    const rotSin = Math.sin(-manual.rotation);
    const nextX = rx * rotCos - ry * rotSin;
    const nextY = rx * rotSin + ry * rotCos;
    rx = nextX;
    ry = nextY;
  }
  return { x: rx, y: ry };
}

function isMeteorHitboxInRadius(m, centerX, centerY, radius, config = meteorSpriteData.manualHitbox) {
  const spriteRect = getSpriteHitboxRect(m, config);
  if (!spriteRect) return null;
  const local = toHitboxSpace(m, centerX, centerY, config);
  return isCircleIntersectingRect(local.x, local.y, spriteRect, radius);
}

function isMeteorHitboxInSquare(m, centerX, centerY, squareSize, config = meteorSpriteData.manualHitbox) {
  const spriteRect = getSpriteHitboxRect(m, config);
  if (!spriteRect) return null;
  // Compute meteor hitbox corners in world space so the shield square
  // stays axis-aligned with the screen (important for pixel theme).
  const angle = getMeteorRotation(m, Math.atan2(m.vy, m.vx));
  let totalAngle = angle;
  if (config?.enabled && config.rotation) {
    totalAngle += config.rotation;
  }
  const cos = Math.cos(totalAngle);
  const sin = Math.sin(totalAngle);
  const corners = [
    { x: spriteRect.x,              y: spriteRect.y },
    { x: spriteRect.x + spriteRect.w, y: spriteRect.y },
    { x: spriteRect.x + spriteRect.w, y: spriteRect.y + spriteRect.h },
    { x: spriteRect.x,              y: spriteRect.y + spriteRect.h }
  ];
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const c of corners) {
    const wx = m.x + c.x * cos - c.y * sin;
    const wy = m.y + c.x * sin + c.y * cos;
    if (wx < minX) minX = wx;
    if (wx > maxX) maxX = wx;
    if (wy < minY) minY = wy;
    if (wy > maxY) maxY = wy;
  }
  // Shield square in world space (axis-aligned)
  const half = squareSize * 0.5;
  const sqL = centerX - half;
  const sqR = centerX + half;
  const sqT = centerY - half;
  const sqB = centerY + half;
  return !(maxX < sqL || minX > sqR || maxY < sqT || minY > sqB);
}

function isMeteorHitboxIntersectingHex(m, centerX, centerY, radius, config, rotation) {
  const spriteRect = getSpriteHitboxRect(m, config);
  if (!spriteRect) return null;
  const rectPoints = [
    { x: spriteRect.x, y: spriteRect.y },
    { x: spriteRect.x + spriteRect.w, y: spriteRect.y },
    { x: spriteRect.x + spriteRect.w, y: spriteRect.y + spriteRect.h },
    { x: spriteRect.x, y: spriteRect.y + spriteRect.h }
  ];
  const hexPoints = getRegularPolygonPoints(centerX, centerY, radius, 6, rotation);
  const localHex = hexPoints.map(point => toHitboxSpace(m, point.x, point.y, config));
  return polygonsIntersectSAT(localHex, rectPoints);
}

function getMeteorDents(seed, isTank, isFast) {
  const dents = [];
  const pairs = isTank ? 2 : 1;
  const baseDepth = isFast ? 0.08 : isTank ? 0.12 : 0.1;
  for (let i = 0; i < pairs; i += 1) {
    const spread = 0.35 + seededRandom(seed, 91 + i * 7.3) * 0.2;
    const depth = baseDepth + seededRandom(seed, 129 + i * 9.1) * 0.06;
    const topJitter = (seededRandom(seed, 173 + i * 11.7) - 0.5) * 0.5;
    const bottomJitter = (seededRandom(seed, 211 + i * 13.2) - 0.5) * 0.5;
    dents.push({ angle: -Math.PI / 2 + topJitter, width: spread, depth });
    dents.push({ angle: Math.PI / 2 + bottomJitter, width: spread, depth });
  }
  return dents;
}

function getDentFactor(angle, dents) {
  let dent = 0;
  for (const entry of dents) {
    const delta = Math.atan2(Math.sin(angle - entry.angle), Math.cos(angle - entry.angle));
    const influence = Math.exp(-(delta * delta) / (2 * entry.width * entry.width));
    dent += entry.depth * influence;
  }
  return Math.min(dent, 0.28);
}

function getCapsuleRadius(angle, bodyLen, bodyW) {
  const rectHalf = Math.max(0, bodyLen - bodyW);
  if (rectHalf === 0) {
    return bodyW;
  }
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const absSin = Math.abs(sin);
  if (absSin > 1e-6) {
    const tRect = bodyW / absSin;
    const xRect = tRect * cos;
    if (Math.abs(xRect) <= rectHalf) {
      return tRect;
    }
  }
  const dir = cos === 0 ? 1 : Math.sign(cos);
  const cx = dir * rectHalf;
  const disc = Math.max(0, (cx * cos) ** 2 - (cx * cx - bodyW * bodyW));
  return cx * cos + Math.sqrt(disc);
}

function buildMeteorBodyPath(bodyLen, bodyW, dents, steps = 32) {
  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * Math.PI * 2;
    const cos = Math.cos(t);
    const sin = Math.sin(t);
    const baseR = getCapsuleRadius(t, bodyLen, bodyW);
    const r = baseR * (1 - getDentFactor(t, dents));
    const x = r * cos;
    const y = r * sin;
    if (i === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
}

function getSpriteFrame(m) {
  if (!meteorSpriteData.ready) return null;
  const row = meteorSpriteData.rowByType[m.type];
  if (row === undefined) return null;
  const frame = Math.floor((state.animationTime / meteorSpriteData.frameTime) + (m.seed ?? 0.5) * meteorSpriteData.frameCount)
    % meteorSpriteData.frameCount;
  const sx = frame * meteorSpriteData.frameW;
  const sy = row * meteorSpriteData.frameH;
  return { row, frame, sx, sy };
}

function getSpriteDrawSize(m) {
  const { bodyW } = getMeteorBodyDims(m);
  const rockHeight = bodyW * 2;
  const typeScale = meteorSpriteData.scaleByType?.[m.type] ?? 1;
  const spriteH = (rockHeight / meteorSpriteData.rockHeightRatio) * meteorSpriteData.scale * typeScale;
  const spriteW = spriteH * (meteorSpriteData.frameW / meteorSpriteData.frameH);
  return { spriteW, spriteH };
}

function getSpriteHitboxRect(m, config = meteorSpriteData.manualHitbox) {
  const frameData = getSpriteFrame(m);
  if (!frameData) return null;
  const { spriteW, spriteH } = getSpriteDrawSize(m);
  const manual = config;
  if (manual?.enabled) {
    const w = spriteW * manual.widthScale;
    const h = spriteH * manual.heightScale;
    let offsetX = spriteW * (manual.offsetForward ?? 0);
    let offsetY = spriteH * (manual.offsetRight ?? 0);
    if (manual.rotation) {
      const cos = Math.cos(-manual.rotation);
      const sin = Math.sin(-manual.rotation);
      const rotX = offsetX * cos - offsetY * sin;
      const rotY = offsetX * sin + offsetY * cos;
      offsetX = rotX;
      offsetY = rotY;
    }
    const cx = -spriteW * meteorSpriteData.anchorX + spriteW * manual.centerX + offsetX;
    const cy = -spriteH * meteorSpriteData.anchorY + spriteH * manual.centerY + offsetY;
    return { x: cx - w / 2, y: cy - h / 2, w, h };
  }
  const hitBounds = meteorSpriteData.hitBounds?.[frameData.row]?.[frameData.frame];
  if (!hitBounds) return null;
  const x = -spriteW * meteorSpriteData.anchorX + (hitBounds.minX / hitBounds.frameW) * spriteW;
  const y = -spriteH * meteorSpriteData.anchorY + (hitBounds.minY / hitBounds.frameH) * spriteH;
  const w = ((hitBounds.maxX - hitBounds.minX + 1) / hitBounds.frameW) * spriteW;
  const h = ((hitBounds.maxY - hitBounds.minY + 1) / hitBounds.frameH) * spriteH;
  return { x, y, w, h };
}

function getTwinBeamAnchor(m) {
  const rect = getSpriteHitboxRect(m, meteorSpriteData.manualHitbox);
  const center = rect ? getMeteorHitboxCenter(m) : { x: m.x, y: m.y };
  const speed = Math.hypot(m.vx, m.vy) || 1;
  const dirX = m.vx / speed;
  const dirY = m.vy / speed;
  let frontOffset = 0;
  if (rect) {
    frontOffset = Math.max(rect.w, rect.h) * 0.5;
  } else if (isPixelTheme()) {
    const { bodyW } = getMeteorBodyDims(m);
    frontOffset = bodyW * 0.5;
  } else {
    const { bodyLen } = getMeteorBodyDims(m);
    frontOffset = bodyLen;
  }
  const tunedOffset = frontOffset * 0.65;
  return {
    x: center.x + dirX * tunedOffset,
    y: center.y + dirY * tunedOffset
  };
}

function getMeteorHitboxCenter(m, config = meteorSpriteData.manualHitbox) {
  const rect = getSpriteHitboxRect(m, config);
  if (!rect) {
    return { x: m.x, y: m.y };
  }
  let localX = rect.x + rect.w * 0.5;
  let localY = rect.y + rect.h * 0.5;
  const manual = config;
  if (manual?.enabled && manual.rotation) {
    const cos = Math.cos(manual.rotation);
    const sin = Math.sin(manual.rotation);
    const rotX = localX * cos - localY * sin;
    const rotY = localX * sin + localY * cos;
    localX = rotX;
    localY = rotY;
  }
  const angle = getMeteorRotation(m, Math.atan2(m.vy, m.vx));
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: m.x + localX * cos - localY * sin,
    y: m.y + localX * sin + localY * cos
  };
}

function drawSpriteMeteor(m, angle) {
  const frameData = getSpriteFrame(m);
  if (!frameData) return false;
  const { spriteW, spriteH } = getSpriteDrawSize(m);
  const prevSmoothing = ctx.imageSmoothingEnabled;

  ctx.save();
  ctx.translate(m.x, m.y);
  ctx.rotate(angle + meteorSpriteData.rotationOffset);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(
    meteorSprite,
    frameData.sx,
    frameData.sy,
    meteorSpriteData.frameW,
    meteorSpriteData.frameH,
    -spriteW * meteorSpriteData.anchorX,
    -spriteH * meteorSpriteData.anchorY,
    spriteW,
    spriteH
  );
  ctx.imageSmoothingEnabled = prevSmoothing;
  ctx.restore();
  return true;
}

function getMeteorRotation(m, angle) {
  if (!meteorSpriteData.ready) return angle;
  const row = meteorSpriteData.rowByType[m.type];
  if (row === undefined) return angle;
  return angle + meteorSpriteData.rotationOffset;
}

function drawMeteorKillHitbox(m, angle) {
  ctx.save();
  ctx.translate(m.x, m.y);
  ctx.rotate(angle);
  ctx.strokeStyle = 'rgba(180, 180, 180, 0.6)';
  ctx.lineWidth = 1;
  const spriteRect = getSpriteHitboxRect(m);
  if (spriteRect) {
    const manual = meteorSpriteData.manualHitbox;
    if (manual?.enabled && manual.rotation) {
      ctx.rotate(manual.rotation);
    }
    ctx.strokeRect(spriteRect.x, spriteRect.y, spriteRect.w, spriteRect.h);
    ctx.restore();
    return;
  }
  const pad = Math.max(4, m.r * 0.18);
  if (isPixelTheme()) {
    const { bodyW, bodyH } = getMeteorBodyDims(m);
    const w = bodyW + pad * 2;
    const h = bodyH + pad * 2;
    ctx.strokeRect(-w / 2, -h / 2, w, h);
  } else {
    const { bodyLen, bodyW } = getMeteorBodyDims(m);
    const rectHalf = Math.max(0, bodyLen - bodyW);
    const radius = bodyW + pad;
    ctx.beginPath();
    if (rectHalf === 0) {
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
    } else {
      ctx.moveTo(-rectHalf, -radius);
      ctx.lineTo(rectHalf, -radius);
      ctx.arc(rectHalf, 0, radius, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(-rectHalf, radius);
      ctx.arc(-rectHalf, 0, radius, Math.PI / 2, -Math.PI / 2);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawMeteorShieldHitbox(m) {
  const radius = Math.max(2, m.r * 0.12);
  ctx.save();
  ctx.translate(m.x, m.y);
  ctx.strokeStyle = 'rgba(180, 180, 180, 0.4)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawMeteorHitboxes(m, angle) {
  // Show kill hitboxes in debug mode, or if showMeteorHitboxes is enabled
  if (state.debugMode || showMeteorHitboxes) {
    drawMeteorKillHitbox(m, angle);
  }
  
  // Always show shield hitboxes if enabled, or in debug mode
  if (showShieldHitboxes || state.debugMode) {
    const shieldRect = getSpriteHitboxRect(m, meteorSpriteData.manualShieldHitbox);
    if (shieldRect) {
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(angle);
      const manual = meteorSpriteData.manualShieldHitbox;
      if (manual?.enabled && manual.rotation) {
        ctx.rotate(manual.rotation);
      }
      ctx.strokeStyle = 'rgba(120, 220, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(shieldRect.x, shieldRect.y, shieldRect.w, shieldRect.h);
      ctx.restore();
    } else if (m.type !== 'twin') {
      drawMeteorShieldHitbox(m);
    }
  }
}

function drawPixelMeteor(m, angle, colors, tailScale) {
  const isFast = m.type === 'fast';
  const isTank = m.type === 'tank';
  // Use getMeteorBodyDims to ensure consistent sizing with other modes
  const { bodyW: bodyWBase, bodyH: bodyHBase } = getMeteorBodyDims(m);
  const bodyW = Math.round(bodyWBase);
  const bodyH = Math.round(bodyHBase);
  const segments = isFast ? 4 : 3;
  const flicker = 0.95 + 0.08 * Math.sin(state.animationTime * 0.006 + (m.seed ?? 0.5) * 12);
  const tailStep = Math.max(2, Math.round(m.r * (0.9 * tailScale) * flicker));
  const tailAlpha = Math.max(0.35, Math.min(0.85, 0.55 + (flicker - 0.9) * 0.6));

  ctx.save();
  ctx.translate(m.x, m.y);
  ctx.rotate(angle);

  for (let i = 0; i < segments; i += 1) {
    const segW = Math.max(1, Math.round(bodyW * (1 - i * 0.18) * flicker));
    const segH = Math.max(1, Math.round(bodyH * (1 - i * 0.18) * flicker));
    const segX = Math.round(-bodyW / 2 - (i + 1) * tailStep);
    ctx.globalAlpha = (0.6 - i * 0.12) * tailAlpha;
    ctx.fillStyle = colors.trail;
    ctx.fillRect(segX - segW, Math.round(-segH / 2), segW, segH);
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = colors.body;
  ctx.fillRect(Math.round(-bodyW / 2), Math.round(-bodyH / 2), bodyW, bodyH);

  ctx.fillStyle = colors.glow;
  ctx.globalAlpha = 0.7;
  ctx.fillRect(Math.round(bodyW * 0.05), Math.round(-bodyH * 0.3), Math.round(bodyW * 0.35), Math.round(bodyH * 0.6));
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawMeteor(m) {
  const angle = Math.atan2(m.vy, m.vx);
  const isFast = m.type === 'fast';
  const isTank = m.type === 'tank';
  const isTwin = m.type === 'twin';
  const colors = getMissileColors(m);
  const tailScale = isTwin ? 0.7 : 1;
  const seed = m.seed ?? 0.5;
  const flicker = 0.95 + 0.08 * Math.sin(state.animationTime * 0.006 + seed * 12);
  const dents = getMeteorDents(seed, isTank, isFast);

  if (drawSpriteMeteor(m, angle)) {
    return;
  }

  if (isPixelTheme()) {
    drawPixelMeteor(m, angle, colors, tailScale);
    return;
  }

  const tailLen = m.r * (isFast ? 7 : isTank ? 4.8 : 5.6) * tailScale * flicker;
  const tailWidth = m.r * (isFast ? 1.1 : isTank ? 1.6 : 1.35) * flicker;
  const { bodyLen, bodyW } = getMeteorBodyDims(m);

  ctx.save();
  ctx.translate(m.x, m.y);
  ctx.rotate(angle);

  const tailGradient = ctx.createLinearGradient(0, 0, -tailLen, 0);
  tailGradient.addColorStop(0, colors.trail);
  tailGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = tailGradient;
  ctx.globalAlpha = (isFast ? 0.95 : 0.85) * flicker;
  ctx.beginPath();
  ctx.moveTo(0, -tailWidth * 0.5);
  ctx.lineTo(-tailLen, -tailWidth);
  ctx.lineTo(-tailLen, tailWidth);
  ctx.lineTo(0, tailWidth * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = colors.body;
  buildMeteorBodyPath(bodyLen, bodyW, dents, isFast ? 26 : isTank ? 32 : 30);
  ctx.fill();

  const craterCount = isTank ? 5 : isFast ? 3 : 4;
  const craters = [];
  const maxAttempts = craterCount * 12;
  let attempts = 0;
  while (craters.length < craterCount && attempts < maxAttempts) {
    attempts += 1;
    const rr = bodyW * (0.16 + seededRandom(seed, attempts * 7.9) * 0.1);
    const shade = 0.16 + seededRandom(seed, attempts * 23.1) * 0.2;
    const rim = 0.08 + seededRandom(seed, attempts * 31.7) * 0.08;
    const rx = (seededRandom(seed, attempts * 12.7) - 0.5) * bodyLen * 1.2;
    const ry = (seededRandom(seed, attempts * 19.3) - 0.5) * bodyW * 1.1;
    if (rx < -bodyLen * 0.35) continue;
    if (rx > bodyLen * 0.85) continue;
    if (Math.abs(ry) + rr > bodyW * 0.98) continue;
    if (Math.abs(rx) + rr > bodyLen * 0.98) continue;
    const angleCheck = Math.atan2(ry, rx);
    const baseR = getCapsuleRadius(angleCheck, bodyLen, bodyW);
    const dentedR = baseR * (1 - getDentFactor(angleCheck, dents));
    if (Math.hypot(rx, ry) + rr > dentedR * 0.98) continue;
    let overlap = false;
    for (let i = 0; i < craters.length; i += 1) {
      const dx = rx - craters[i].x;
      const dy = ry - craters[i].y;
      const minDist = rr + craters[i].r + bodyW * 0.12;
      if (dx * dx + dy * dy < minDist * minDist) {
        overlap = true;
        break;
      }
    }
    if (!overlap) {
      craters.push({ x: rx, y: ry, r: rr, shade, rim });
    }
  }

  for (const crater of craters) {
    ctx.beginPath();
    ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 0, 0, ${crater.shade})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 255, 255, ${crater.rim})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const glowGradient = ctx.createRadialGradient(bodyLen * 0.6, 0, m.r * 0.1, 0, 0, bodyLen * 1.3);
  glowGradient.addColorStop(0, colors.glow);
  glowGradient.addColorStop(1, colors.body);
  ctx.fillStyle = glowGradient;
  ctx.globalAlpha = 0.85;
  if (isNeonTheme()) {
    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 14;
  }
  buildMeteorBodyPath(bodyLen, bodyW, dents, isFast ? 26 : isTank ? 32 : 30);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;

  ctx.restore();
}

function drawMissiles() {
  for (const m of missiles) {
    if (m.type === 'twin' && m.twinPart === 0) {
      const group = twinGroups.get(m.twinId);
      if (group && group.b) {
        const anchorA = getTwinBeamAnchor(group.a);
        const anchorB = getTwinBeamAnchor(group.b);
        const ax = anchorA.x;
        const ay = anchorA.y;
        const bx = anchorB.x;
        const by = anchorB.y;
        const steps = 10;
        const waveAmp = 4 * layout.scale;
        const waveFreq = 6;
        const dx = bx - ax;
        const dy = by - ay;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        ctx.strokeStyle = themePalette.twinBeam;
        ctx.lineWidth = 2;
        if (isNeonTheme() && !isPixelTheme()) {
          ctx.shadowColor = themePalette.twinBeam;
          ctx.shadowBlur = 16;
        }
        ctx.beginPath();
        for (let i = 0; i <= steps; i += 1) {
          const t = i / steps;
          const x = ax + (bx - ax) * t;
          const y = ay + (by - ay) * t;
          const wobble = Math.sin(t * waveFreq * Math.PI + state.lastTime * 0.008) * waveAmp;
          const wx = x + nx * wobble;
          const wy = y + ny * wobble;
          if (i === 0) {
            ctx.moveTo(wx, wy);
          } else {
            ctx.lineTo(wx, wy);
          }
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
        if (state.debugMode || showMeteorHitboxes) {
          ctx.save();
          ctx.strokeStyle = 'rgba(180, 180, 180, 0.4)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
          ctx.restore();
        }
        if (isPixelTheme()) {
          ctx.fillStyle = themePalette.twinBeam;
          for (let i = 0; i <= steps; i += 2) {
            const t = i / steps;
            const x = ax + (bx - ax) * t;
            const y = ay + (by - ay) * t;
            ctx.fillRect(Math.round(x) - 1, Math.round(y) - 1, 2, 2);
          }
        }
      }
    }

    const isTank = m.type === 'tank';
    const baseAngle = Math.atan2(m.vy, m.vx);
    const angle = getMeteorRotation(m, baseAngle);
    drawMeteor(m);
    drawMeteorHitboxes(m, angle);

    let textX = 0;
    let textY = 0;
    let distance = 0;
    
    if (isTank) {
      ctx.fillStyle = '#eaffdf';
      const fontSize = Math.max(10, m.r * 0.75);
      ctx.font = getHudFont(fontSize);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Calculate position on the head (circle) of the meteorite
      // Use the same logic that works in retro for all modes
      let headAngle;
      const angleOffset = (state.debugMode && debugAngleOffsetInput) ? parseFloat(debugAngleOffsetInput.value) || -0.3 : -0.3;
      if (state.debugMode && debugUseBaseAngleInput && debugUseBaseAngleInput.checked) {
        headAngle = baseAngle + angleOffset;
      } else {
        // Same calculation as retro - this works correctly
        headAngle = baseAngle + meteorSpriteData.rotationOffset + angleOffset;
      }
      const distanceMultiplier = (state.debugMode && debugDistanceInput) ? parseFloat(debugDistanceInput.value) || -3.2 : -3.2;
      distance = m.r * distanceMultiplier;
      textX = m.x + Math.cos(headAngle) * distance;
      textY = m.y + Math.sin(headAngle) * distance;
      
      ctx.lineWidth = Math.max(2, Math.round(fontSize * 0.15));
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.85)';
      ctx.strokeText(String(m.hp), textX, textY);
      ctx.fillText(String(m.hp), textX, textY);
    }

    // Debug mode: show variable values around meteorite (only if enabled)
    if (state.debugMode && debugShowVariablesInput && debugShowVariablesInput.checked) {
      ctx.fillStyle = '#ffffff';
      ctx.font = getHudFont(10);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      const baseAngle = Math.atan2(m.vy, m.vx);
      const debugY = m.y - m.r * 2;
      let lineY = debugY;
      const lineHeight = 12;
      
      ctx.fillText(`angle: ${angle.toFixed(2)}`, m.x - 60, lineY);
      lineY += lineHeight;
      ctx.fillText(`baseAngle: ${baseAngle.toFixed(2)}`, m.x - 60, lineY);
      lineY += lineHeight;
      ctx.fillText(`vx: ${m.vx.toFixed(1)}`, m.x - 60, lineY);
      lineY += lineHeight;
      ctx.fillText(`vy: ${m.vy.toFixed(1)}`, m.x - 60, lineY);
      lineY += lineHeight;
      ctx.fillText(`r: ${m.r.toFixed(1)}`, m.x - 60, lineY);
      lineY += lineHeight;
      ctx.fillText(`x: ${m.x.toFixed(1)}`, m.x - 60, lineY);
      lineY += lineHeight;
      ctx.fillText(`y: ${m.y.toFixed(1)}`, m.x - 60, lineY);
      lineY += lineHeight;
      if (isTank) {
        ctx.fillText(`hp: ${m.hp}`, m.x - 60, lineY);
        lineY += lineHeight;
        ctx.fillText(`textX: ${textX.toFixed(1)}`, m.x - 60, lineY);
        lineY += lineHeight;
        ctx.fillText(`textY: ${textY.toFixed(1)}`, m.x - 60, lineY);
        lineY += lineHeight;
        ctx.fillText(`distance: ${distance.toFixed(1)}`, m.x - 60, lineY);
        lineY += lineHeight;
        const currentHeadAngle = state.debugMode && debugUseBaseAngleInput && debugUseBaseAngleInput.checked
          ? baseAngle + (debugAngleOffsetInput ? parseFloat(debugAngleOffsetInput.value) || 0 : 0)
          : baseAngle + meteorSpriteData.rotationOffset + (debugAngleOffsetInput ? parseFloat(debugAngleOffsetInput.value) || 0 : 0);
        ctx.fillText(`headAngle: ${currentHeadAngle.toFixed(2)}`, m.x - 60, lineY);
      }
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
  triggerExplosion(center().x, center().y, '#9cd3ff', Math.max(width, height) * 0.6, 0.5, 18);
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

function spawnBigCashFloater(amount) {
  cashFloaters.push({
    x: width / 2,
    y: height * 0.35,
    vy: -40,
    life: 1.2,
    t: 0,
    text: `+${amount}`,
    size: 24
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
    ctx.fillStyle = themePalette.screenFlash || '#9cd3ff';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

  if (shockwave > 0) {
    const maxRadius = Math.hypot(width, height);
    const radius = maxRadius * (1 - shockwave);
    ctx.save();
    const shockwaveColor = themePalette.shockwave || '140, 220, 255';
    ctx.strokeStyle = `rgba(${shockwaveColor}, ${shockwave * 0.7})`;
    ctx.lineWidth = 6;
    const { x, y } = center();
    if (isPixelTheme()) {
      const size = Math.round(radius * 2);
      ctx.strokeRect(Math.round(x - size / 2), Math.round(y - size / 2), size, size);
    } else if (isForgeTheme()) {
      drawPolygonPath(x, y, radius, 6, Math.PI / 6);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
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
    const size = f.size || 14;
    ctx.font = getHudFont(size);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(f.text, f.x, f.y);
    ctx.restore();
  }
}

function render(timestamp) {
  const dt = Math.min(0.033, (timestamp - state.lastTime) / 1000 || 0);
  state.lastTime = timestamp;
  
  // Only update animation time when game is running, not paused, not in countdown, and core is alive
  if (state.running && !state.paused && !isInCountdown && core.alive) {
    state.animationTime = timestamp;
  }

  update(dt);

  drawBackground();
  drawCore();
  drawBoss();
  drawMissiles();
  drawExplosions();
  drawScreenEffects();
  
  // Draw God's Finger attack radius in debug mode (not in hardcore)
  if (state.debugMode && godsFingerUnlocked && !state.hardcoreLevel) {
    drawGodsFingerRadius();
  }

  requestAnimationFrame(render);
}

function startCountdown(resetSkills = true) {
  // No reiniciar música aquí, solo pausar (para mantener posición en pause/unpause)
  stopMusic();
  if (resetSkills) {
    resetSkillCooldowns();
  }
  isInCountdown = true;
  countdownEl.textContent = state.countdown;
  countdownEl.classList.remove('hidden');
  if (state.hardcoreLevel) {
    showWaveMessage(t('hardcoreModeMsg'), 2.2);
  } else if (state.survivalLevel) {
    showWaveMessage(t('survivalModeMsg'), 2.2);
  } else if (state.bossPhase) {
    showWaveMessage(t('bossIncoming'), 2.2);
  } else {
    showWaveMessage(getWaveLabel(), 2.2);
  }
  playSfx('tick');
  const timer = setInterval(() => {
    // Don't countdown if paused
    if (state.paused) return;
    
    state.countdown -= 1;
    if (state.countdown <= 0) {
      clearInterval(timer);
      countdownTimer = null;
      isInCountdown = false;
      countdownEl.classList.add('hidden');
      setMusicMode('game');
      if (state.survivalLevel) {
        startSurvival();
      } else if (state.bossPhase) {
        startBossLevel();
      } else {
        startWave(false);
      }
      return;
    }
    countdownEl.textContent = state.countdown;
    playSfx('tick');
  }, 500);
  countdownTimer = timer;
}

function updateHud() {
  if (state.debugMode) {
    hudLevel.textContent = t('debugMode');
    hudWave.textContent = t('meteorViewer');
  } else if (state.survivalLevel) {
    hudLevel.textContent = t('survival');
    hudWave.textContent = '';
  } else if (state.hardcoreLevel) {
    hudLevel.textContent = t('hardcore');
    hudWave.textContent = state.bossPhase ? t('boss') : t('waveOf', state.wave, state.wavesTotal);
  } else {
    hudLevel.textContent = t('level', state.level);
    hudWave.textContent = state.bossPhase ? t('boss') : t('waveOf', state.wave, state.wavesTotal);
  }
  moneyEl.lastChild.textContent = t('credits', state.money);
  if (menuCredits) {
    const label = menuCredits.querySelector('.label');
    if (label) {
      label.textContent = t('credits', state.money);
    }
  }
  if (survivalTimeEl) {
    survivalTimeEl.classList.toggle('hidden', !state.survivalLevel);
    if (state.survivalLevel) {
      survivalTimeEl.textContent = t('time', state.survivalTime.toFixed(1));
    }
  }
}

function updateBossBar() {
  if (!bossBar || !bossBarFill) return;
  if (!boss.active) {
    bossBar.classList.add('hidden');
    return;
  }
  const total = boss.maxHp || 1;
  const current = Math.max(0, boss.hp);
  const ratio = Math.max(0, Math.min(1, current / total));
  bossBarFill.style.width = `${ratio * 100}%`;
  bossBar.classList.remove('hidden');
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

function showAdminCreditFloater(amount) {
  if (!adminCreditFloater) return;
  adminCreditFloater.textContent = `+${amount}`;
  adminCreditFloater.classList.remove('hidden');
  adminCreditFloater.classList.remove('float');
  void adminCreditFloater.offsetWidth;
  adminCreditFloater.classList.add('float');
  if (adminCreditFloaterTimer) {
    clearTimeout(adminCreditFloaterTimer);
  }
  adminCreditFloaterTimer = setTimeout(() => {
    adminCreditFloater.classList.add('hidden');
    adminCreditFloater.classList.remove('float');
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

function showLevelLockedToast() {
  if (!levelLockedToast) return;
  levelLockedToast.classList.remove('hidden');
  if (levelLockedToastTimer) {
    clearTimeout(levelLockedToastTimer);
  }
  levelLockedToastTimer = setTimeout(() => {
    levelLockedToast.classList.add('hidden');
  }, 1500);
}

function getBounty(type) {
  if (type === 'twin') return 5;
  if (type === 'fast') return 3;
  if (type === 'tank') return 5;
  return 1;
}

const GODS_FINGER_RADIUS = 96; // Radio de ataque de God's Finger (reducido 20% desde 120)

function drawGodsFingerRadius() {
  // Draw a circle showing the attack radius following the mouse cursor
  // This helps visualize the range in debug mode
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)'; // Dorado semitransparente
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 4]);
  
  // Draw circle at mouse position
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, GODS_FINGER_RADIUS, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.restore();
  
  // Draw label above the circle
  ctx.save();
  ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
  ctx.font = getHudFont(12);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`God's Finger Radius: ${GODS_FINGER_RADIUS}px`, mouseX, mouseY - GODS_FINGER_RADIUS - 20);
  ctx.restore();
}

function activateGodsFinger(x, y) {
  const radius = GODS_FINGER_RADIUS; // Radio razonable para la explosión
  let totalReward = 0;
  const killedMeteors = [];
  const processedTwinIds = new Set();
  const target = center();
  
  // Verificar colisión con el núcleo PRIMERO (antes de destruir escudos)
  const distToCore = Math.hypot(target.x - x, target.y - y);
  let coreHit = false;
  if (isPixelTheme()) {
    // En pixel theme, el núcleo es un cuadrado
    const halfCoreSize = core.radius * layout.scale;
    const coreRect = {
      x: target.x - halfCoreSize,
      y: target.y - halfCoreSize,
      w: halfCoreSize * 2,
      h: halfCoreSize * 2
    };
    coreHit = isCircleIntersectingRect(x, y, coreRect, radius);
  } else {
    // En otros temas, el núcleo es un círculo
    const coreRadiusScaled = core.radius * layout.scale;
    coreHit = distToCore <= coreRadiusScaled + radius;
  }
  
  // Verificar si hay escudos activos ANTES de hacer cualquier cosa
  const hasActiveShields = getActiveShield() !== null;
  
  // Si el núcleo fue tocado
  if (coreHit && core.alive) {
    if (hasActiveShields) {
      // Si hay escudos activos, solo destruir el más externo, NO matar
      for (let i = shieldLayers.length - 1; i >= 0; i -= 1) {
        const layer = shieldLayers[i];
        if (layer.hp > 0) {
          layer.hp = 0;
          playSfx('shield');
          triggerExplosion(target.x, target.y, '#6ecbff', 28, 0.18);
          break; // Solo destruir una capa
        }
      }
      // No procesar más, solo destruir el escudo
      // Continuar para procesar meteoritos
    } else {
      // Si NO hay escudos activos, el jugador muere
      handleCoreHit(t('godsFingerDeath'));
      return; // No procesar meteoritos si el jugador ya murió
    }
  } else {
    // Si el núcleo NO fue tocado, verificar colisión con escudos
    for (let i = shieldLayers.length - 1; i >= 0; i -= 1) {
      const layer = shieldLayers[i];
      if (layer.hp <= 0) continue; // Skip destroyed shields
      
      const shieldRadius = layer.radius * layout.scale;
      const distToShield = Math.hypot(target.x - x, target.y - y);
      
      // Para pixel theme, verificar intersección de cuadrado con círculo
      // Para otros temas, verificar intersección de círculo con círculo
      let shieldHit = false;
      if (isPixelTheme()) {
        // En pixel theme, el escudo es un cuadrado
        // Verificar si el círculo de explosión intersecta con el cuadrado del escudo
        const halfShieldSize = shieldRadius;
        const shieldRect = {
          x: target.x - halfShieldSize,
          y: target.y - halfShieldSize,
          w: halfShieldSize * 2,
          h: halfShieldSize * 2
        };
        shieldHit = isCircleIntersectingRect(x, y, shieldRect, radius);
      } else {
        // En otros temas, el escudo es un círculo (o hexágono, pero aproximamos como círculo)
        shieldHit = distToShield <= shieldRadius + radius;
      }
      
      if (shieldHit) {
        // Solo destruir la capa más externa que intersecta (la primera que encontramos al iterar desde el final)
        layer.hp = 0;
        playSfx('shield');
        triggerExplosion(target.x, target.y, '#6ecbff', 28, 0.18);
        break; // Solo destruir una capa
      }
    }
  }
  
  // Encontrar todos los meteoritos en el radio (si los hay)
  // Usar la hitbox completa, no solo el punto central
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    const m = missiles[i];
    
    // Verificar si la hitbox del meteorito intersecta con el círculo de ataque
    let isInRange = false;
    
    // Para sprites, usar la función de intersección de hitbox
    if (meteorSpriteData.manualHitbox?.enabled && meteorSpriteData.ready) {
      if (isPixelTheme()) {
        // Para pixel theme, usar verificación de cuadrado
        isInRange = isMeteorHitboxInSquare(m, x, y, radius * 2, meteorSpriteData.manualHitbox) === true;
      } else {
        // Para otros temas, usar verificación de círculo
        isInRange = isMeteorHitboxInRadius(m, x, y, radius, meteorSpriteData.manualHitbox) === true;
      }
    } else {
      // Fallback: verificar distancia desde el centro (para compatibilidad)
      const center = getMeteorHitboxCenter(m);
      const dx = center.x - x;
      const dy = center.y - y;
      const dist = Math.hypot(dx, dy);
      // Añadir un margen basado en el tamaño del meteorito para compensar
      const margin = m.r * 0.5;
      isInRange = dist <= radius + margin;
    }
    
    if (isInRange) {
      // Para twins, solo procesar una vez por grupo
      if (m.type === 'twin' && m.twinId !== undefined) {
        if (processedTwinIds.has(m.twinId)) {
          continue; // Ya procesamos este grupo twin
        }
        processedTwinIds.add(m.twinId);
      }
      const center = getMeteorHitboxCenter(m);
      killedMeteors.push({ meteor: m, center, bounty: getBounty(m.type) });
    }
  }
  
  // Matar todos los meteoritos encontrados (si los hay)
  for (const { meteor: m, center, bounty } of killedMeteors) {
    if (m.type === 'twin' && m.twinId !== undefined) {
      // Remover el grupo twin completo
      removeTwinGroup(m.twinId);
    } else {
      // Remover meteorito normal
      const index = missiles.indexOf(m);
      if (index !== -1) {
        scheduleDebugRespawn(m);
        missiles.splice(index, 1);
      }
    }
    totalReward += bounty;
    spawnCashFloater(center.x, center.y - 30, bounty);
  }
  
  // Crear explosión visual grande (siempre, incluso si no hay meteoritos)
  // El tamaño visual coincide con el radio de ataque
  triggerExplosion(x, y, '#ffd700', radius, 0.4, 24);
  playSfx('godsFinger');
  
  // Otorgar recompensa total (si hay meteoritos muertos)
  if (totalReward > 0) {
    awardMoney(totalReward);
  }
  
  // No hay cooldown, es permanente
}

function getActiveShield() {
  for (let i = shieldLayers.length - 1; i >= 0; i -= 1) {
    if (shieldLayers[i].hp > 0) {
      return shieldLayers[i];
    }
  }
  return null;
}

function distancePointToSegment(px, py, ax, ay, bx, by) {
  const abx = bx - ax;
  const aby = by - ay;
  const apx = px - ax;
  const apy = py - ay;
  const abLenSq = abx * abx + aby * aby;
  let t = abLenSq === 0 ? 0 : (apx * abx + apy * aby) / abLenSq;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + abx * t;
  const cy = ay + aby * t;
  return Math.hypot(px - cx, py - cy);
}

function segmentIntersectsSquare(ax, ay, bx, by, cx, cy, half) {
  const minX = cx - half;
  const maxX = cx + half;
  const minY = cy - half;
  const maxY = cy + half;
  let t0 = 0;
  let t1 = 1;
  const dx = bx - ax;
  const dy = by - ay;
  if (dx === 0) {
    if (ax < minX || ax > maxX) return false;
  } else {
    const inv = 1 / dx;
    let tNear = (minX - ax) * inv;
    let tFar = (maxX - ax) * inv;
    if (tNear > tFar) [tNear, tFar] = [tFar, tNear];
    t0 = Math.max(t0, tNear);
    t1 = Math.min(t1, tFar);
    if (t0 > t1) return false;
  }
  if (dy === 0) {
    if (ay < minY || ay > maxY) return false;
  } else {
    const inv = 1 / dy;
    let tNear = (minY - ay) * inv;
    let tFar = (maxY - ay) * inv;
    if (tNear > tFar) [tNear, tFar] = [tFar, tNear];
    t0 = Math.max(t0, tNear);
    t1 = Math.min(t1, tFar);
    if (t0 > t1) return false;
  }
  return true;
}

function handleCoreHit(customMessage = null) {
  if (!core.alive) return;
  // Boss test mode: invincible
  if (state.bossTestMode) return;
  const target = center();
  core.alive = false;
  state.running = false;
  playSfx('core');
  triggerExplosion(target.x, target.y, '#ffb347', 140, 0.7, 18);
  
  let message;
  // Always save and show survival record, even on self-kill
  if (state.survivalLevel) {
    const isRecord = saveSurvivalRecord(state.survivalTime);
    const timeText = `${state.survivalTime.toFixed(1)}s`;
    const survivalLine = isRecord ? t('survivalNewRecord', timeText) : t('survivalTime', timeText);
    message = customMessage ? customMessage + '\n' + survivalLine : survivalLine;
  } else {
    message = customMessage || t('gameOver');
  }
  stopMusic();
  if (waveTimeout) {
    clearTimeout(waveTimeout);
    waveTimeout = null;
  }
  showResultScreen('defeat', message);
}

function awardMoney(amount) {
  state.money += amount;
  localStorage.setItem('money', String(state.money));
  updateHud();
  updateUpgrades();
  updateUpgradeVisibility();
  updateResultCredits();
}

function loadSurvivalRecords() {
  try {
    const raw = localStorage.getItem(survivalRecordsKey);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveSurvivalRecord(time) {
  const records = loadSurvivalRecords();
  const prevBest = records.length ? Math.max(...records) : 0;
  records.push(time);
  records.sort((a, b) => b - a);
  const trimmed = records.slice(0, 5);
  localStorage.setItem(survivalRecordsKey, JSON.stringify(trimmed));
  renderSurvivalRecords(trimmed);
  return time > prevBest;
}

function renderSurvivalRecords(records = null) {
  const list = document.querySelector('#survival-records .records-list');
  if (!list) return;
  const data = records || loadSurvivalRecords();
  list.innerHTML = '';
  if (data.length === 0) {
    const item = document.createElement('li');
    item.textContent = t('noRecords');
    list.appendChild(item);
    return;
  }
  const medals = ['🥇', '🥈', '🥉'];
  const medalLabels = [t('goldMedal'), t('silverMedal'), t('bronzeMedal')];
  data.forEach((value, index) => {
    const item = document.createElement('li');
    if (index < 3) {
      // For top 3, use medal instead of number
      item.classList.add('has-medal');
      const medal = document.createElement('span');
      medal.className = 'record-medal';
      medal.textContent = medals[index];
      medal.setAttribute('aria-label', medalLabels[index]);
      item.appendChild(medal);
    }
    item.appendChild(document.createTextNode(`${value.toFixed(1)}s`));
    list.appendChild(item);
  });
}

function getSkillCooldown(skill) {
  let level = 0;
  if (skill === 'nova') {
    level = novaLevel;
  } else if (skill === 'regen') {
    level = regenLevel;
  } else if (skill === 'slow') {
    level = slowLevel;
  } else if (skill === 'aegis') {
    level = aegisLevel;
  }
  // godsFinger no tiene cooldown
  if (level <= 0) return 0;
  const index = Math.min(skillCooldownLevels.length - 1, level - 1);
  return skillCooldownLevels[index];
}

canvas.addEventListener('pointermove', e => {
  // Update mouse position for debug visualization
  mouseX = e.clientX;
  mouseY = e.clientY;
});

canvas.addEventListener('pointerdown', e => {
  if (!state.running) return;
  if (state.paused) {
    handleUnpause();
    return;
  }
  // Block all attacks and interactions during countdown
  if (isInCountdown) return;
  
  // En móviles, asegurar que el AudioContext esté activo ANTES de cualquier otra cosa
  // Esto reduce significativamente la latencia de audio
  if (audioCtx) {
    if (audioCtx.state === 'suspended') {
      // Resumir de forma síncrona si es posible, o al menos iniciar el proceso
      const resumePromise = audioCtx.resume();
      // No esperar, pero iniciar el proceso inmediatamente
      resumePromise.catch(() => {});
    }
    // Asegurar que los buffers estén cargados
    if (!audioBuffersLoaded) {
      loadAudioBuffers();
    }
  } else {
    // Si no hay AudioContext, inicializarlo inmediatamente
    initAudio();
  }
  
  const x = e.clientX;
  const y = e.clientY;
  // Update mouse position
  mouseX = x;
  mouseY = y;
  
  // Check if God's Finger is unlocked - if so, use it instead of normal tap
  // Always activate if unlocked, even if no meteors nearby (will show visual effect)
  // Disable in hardcore mode (no skills allowed)
  if (godsFingerUnlocked && !state.hardcoreLevel) {
    activateGodsFinger(x, y);
    return;
  }
  
  for (let i = missiles.length - 1; i >= 0; i -= 1) {
    const m = missiles[i];
    if (isPointOnMeteor(m, x, y)) {
      if (m.type === 'twin') {
        handleTwinTap(m, x, y);
      } else if (m.type === 'tank') {
        m.hp -= 1;
        if (m.hp <= 0) {
          scheduleDebugRespawn(m);
          missiles.splice(i, 1);
          playSfx('boom');
          triggerExplosion(x, y, '#b8ff9b', 46, 0.26);
          const bounty = getBounty(m.type);
          awardMoney(bounty);
          spawnCashFloater(x, y - 30, bounty);
        } else {
          playSfx('hitsoft');
          triggerExplosion(x, y, '#b8ff9b', 22, 0.16, 4);
        }
      } else {
        scheduleDebugRespawn(m);
        missiles.splice(i, 1);
        playSfx('boom');
        triggerExplosion(x, y, '#ff9b6b', 40, 0.22);
        const bounty = getBounty(m.type);
        awardMoney(bounty);
        spawnCashFloater(x, y - 30, bounty);
      }
      break;
    }
  }
  if (state.bossPhase) {
    hitBossAt(x, y);
  }
});

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.dataset.skill;
    if (!state.running || !core.alive) return;
    if (state.hardcoreLevel) return;
    if (isInCountdown) return; // Block abilities during countdown
    if (!skill) return;
    if (skill === 'nova' && novaLevel === 0) return;
    if (skill === 'regen' && regenLevel === 0) return;
    if (skill === 'slow' && slowLevel === 0) return;
    if (skill === 'aegis' && aegisLevel === 0) return;
    // godsFinger no se activa desde el botón, es automático en cada tap
    if (skillState[skill] > 0) return;
    if (skill === 'nova') {
      if (missiles.length > 0) {
        let reward = 0;
        missiles.forEach(missile => {
          reward += getBounty(missile.type);
          const center = getMeteorHitboxCenter(missile);
          spawnCashFloater(center.x, center.y - 30, getBounty(missile.type));
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
      playSfx('regen');
      setCooldown(skill);
      return;
    }
    if (skill === 'slow') {
      state.slowTimer = 3;
      playSfx('slow');
      setCooldown(skill);
      setMusicSlow(true);
      return;
    }
    if (skill === 'aegis') {
      state.aegisTimer = 3;
      playSfx('metal');
      setCooldown(skill);
    }
  });
});

function startSelectedLevel(level) {
  initAudio();
  resetMusic(); // Reiniciar música desde el principio para nueva partida
  state.selectedLevel = level;
  resetGame();
  applyLevelConfig(state.selectedLevel);
  rebuildShields();
  state.runStartMoney = state.money;
  updateHud();
  startScreen.classList.add('hidden');
  state.betweenLevels = false;
  updateUpgradeVisibility();
  updateSkillLocks();
  startCountdown();
}

if (normalStartButton) {
  normalStartButton.addEventListener('click', () => {
    startSelectedLevel(state.selectedLevel);
  });
}

if (hardcoreStartButton) {
  hardcoreStartButton.addEventListener('click', () => {
    startSelectedLevel(4);
  });
}

if (survivalStartButton) {
  survivalStartButton.addEventListener('click', () => {
    startSelectedLevel(5);
  });
}

startScreen.addEventListener('pointerdown', () => {
  initAudio();
});

if (menuPlay) {
  menuPlay.addEventListener('click', () => {
    setMenuView('play');
  });
}

if (normalModeToggle) {
  normalModeToggle.addEventListener('click', () => {
    setMenuView('normal');
  });
}

if (hardcoreModeToggle) {
  hardcoreModeToggle.addEventListener('click', () => {
    setMenuView('hardcore');
  });
}

if (survivalModeToggle) {
  survivalModeToggle.addEventListener('click', () => {
    setMenuView('survival');
  });
}

if (menuUpgradesButton) {
  menuUpgradesButton.addEventListener('click', () => {
    setMenuView('upgrades');
  });
}

if (menuOptionsButton) {
  menuOptionsButton.addEventListener('click', () => {
    setMenuView('options');
  });
}

if (upgradesBack) {
  upgradesBack.addEventListener('click', () => {
    setMenuView('home');
  });
}

if (playBack) {
  playBack.addEventListener('click', () => {
    setMenuView('home');
  });
}

if (normalBack) {
  normalBack.addEventListener('click', () => {
    setMenuView('play');
  });
}

if (hardcoreBack) {
  hardcoreBack.addEventListener('click', () => {
    setMenuView('play');
  });
}

if (survivalBack) {
  survivalBack.addEventListener('click', () => {
    setMenuView('play');
  });
}

if (optionsBack) {
  optionsBack.addEventListener('click', () => {
    setMenuView('home');
  });
}

if (musicVolumeSlider) {
  musicVolumeSlider.addEventListener('input', () => {
    initAudio();
    setMusicVolume(Number(musicVolumeSlider.value) / 100);
    previewMusicVolume();
  });
}

if (sfxVolumeSlider) {
  sfxVolumeSlider.addEventListener('input', () => {
    initAudio();
    setSfxVolume(Number(sfxVolumeSlider.value) / 100);
    previewSfxVolume();
  });
}

victoryClose.addEventListener('click', () => {
  victoryEl.classList.add('hidden');
  startScreen.classList.remove('hidden');
  state.betweenLevels = false;
  setMenuView('home');
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
  setMenuView('home');
  gameoverMenu.classList.add('hidden');
  gameoverEl.classList.add('hidden');
  gameoverRetry.classList.add('hidden');
  updateUpgradeVisibility();
});

gameoverRetry.addEventListener('click', () => {
  resetMusic(); // Reiniciar música desde el principio para nueva partida
  resetGame();
  applyLevelConfig(state.selectedLevel);
  rebuildShields();
  state.runStartMoney = state.money;
  updateHud();
  startScreen.classList.add('hidden');
  state.betweenLevels = false;
  updateUpgradeVisibility();
  updateSkillLocks();
  startCountdown();
});

if (resultRetry) {
  resultRetry.addEventListener('click', () => {
    hideResultScreen();
    resetMusic();
    resetGame();
    applyLevelConfig(state.selectedLevel);
    rebuildShields();
    state.runStartMoney = state.money;
    updateHud();
    startScreen.classList.add('hidden');
    state.betweenLevels = false;
    updateUpgradeVisibility();
    updateSkillLocks();
    startCountdown();
  });
}

if (resultNext) {
  resultNext.addEventListener('click', () => {
    hideResultScreen();
    const nextLevel = state.level + 1;
    startSelectedLevel(nextLevel);
  });
}

if (resultHardcore) {
  resultHardcore.addEventListener('click', () => {
    hideResultScreen();
    startSelectedLevel(4);
  });
}

if (resultSurvival) {
  resultSurvival.addEventListener('click', () => {
    hideResultScreen();
    startSelectedLevel(5);
  });
}

if (resultMenu) {
  resultMenu.addEventListener('click', () => {
    hideResultScreen();
    stopMusic();
    startScreen.classList.remove('hidden');
    state.betweenLevels = false;
    setMenuView('home');
    updateUpgradeVisibility();
  });
}

pauseButton.addEventListener('click', () => {
  // Allow pause during countdown or when game is running
  if (startScreen.classList.contains('hidden') === false) return;
  if (!isInCountdown && !state.running) return;
  if (state.paused) return;
  state.paused = true;
  pauseOverlay.classList.remove('hidden');
  pauseButton.disabled = true;
  
  // Lower music volume when pausing (save current volume first, then reduce to 15%)
  if (bgMusic && bgMusic.volume > 0) {
    pausedBgMusicVolume = bgMusic.volume; // Store the current absolute volume
    bgMusic.volume = bgMusic.volume * 0.15; // Reduce to 15% of current volume
  }
  if (gameGain && gameGain.gain.value > 0) {
    pausedGameGainValue = gameGain.gain.value; // Store the current absolute volume
    gameGain.gain.value = gameGain.gain.value * 0.15; // Reduce to 15% of current volume
  }
});

pauseMenu.addEventListener('pointerdown', e => {
  e.stopPropagation();
});

pauseMenu.addEventListener('click', e => {
  e.stopPropagation();
  if (!state.paused) return;
  pauseConfirm.classList.remove('hidden');
});

pauseOverlay.addEventListener('pointerdown', e => {
  if (e.target !== pauseOverlay) return;
  if (!state.paused) return;
  handleUnpause();
});

pauseResume.addEventListener('click', e => {
  e.stopPropagation();
  if (!state.paused) return;
  handleUnpause();
});

function handleUnpause() {
  state.paused = false;
  pauseOverlay.classList.add('hidden');
  pauseButton.disabled = false;
  
  // Restore music volume to previous level
  if (bgMusic && pausedBgMusicVolume > 0) {
    bgMusic.volume = pausedBgMusicVolume; // Restore to the volume before pause
  }
  if (gameGain && pausedGameGainValue > 0) {
    gameGain.gain.value = pausedGameGainValue; // Restore to the volume before pause
  }
  
  // Always start a new countdown when unpausing (if game is running)
  // Don't reset skills when unpausing
  if (state.running) {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    state.countdown = 3; // Reset to 3
    startCountdown(false); // Don't reset skills when unpausing
  }
}

pauseConfirmYes.addEventListener('click', () => {
  pauseConfirm.classList.add('hidden');
  if (!state.paused) return;
  stopMusic();
  state.paused = false;
  if (state.debugMode) {
    state.debugMode = false;
    resetGame();
    updateHud();
    startScreen.classList.remove('hidden');
    setMenuView('home');
    updateUpgradeVisibility();
  } else {
    state.money = state.runStartMoney;
    localStorage.setItem('money', String(state.money));
    resetGame();
    updateHud();
    startScreen.classList.remove('hidden');
    state.betweenLevels = false;
    setMenuView('home');
    updateUpgradeVisibility();
  }
});

pauseConfirmNo.addEventListener('click', () => {
  pauseConfirm.classList.add('hidden');
});

function clearDebugHold() {
  if (debugHoldTimer) {
    clearTimeout(debugHoldTimer);
    debugHoldTimer = null;
  }
}

function clearAdminCreditsHold() {
  if (adminCreditsTimer) {
    clearTimeout(adminCreditsTimer);
    adminCreditsTimer = null;
  }
}

function clearDebugModeHold() {
  if (debugModeTimer) {
    clearTimeout(debugModeTimer);
    debugModeTimer = null;
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

if (adminCreditsButton) {
  adminCreditsButton.addEventListener('pointerdown', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    if (menuUpgradesPanel && menuUpgradesPanel.classList.contains('hidden')) return;
    adminCreditsTriggered = false;
    clearAdminCreditsHold();
    adminCreditsTimer = setTimeout(() => {
      adminCreditsTriggered = true;
      awardMoney(1000);
      showAdminCreditFloater(1000);
    }, 3000);
  });

  adminCreditsButton.addEventListener('pointerup', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    clearAdminCreditsHold();
    if (!adminCreditsTriggered) {
      showAdminToast();
    }
  });

  adminCreditsButton.addEventListener('pointerleave', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    clearAdminCreditsHold();
  });

  adminCreditsButton.addEventListener('pointercancel', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    clearAdminCreditsHold();
  });
}

if (debugModeButton) {
  debugModeButton.addEventListener('pointerdown', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    if (menuHomePanel && menuHomePanel.classList.contains('hidden')) return;
    debugModeTriggered = false;
    clearDebugModeHold();
    debugModeTimer = setTimeout(() => {
      debugModeTriggered = true;
      startDebugMode();
    }, 1000);
  });

  debugModeButton.addEventListener('pointerup', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    clearDebugModeHold();
    if (!debugModeTriggered) {
      showAdminToast();
    }
  });

  debugModeButton.addEventListener('pointerleave', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    clearDebugModeHold();
  });

  debugModeButton.addEventListener('pointercancel', () => {
    if (!startScreen || startScreen.classList.contains('hidden')) return;
    clearDebugModeHold();
  });
}

styleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const style = button.dataset.style;
    if (!style) return;
    initAudio();
    applyTheme(style);
  });
});

const langButtons = document.querySelectorAll('[data-lang]');
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    if (!lang || !i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('language', lang);
    langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    applyLanguage();
  });
});

levelButtons.forEach(button => {
  button.addEventListener('click', () => {
    const level = Number(button.dataset.level);
    const isNormal = button.classList.contains('normal-level');
    if (Number.isNaN(level)) return;
    
    if (isNormal && level > maxNormalLevels) return;
    if (level !== 5 && !isNormal && level > state.unlockedLevel) return;
    state.selectedLevel = level;
    updateLevelButtons();
  });
});

upgradeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menuVisible = startScreen && !startScreen.classList.contains('hidden');
    const resultVisible = resultScreen && !resultScreen.classList.contains('hidden');
    if (!menuVisible && !resultVisible) return;
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
      localStorage.setItem('shieldUpgrades', String(shieldUpgrades));
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
      localStorage.setItem('novaLevel', String(novaLevel));
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
      localStorage.setItem('regenLevel', String(regenLevel));
      awardMoney(-cost);
      updateUpgrades();
      updateSkillLocks();
      return;
    }
    if (upgrade === 'slow') {
      if (slowLevel >= 3) return;
      const nextLevel = slowLevel + 1;
      const cost = upgradeCosts.slow[nextLevel];
      if (state.money < cost) {
        showMoneyToast();
        return;
      }
      slowLevel = nextLevel;
      localStorage.setItem('slowLevel', String(slowLevel));
      awardMoney(-cost);
      updateUpgrades();
      updateSkillLocks();
      return;
    }
    if (upgrade === 'aegis') {
      if (aegisLevel >= 3) return;
      const nextLevel = aegisLevel + 1;
      const cost = upgradeCosts.aegis[nextLevel];
      if (state.money < cost) {
        showMoneyToast();
        return;
      }
      aegisLevel = nextLevel;
      localStorage.setItem('aegisLevel', String(aegisLevel));
      awardMoney(-cost);
      updateUpgrades();
      updateSkillLocks();
      return;
    }
    if (upgrade === 'godsFinger') {
      // Toggle: si está desbloqueado, desbloquearlo; si no, desbloquearlo
      if (godsFingerUnlocked) {
        // Desbloquear (no devolver dinero, pero se mantiene la compra)
        godsFingerUnlocked = false;
        localStorage.setItem('godsFingerUnlocked', 'false');
        updateUpgrades();
        updateSkillLocks();
        return;
      }
      // Bloquear: requiere pago solo si no se ha comprado antes
      if (!godsFingerPurchased) {
        const cost = upgradeCosts.godsFinger[1]; // Solo hay un costo
        if (state.money < cost) {
          showMoneyToast();
          return;
        }
        godsFingerPurchased = true;
        localStorage.setItem('godsFingerPurchased', 'true');
        awardMoney(-cost);
      }
      // Si ya se pagó, activar sin costo
      godsFingerUnlocked = true;
      localStorage.setItem('godsFingerUnlocked', 'true');
      updateUpgrades();
      updateSkillLocks();
      return;
    }
  });
});

window.addEventListener('resize', resize);
resize();

// Keyboard shortcuts for muting
document.addEventListener('keydown', (e) => {
  // Ignore if typing in an input field
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return;
  }
  
  // M key: toggle music mute
  if (e.key === 'm' || e.key === 'M') {
    e.preventDefault();
    toggleMusicMute();
  }
  
  // S key: toggle sound effects mute
  if (e.key === 's' || e.key === 'S') {
    e.preventDefault();
    toggleSfxMute();
  }

  // B key: start/cycle boss test mode
  if (e.key === 'b' || e.key === 'B') {
    e.preventDefault();
    if (state.bossTestMode) {
      // Cycle to next entry direction
      window._bossTestCycle = (window._bossTestCycle + 1) % _bossTestEntries.length;
      startBossTest(_bossTestEntries[window._bossTestCycle]);
    } else {
      window._bossTestCycle = 0;
      startBossTest(_bossTestEntries[0]);
    }
  }

  // 1 key: destroy left launcher (boss test only)
  if (e.key === '1' && state.bossTestMode && boss.active) {
    const left = boss.parts.find(p => p.id === 'front-left');
    if (left && left.hp > 0) { left.hp = 0; updateBossBar(); }
  }
  // 2 key: destroy right launcher (boss test only)
  if (e.key === '2' && state.bossTestMode && boss.active) {
    const right = boss.parts.find(p => p.id === 'front-right');
    if (right && right.hp > 0) { right.hp = 0; updateBossBar(); }
  }
  // 3 key: reduce boss HP by 5 (boss test only)
  if (e.key === '3' && state.bossTestMode && boss.active) {
    boss.hp = Math.max(0, boss.hp - 5);
    boss.bodyFlash = 0.5;
    updateBossBar();
  }
});
document.querySelectorAll('.skill').forEach(button => {
  const label = button.querySelector('.label');
  if (label) {
    button.dataset.label = label.textContent;
  }
});
skillButtons.forEach(button => {
  button.addEventListener('animationend', event => {
    if (event.animationName === 'skill-ready-flash') {
      button.classList.remove('ready-flash');
    }
  });
});

const savedTheme = localStorage.getItem('theme') || 'default';
applyTheme(savedTheme);
loadAudioSettings();
loadProgress();

// Set active language button
langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
applyLanguage();

updateUpgradeVisibility();
updateDebugButtonsVisibility();
setMenuView('home');

requestAnimationFrame(render);

function updateCooldowns(dt) {
  skillButtons.forEach(button => {
    const skill = button.dataset.skill;
    if (!skill) return;
    const wasCoolingDown = skillState[skill] > 0;
    const remaining = Math.max(0, skillState[skill] - dt);
    skillState[skill] = remaining;
    const label = button.querySelector('.label');
    if (remaining > 0) {
      button.classList.add('cooldown');
      button.classList.remove('ready-flash');
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
      if (wasCoolingDown && !button.disabled) {
        button.classList.add('ready-flash');
      }
    }
  });
}

function setCooldown(skill) {
  skillState[skill] = getSkillCooldown(skill);
  updateCooldowns(0);
}

function resetSkillCooldowns() {
  Object.keys(skillState).forEach(skill => {
    skillState[skill] = 0;
  });
  updateCooldowns(0);
}

function updateLevelButtons() {
  levelButtons.forEach(button => {
    const level = Number(button.dataset.level);
    if (Number.isNaN(level)) return;
    const isNormal = button.classList.contains('normal-level');
    const isSurvival = button.classList.contains('survival');
    const isHardcore = button.classList.contains('hardcore');
    if (isNormal) {
      const normalUnlocked = Math.min(state.unlockedLevel, maxNormalLevels);
      button.disabled = level > normalUnlocked;
    } else if (isSurvival || isHardcore) {
      button.disabled = false;
    } else {
      button.disabled = level > state.unlockedLevel;
    }
    const canMatchLevel = !(isNormal && level > maxNormalLevels);
    button.classList.toggle('active', canMatchLevel && level === state.selectedLevel);
  });
  updateUpgradeVisibility();
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
          label.textContent = t('shieldLevel', 3);
        }
        if (status) {
          status.textContent = t('max');
        }
      } else {
        const nextLevel = shieldUpgrades + 1;
        cost = upgradeCosts.shield[nextLevel];
        if (label) {
          label.textContent = t('shieldLevel', nextLevel);
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
        label.textContent = novaLevel === 0 ? t('unlockNova') : t('novaLevel', nextLevel);
      }
      if (status) {
        const cooldown = skillCooldownLevels[nextLevel - 1];
        status.textContent = novaLevel >= 3 ? t('max') : t('cooldownS', cooldown);
      }
    } else if (upgrade === 'regen') {
      owned = regenLevel >= 3;
      const nextLevel = Math.min(3, regenLevel + 1);
      cost = upgradeCosts.regen[nextLevel];
      if (label) {
        label.textContent = regenLevel === 0 ? t('unlockRegen') : t('regenLevel', nextLevel);
      }
      if (status) {
        const cooldown = skillCooldownLevels[nextLevel - 1];
        status.textContent = regenLevel >= 3 ? t('max') : t('cooldownS', cooldown);
      }
    } else if (upgrade === 'slow') {
      owned = slowLevel >= 3;
      const nextLevel = Math.min(3, slowLevel + 1);
      cost = upgradeCosts.slow[nextLevel];
      if (label) {
        label.textContent = slowLevel === 0 ? t('unlockSlow') : t('slowLevel', nextLevel);
      }
      if (status) {
        const cooldown = skillCooldownLevels[nextLevel - 1];
        status.textContent = slowLevel >= 3 ? t('max') : t('cooldownS', cooldown);
      }
    } else if (upgrade === 'aegis') {
      owned = aegisLevel >= 3;
      const nextLevel = Math.min(3, aegisLevel + 1);
      cost = upgradeCosts.aegis[nextLevel];
      if (label) {
        label.textContent = aegisLevel === 0 ? t('unlockAegis') : t('aegisLevel', nextLevel);
      }
      if (status) {
        const cooldown = skillCooldownLevels[nextLevel - 1];
        status.textContent = aegisLevel >= 3 ? t('max') : t('cooldownS', cooldown);
      }
    } else if (upgrade === 'godsFinger') {
      owned = false; // Nunca se marca como "owned" porque se puede desbloquear
      // Solo mostrar costo si no se ha comprado antes
      cost = (godsFingerUnlocked || godsFingerPurchased) ? null : upgradeCosts.godsFinger[1];
      if (label) {
        if (godsFingerUnlocked) {
          label.textContent = t('disableGodsFinger');
        } else if (godsFingerPurchased) {
          label.textContent = t('enableGodsFinger');
        } else {
          label.textContent = t('unlockGodsFinger');
        }
      }
      if (status) {
        if (godsFingerUnlocked) {
          status.textContent = t('clickToDisable');
        } else if (godsFingerPurchased) {
          status.textContent = t('clickToEnable');
        } else {
          status.textContent = t('permanentUpgrade');
        }
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
    const hardcoreLocked = state.hardcoreLevel && startScreen.classList.contains('hidden');
    if (hardcoreLocked) {
      button.disabled = true;
      button.classList.remove('unlocked');
      button.classList.add('locked');
      const status = button.querySelector('.status');
      if (status) {
        status.textContent = t('locked');
      }
      return;
    }
    if (skill === 'nova') {
      unlocked = novaLevel > 0;
    } else if (skill === 'regen') {
      unlocked = regenLevel > 0;
    } else if (skill === 'slow') {
      unlocked = slowLevel > 0;
    } else if (skill === 'aegis') {
      unlocked = aegisLevel > 0;
    } else if (skill === 'godsFinger') {
      unlocked = godsFingerUnlocked;
    }
    button.disabled = !unlocked;
    button.classList.toggle('unlocked', unlocked);
    button.classList.toggle('locked', !unlocked);
    const status = button.querySelector('.status');
    if (status) {
      status.textContent = unlocked ? '' : t('locked');
    }
  });
}

function updateUpgradeVisibility() {
  const upgradesRow = document.getElementById('menu-upgrades');
  if (!upgradesRow) return;
  const showUpgrades = !startScreen.classList.contains('hidden') && menuUpgradesPanel && !menuUpgradesPanel.classList.contains('hidden');
  upgradesRow.classList.toggle('hidden', !showUpgrades);
}

function updateResultCredits() {
  if (!resultCredits) return;
  const label = resultCredits.querySelector('.label');
  if (label) label.textContent = t('credits', state.money);
}

function showResultScreen(type, message) {
  if (!resultScreen) return;
  // Hide the old gameover elements
  gameoverEl.classList.add('hidden');
  gameoverMenu.classList.add('hidden');
  gameoverRetry.classList.add('hidden');

  // Set title text and style
  if (resultTitle) {
    resultTitle.textContent = message || (type === 'defeat' ? t('gameOver') : t('levelComplete'));
    resultTitle.classList.remove('defeat', 'victory');
    resultTitle.classList.add(type === 'defeat' ? 'defeat' : 'victory');
  }

  // Configure action buttons based on context
  const isVictory = type === 'victory';
  const hasNextNormal = isVictory && state.level < maxNormalLevels;
  const finishedAllNormal = isVictory && state.level >= maxNormalLevels;

  // Retry: show on defeat, hide on victory
  if (resultRetry) resultRetry.classList.toggle('hidden', isVictory);
  // Next Level: show only when there's a next normal level
  if (resultNext) resultNext.classList.toggle('hidden', !hasNextNormal);
  // Hardcore & Survival: show when finished all normal levels
  if (resultHardcore) resultHardcore.classList.toggle('hidden', !finishedAllNormal);
  if (resultSurvival) resultSurvival.classList.toggle('hidden', !finishedAllNormal);

  updateResultCredits();
  updateUpgrades();
  resultScreen.classList.remove('hidden');
}

function hideResultScreen() {
  if (resultScreen) resultScreen.classList.add('hidden');
}

// Function to update debug buttons visibility
function updateDebugButtonsVisibility() {
  if (!SHOW_DEBUG_BUTTONS) {
    if (adminCreditsButton) {
      adminCreditsButton.classList.add('hidden');
      adminCreditsButton.style.display = 'none';
    }
    if (debugModeButton) {
      debugModeButton.classList.add('hidden');
      debugModeButton.style.display = 'none';
    }
  } else {
    if (adminCreditsButton) {
      adminCreditsButton.classList.remove('hidden');
      adminCreditsButton.style.display = '';
    }
    if (debugModeButton) {
      debugModeButton.classList.remove('hidden');
      debugModeButton.style.display = '';
    }
  }
}

function loadProgress() {
  const unlocked = Number(localStorage.getItem('unlockedLevel')) || 1;
  state.unlockedLevel = Math.min(Math.max(1, unlocked), levels.length);
  state.selectedLevel = Math.min(state.selectedLevel, state.unlockedLevel);
  const money = Number(localStorage.getItem('money')) || 0;
  state.money = Math.max(0, money);
  const storedUpgrades = Number(localStorage.getItem('shieldUpgrades')) || 0;
  shieldUpgrades = Math.min(Math.max(0, storedUpgrades), maxLayers);
  novaLevel = Math.min(Math.max(0, Number(localStorage.getItem('novaLevel')) || 0), 3);
  regenLevel = Math.min(Math.max(0, Number(localStorage.getItem('regenLevel')) || 0), 3);
  slowLevel = Math.min(Math.max(0, Number(localStorage.getItem('slowLevel')) || 0), 3);
  aegisLevel = Math.min(Math.max(0, Number(localStorage.getItem('aegisLevel')) || 0), 3);
  godsFingerUnlocked = localStorage.getItem('godsFingerUnlocked') === 'true';
  godsFingerPurchased = localStorage.getItem('godsFingerPurchased') === 'true';
  rebuildShields();
  updateLevelButtons();
  updateUpgrades();
  updateSkillLocks();
  updateResetVisibility();
}

function resetProgress() {
  localStorage.removeItem('unlockedLevel');
  localStorage.removeItem(survivalRecordsKey);
  localStorage.removeItem('money');
  localStorage.removeItem('shieldUpgrades');
  localStorage.removeItem('novaLevel');
  localStorage.removeItem('regenLevel');
  localStorage.removeItem('slowLevel');
  localStorage.removeItem('aegisLevel');
  localStorage.removeItem('godsFingerUnlocked');
  localStorage.removeItem('godsFingerPurchased');
  state.unlockedLevel = 1;
  state.selectedLevel = 1;
  state.money = 0;
  shieldUpgrades = 0;
  novaLevel = 0;
  regenLevel = 0;
  slowLevel = 0;
  aegisLevel = 0;
  godsFingerUnlocked = false;
  godsFingerPurchased = false;
  state.betweenLevels = false;
  rebuildShields();
  updateLevelButtons();
  updateUpgrades();
  updateSkillLocks();
  updateHud();
  updateUpgradeVisibility();
  updateResetVisibility();
  renderSurvivalRecords([]);
}

function updateResetVisibility() {
  if (!resetProgressButton) return;
  const hasProgress = (
    Number(localStorage.getItem('unlockedLevel')) > 1 ||
    (localStorage.getItem(survivalRecordsKey) || '[]') !== '[]' ||
    Number(localStorage.getItem('money')) > 0 ||
    Number(localStorage.getItem('shieldUpgrades')) > 0 ||
    Number(localStorage.getItem('novaLevel')) > 0 ||
    Number(localStorage.getItem('regenLevel')) > 0 ||
    Number(localStorage.getItem('slowLevel')) > 0 ||
    Number(localStorage.getItem('aegisLevel')) > 0 ||
    localStorage.getItem('godsFingerUnlocked') === 'true'
  );
  const showOptions = !startScreen.classList.contains('hidden') && menuOptionsPanel && !menuOptionsPanel.classList.contains('hidden');
  resetProgressButton.classList.toggle('hidden', !hasProgress || !showOptions);
}

function setMenuView(view) {
  if (!menuUpgradesPanel || !menuOptionsPanel) return;
  const showPlay = view === 'play';
  const showNormal = view === 'normal';
  const showHardcore = view === 'hardcore';
  const showSurvival = view === 'survival';
  const showUpgrades = view === 'upgrades';
  const showOptions = view === 'options';
  if (menuPlayPanel) {
    menuPlayPanel.classList.toggle('hidden', !showPlay);
  }
  if (menuNormalPanel) {
    menuNormalPanel.classList.toggle('hidden', !showNormal);
  }
  if (menuHardcorePanel) {
    menuHardcorePanel.classList.toggle('hidden', !showHardcore);
  }
  if (menuSurvivalPanel) {
    menuSurvivalPanel.classList.toggle('hidden', !showSurvival);
  }
  menuUpgradesPanel.classList.toggle('hidden', !showUpgrades);
  menuOptionsPanel.classList.toggle('hidden', !showOptions);
  if (menuHomePanel) {
    menuHomePanel.classList.toggle('hidden', view !== 'home');
  }
  updateUpgradeVisibility();
  updateDebugButtonsVisibility();
  updateResetVisibility();
}
