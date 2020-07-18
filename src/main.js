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

function drawPoint(point) {
  context.beginPath();
  context.arc(point.x, point.y, 4, 0, 2 * Math.PI, false);
  context.fillStyle = '#FFF';
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

function createConvexHull(points) {
  // Get the last point on left.
  
} 

drawRandomPoints(10);
createConvexHull(points);

