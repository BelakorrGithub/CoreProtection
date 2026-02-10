// Boss images and hitbox helpers - requires: config, dom, state
// Level 3 -> spaceship1, Level 6 -> spaceship2, Level 9 -> spaceship3

var bossImageSets = [
  { normal: 'img/spaceship1.png', left: 'img/spaceship1_left_destroyed.png', right: 'img/spaceship1_right_destroyed.png', both: 'img/spaceship1_both_destroyed.png' },
  { normal: 'img/spaceship2.png', left: 'img/spaceship2_left_destroyed.png', right: 'img/spaceship2_right_destroyed.png', both: 'img/spaceship2_both_destroyed.png' },
  { normal: 'img/spaceship3.png', left: 'img/spaceship3_left_destroyed.png', right: 'img/spaceship3_right_destroyed.png', both: 'img/spaceship3_both_destroyed.png' }
];

var bossImages = bossImageSets.map(function(set) {
  return {
    normal: (function() { var i = new Image(); i.src = set.normal; return i; })(),
    leftDestroyed: (function() { var i = new Image(); i.src = set.left; return i; })(),
    rightDestroyed: (function() { var i = new Image(); i.src = set.right; return i; })(),
    bothDestroyed: (function() { var i = new Image(); i.src = set.both; return i; })()
  };
});

// Legacy single reference for code that uses bossImage (fallback to set 0)
var bossImage = bossImages[0].normal;
var bossImageLeftDestroyed = bossImages[0].leftDestroyed;
var bossImageRightDestroyed = bossImages[0].rightDestroyed;
var bossImageBothDestroyed = bossImages[0].bothDestroyed;

function getBossImageSetIndex() {
  var level = (typeof state !== 'undefined' && state.level) ? state.level : 3;
  if (level === 3) return 0;
  if (level === 6) return 1;
  if (level === 9) return 2;
  return 0;
}

function getBossCurrentImage() {
  var set = bossImages[getBossImageSetIndex()];
  var left = boss.parts.find(function(p) { return p.id === 'front-left'; });
  var right = boss.parts.find(function(p) { return p.id === 'front-right'; });
  var leftDead = left && left.hp <= 0;
  var rightDead = right && right.hp <= 0;
  if (leftDead && rightDead) return set.bothDestroyed;
  if (leftDead) return set.leftDestroyed;
  if (rightDead) return set.rightDestroyed;
  return set.normal;
}

var bossHitboxPoly = [
  { x: 0.12, y: 0.03 }, { x: 0.35, y: 0.03 }, { x: 0.35, y: 0.12 }, { x: 0.42, y: 0.07 },
  { x: 0.58, y: 0.07 }, { x: 0.65, y: 0.12 }, { x: 0.65, y: 0.03 }, { x: 0.88, y: 0.03 },
  { x: 0.97, y: 0.20 }, { x: 0.99, y: 0.34 }, { x: 0.99, y: 0.52 }, { x: 0.90, y: 0.58 },
  { x: 0.73, y: 0.63 }, { x: 0.62, y: 0.76 }, { x: 0.55, y: 0.90 }, { x: 0.50, y: 0.97 },
  { x: 0.45, y: 0.90 }, { x: 0.38, y: 0.76 }, { x: 0.27, y: 0.63 }, { x: 0.10, y: 0.58 },
  { x: 0.01, y: 0.52 }, { x: 0.01, y: 0.34 }, { x: 0.03, y: 0.20 }
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
  var cx = boss.x + boss.width / 2;
  var cy = boss.y + boss.height / 2;
  var rotation = getBossRotation();
  var dims = getBossImageDims();
  var imgW = dims.imgW, imgH = dims.imgH;
  var localX = normX * imgW - imgW / 2;
  var localY = normY * imgH - imgH / 2;
  var cos = Math.cos(rotation);
  var sin = Math.sin(rotation);
  return {
    x: cx + localX * cos - localY * sin,
    y: cy + localX * sin + localY * cos
  };
}

function screenToShip(sx, sy) {
  var cx = boss.x + boss.width / 2;
  var cy = boss.y + boss.height / 2;
  var rotation = getBossRotation();
  var dx = sx - cx;
  var dy = sy - cy;
  var cos = Math.cos(-rotation);
  var sin = Math.sin(-rotation);
  var localX = dx * cos - dy * sin;
  var localY = dx * sin + dy * cos;
  var dims = getBossImageDims();
  var imgW = dims.imgW, imgH = dims.imgH;
  return {
    x: (localX + imgW / 2) / imgW,
    y: (localY + imgH / 2) / imgH
  };
}

// Black hole projectile (level 9 boss special) - image for drawing
var blackHoleImage = new Image();
blackHoleImage.src = 'img/black_hole.png';

function pointInPolygon(px, py, poly) {
  var inside = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    var xi = poly[i].x, yi = poly[i].y;
    var xj = poly[j].x, yj = poly[j].y;
    if ((yi > py) !== (yj > py) && px < (xj - xi) * (py - yi) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}
