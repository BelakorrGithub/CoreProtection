// Theme helpers - requires: config, dom

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

function readThemeColors() {
  var styles = getComputedStyle(document.body);
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
  var theme = getThemeKey();
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
  var theme = getThemeKey();
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
