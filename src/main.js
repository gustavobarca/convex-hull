const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = 600;
const height = 600;
const points = [];

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function drawPoint(point, color = '#FFF') {
  const radius = 4;

  context.clearRect(point.x, height - point.y, radius, radius);

  context.beginPath();
  context.arc(point.x, height - point.y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}

function drawRandomPoints(quantity) {
  for (let i = 0; i < quantity; i++) {
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;

    const point = new Point(randomX, randomY);

    points.push(point);
    drawPoint(point);
  }
}

/**
 * Math functions
 */

function crossProduct() {
  // Implement cross product logic.
}

/**
 * Convex Hull methods.
 */

function jarvisMarch(points) {
  // Get the first Y point.
  const decrescent = [...points].sort((a, b) => a.y - b.y);
  console.log(points);
  const firstPoint = decrescent[0];

  drawPoint(firstPoint, 'green');
}

drawRandomPoints(10);
jarvisMarch(points);

