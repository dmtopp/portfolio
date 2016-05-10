var app = {
  x: 0,
  y: window.innerHeight,
  dx: 45,
  dy: 60
};

window.onload = function() {
  console.log('The window is loaded!');
  var canvas = document.getElementById('canvas');
  app.context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  animationLoop();

  window.addEventListener('resize', function() {
    cancelAnimationFrame(app.intervalId);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animationLoop();
  })




}

function randomRange(min,max){
  if (min === 0) return Math.random() * max;
  else return min + Math.random() * (max - min);
}

function returnRandomRGBA() {
  return 'rgba(' + Math.floor(this.randomRange(0, 255)) + ','
                 + Math.floor(this.randomRange(0, 255)) + ','
                 + Math.floor(this.randomRange(0, 255)) + ', 0.2)';
}

function logDimensions() {
  console.log('Canvas width: ' + canvas.width);
  console.log('Canvas height: ' + canvas.height);
  console.log('Window.innerwidth: ' + window.innerWidth);
  console.log('Window.innerHeight: ' + window.innerHeight);
}

function animationLoop() {
  app.intervalId = requestAnimationFrame(animationLoop);

  // app.context.beginPath();
  // app.context.moveTo(app.x, app.y);
  // app.context.strokeStyle = 'rgba(0, 0, 0, 0.2)';
  // app.context.lineTo(app.x + 1, app.y + 1);
  // app.context.stroke();
  // app.context.closePath();

  // app.x += app.dx;
  app.y -= app.dy;

  if (app.x > canvas.width) app.dx *= 0;
  else if (app.y < 0) {
    app.x += 45;
    app.y = window.height;
  }

  app.context.fillStyle = returnRandomRGBA();
  app.context.fillRect(app.x, app.y, 45, 60);
  // app.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function drawLines(numLines) {

}
