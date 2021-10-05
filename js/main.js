// code for animating the pikachu

const field = document.getElementsByTagName("body");
const ball = document.getElementById("ball");


const maxX = field[0].clientWidth - ball.offsetWidth;
const maxY = field[0].clientHeight - ball.offsetHeight;

const duration = 5; // seconds
const gridSize = 500; // pixels

let start = null;

function bounce(time) {
  let progress, x, y;
  if (start === null)
    start = time;

  progress = (time - start) / duration / 1000;

  x = progress * maxX / gridSize;
  y = 0.5 * Math.sin(x);


  ball.style.left = Math.min(maxX*2, gridSize * x) + "px";
  ball.style.bottom = maxY/8 + (gridSize * y) + "px";
  ball.style.top = maxY/8 + (gridSize * y) + "px";

  if (progress >= 1.5) {
    start = null;
    // requestAnimationFrame(step);

  }
  requestAnimationFrame(bounce);
}
requestAnimationFrame(bounce);
