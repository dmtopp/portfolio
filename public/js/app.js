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

    app.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    app.x = 0;
    app.y = window.innerHeight;
    app.dx = 45;
    app.dy = 60;
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
                 + Math.floor(this.randomRange(0, 255)) + ', 0.4)';
}

function logDimensions() {
  console.log('Canvas width: ' + canvas.width);
  console.log('Canvas height: ' + canvas.height);
  console.log('Window.innerwidth: ' + window.innerWidth);
  console.log('Window.innerHeight: ' + window.innerHeight);
}

function animationLoop() {
  app.intervalId = requestAnimationFrame(animationLoop);
  if (app.intervalId % 5 === 0) {
    app.y = app.y - app.dy;
    app.context.fillStyle = returnRandomRGBA();
    app.context.fillRect(app.x, app.y, app.dx, app.dy);
    if (app.y < -10) {
      app.y = 0;
      app.dy *= -1;
      app.x = window.innerWidth - app.dx;
    }
  }
}

function drawLines(numLines) {

}
