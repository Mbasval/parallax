let img1, img2, img3; // Images

function preload() {
  // Load your images from the public folder
  img1 = loadImage('img1.jpg');
  img2 = loadImage('img2.jpg');
  img3 = loadImage('img3.jpg');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas');
  noLoop(); // No continuous draw loop is needed for this effect
}

function draw() {
  clear();
  let scrollY = window.scrollY; // Get the current scroll position

  // Background layer (slowest movement)
  let y1 = scrollY * 0.2;
  image(img1, 0, -height + y1, width, height);

  // Middle layer (medium movement)
  let y2 = scrollY * 0.5;
  image(img2, 0, -height + y2, width, height);

  // Foreground layer (fastest movement)
  let y3 = scrollY * 0.8;
  image(img3, 0, -height + y3, width, height);
}

// Redraw the canvas on window scroll
window.addEventListener('scroll', () => {
  redraw();
});

// Ensure canvas resizes properly
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
