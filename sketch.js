let img1, img2, img3; // Images
let canvasHeight = 3000; // Total virtual canvas height for scrolling

function preload() {
  // Load your images from the public folder
  img1 = loadImage('img1.png');
  img2 = loadImage('img2.png');
  img3 = loadImage('img3.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas');
  noLoop(); // No need for continuous drawing; redraw only on scroll
}

function draw() {
  clear(); // Clear the canvas

  let scrollY = window.scrollY; // Current scroll position

  // Calculate parallax offsets for each image layer
  let offset1 = scrollY * 0.2; // Slowest
  let offset2 = scrollY * 0.5; // Medium
  let offset3 = scrollY * 0.8; // Fastest

  // Draw images with scaling
  image(img1, 0, -height + offset1, width, height); // Background
  image(img2, 0, -height + offset2, width, height); // Middle ground
  image(img3, 0, -height + offset3, width, height); // Foreground
}

// Trigger redraw on scroll
window.addEventListener('scroll', () => {
  redraw();
});

// Adjust canvas size when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
