// i18n - loaded before main.js
// ── i18n ──────────────────────────────────────────────────
var i18n = {
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
    tapToBegin: 'Toca en cualquier lugar para comenzar',
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
    defaultStyle: 'Básico',
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
    returnToMainMenu: 'Volver al menú principal',
    tryExtremeMode: 'Probar modo extremo',
    infiniteMode: 'Modo infinito',
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
    tapToBegin: 'Tap anywhere to begin',
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
    defaultStyle: 'Basic',
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
    returnToMainMenu: 'Return to main menu',
    tryExtremeMode: 'Try Extreme Mode',
    infiniteMode: 'Infinite Mode',
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
    tapToBegin: 'Touchez n\'importe où pour commencer',
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
    defaultStyle: 'Basique',
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
    returnToMainMenu: 'Retour au menu principal',
    tryExtremeMode: 'Essayer le mode extrême',
    infiniteMode: 'Mode infini',
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

var currentLang = localStorage.getItem('language') || 'es';

function t(key, ...args) {
  const val = i18n[currentLang]?.[key] ?? i18n.es[key];
  return typeof val === 'function' ? val(...args) : val;
}

var LANG_SELECTOR = /^#[\w-]+$/;
function langEl(sel) {
  return LANG_SELECTOR.test(sel) ? document.getElementById(sel.slice(1)) : document.querySelector(sel);
}

var LANG_TEXT = [
  ['#admin-toast', 'notAdmin'], ['#money-toast', 'notEnoughCredits'], ['#level-locked-toast', 'levelNotAvailable'],
  ['.boss-label', 'boss'], ['.pause-title', 'paused'], ['#pause-resume', 'tapResume'], ['#pause-menu', 'returnToMenu'],
  ['#pause-confirm .confirm-title', 'returnToMenuQ'], ['#pause-confirm .confirm-text', 'pauseLoseCredits'], ['#pause-confirm-yes', 'yes'], ['#pause-confirm-no', 'cancel'],
  ['#result-retry', 'retryLevel'], ['#result-next', 'nextLevel'], ['#result-hardcore', 'playHardcore'], ['#result-survival', 'playSurvival'], ['#result-menu', 'returnToMenu'],
  ['#result-upgrades .row-title', 'upgrades'],
  ['#hardcore-unlocked', 'hardcoreUnlocked'], ['#victory .victory-title', 'congratulations'], ['#victory .victory-subtitle', 'completedAll'], ['#victory-try-hardcore', 'tryExtremeMode'], ['#victory-try-survival', 'infiniteMode'],
  ['#menu-play', 'play'], ['#menu-upgrades-button', 'upgrades'], ['#menu-options-button', 'options'],
  ['#debug-mode-button .label', 'debugMode'], ['#debug-mode-button .status', 'admin'], ['#menu-play-panel .modes-title', 'modes'],
  ['#normal-mode-toggle', 'normalMode'], ['#hardcore-mode-toggle', 'hardcoreMode'], ['#survival-mode-toggle', 'survivalMode'],
  ['#menu-normal-panel .modes-title', 'normalLevels'], ['#normal-start', 'start'], ['#menu-hardcore-panel .modes-title', 'hardcoreMode'],
  ['#menu-hardcore-panel .confirm-text', 'hardcoreDesc'], ['#hardcore-start', 'start'], ['#menu-survival-panel .modes-title', 'survivalMode'],
  ['#menu-survival-panel .modes-description', 'survivalDesc'], ['#survival-records .records-title', 'highScores'], ['#survival-start', 'start'],
  ['#menu-upgrades .row-title', 'upgrades'], ['#admin-credits .label', 'adminCreditsLabel'], ['#admin-credits .status', 'admin'],
  ['.options-title', 'options'], ['label[for="music-volume"]', 'music'], ['label[for="sfx-volume"]', 'sounds'], ['.styles-title', 'styles'],
  ['#reset-progress', 'resetProgress'], ['.language-title', 'language'], ['#confirm-reset .confirm-title', 'resetTitle'],
  ['#confirm-reset .confirm-text', 'resetText'], ['#confirm-reset-yes', 'yes'], ['#confirm-reset-no', 'cancel'],
  ['#hardcore-confirm .confirm-title', 'hardcoreConfirmTitle'], ['#hardcore-confirm .confirm-text', 'hardcoreDesc'], ['#hardcore-confirm-yes', 'hardcoreConfirmPlay'], ['#hardcore-confirm-no', 'cancel'],
  ['#gameover-menu', 'returnToMenu'], ['#gameover-retry', 'retryLevel'], ['#skills .row-title', 'abilities'], ['#pause-button .label', 'pause'], ['#debug-skip .label', 'debug']
];
var LANG_BACK = [['#play-back', 'backToMenu'], ['#normal-back', 'backToModes'], ['#hardcore-back', 'backToModes'], ['#survival-back', 'backToModes'], ['#upgrades-back', 'backToMenu'], ['#options-back', 'backToMenu'], ['#victory-close', 'returnToMainMenu']];
var LANG_BACK_HTML = '<span aria-hidden="true">&lt;</span> ';

function applyLanguage() {
  document.documentElement.lang = { es: 'es', en: 'en', fr: 'fr' }[currentLang] || 'en';
  LANG_TEXT.forEach(([sel, key]) => { const el = langEl(sel); if (el) el.textContent = t(key); });
  LANG_BACK.forEach(([sel, key]) => { const el = langEl(sel); if (el) el.innerHTML = LANG_BACK_HTML + t(key); });
  var titleBefore = document.getElementById('title-core-before');
  var titleAfter = document.getElementById('title-core-after');
  var titleP2Before = document.getElementById('title-p2-before');
  var titleP2Mid = document.getElementById('title-p2-mid');
  var titleP2After = document.getElementById('title-p2-after');
  if (titleBefore && titleAfter) {
    var full = t('gameTitle');
    var parts = full.split(/\s+/);
    var line1 = parts[0] || '';
    var line2 = parts.slice(1).join(' ') || '';
    var oIdx = line1.indexOf('o');
    titleBefore.textContent = oIdx >= 0 ? line1.slice(0, oIdx) : line1;
    titleAfter.textContent = oIdx >= 0 ? line1.slice(oIdx + 1) : '';
    if (titleP2Before && titleP2Mid && titleP2After) {
      var firstO = line2.indexOf('o');
      var secondO = line2.indexOf('o', firstO + 1);
      if (firstO >= 0 && secondO >= 0) {
        titleP2Before.textContent = line2.slice(0, firstO);
        titleP2Mid.textContent = line2.slice(firstO + 1, secondO);
        titleP2After.textContent = line2.slice(secondO + 1);
      } else if (firstO >= 0) {
        titleP2Before.textContent = line2.slice(0, firstO);
        titleP2Mid.textContent = line2.slice(firstO + 1);
        titleP2After.textContent = '';
      } else {
        titleP2Before.textContent = line2;
        titleP2Mid.textContent = '';
        titleP2After.textContent = '';
      }
    }
  }
  document.querySelectorAll('.normal-level').forEach(btn => {
    const lv = Number(btn.dataset.level);
    if (!Number.isNaN(lv)) btn.textContent = t('levelN', lv);
  });
  const styleCards = { default: ['defaultStyle', 'defaultDesc'], retro: ['retroStyle', 'retroDesc'], neon: ['neonStyle', 'neonDesc'], forge: ['forgeStyle', 'forgeDesc'] };
  Object.entries(styleCards).forEach(([key, [nameKey, descKey]]) => {
    const card = document.querySelector(`.style-card[data-style="${key}"]`);
    if (card) {
      const nm = card.querySelector('.style-name');
      if (nm) nm.textContent = t(nameKey);
      const ds = card.querySelector('.style-desc');
      if (ds) ds.textContent = t(descKey);
    }
  });
  skillButtons.forEach(button => {
    const lbl = button.querySelector('.label');
    if (lbl) button.dataset.label = lbl.textContent;
  });
  updateHud();
  updateUpgrades();
  updateSkillLocks();
  renderSurvivalRecords();
}