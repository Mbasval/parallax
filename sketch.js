let img1, img2, img3;

function preload() {
  // Load your images
  img1 = loadImage('img1.png');
  img2 = loadImage('img2.png');
  img3 = loadImage('img3.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas');
}

function draw() {
  // Calculate parallax effect based on scroll position
  let scrollY = window.scrollY;

  // Draw background image (slow movement)
  image(img1, 0, scrollY * 0.2, width, height);

  // Draw middle image (medium movement)
  image(img2, 0, scrollY * 0.5, width, height);

  // Draw foreground image (fast movement)
  image(img3, 0, scrollY * 0.8, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
