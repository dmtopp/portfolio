var app = {
  x: 0,
  y: window.innerHeight,
  dx: 45,
  dy: 60
};

window.onload = function() {
  console.log('The window is loaded!');
  smoothScroll.init();
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


  var myspaceBtn = document.getElementById('myspace');
  var madeMySpaceJoke = false;

  myspaceBtn.addEventListener('click', function() {
    var p = document.createElement('p');
    p.innerHTML = 'Just kidding, I don\'t really have a MySpace.';
    p.className = 'animated fadeIn';
    if (!madeMySpaceJoke) {
      document.getElementById('contact').appendChild(p);
      madeMySpaceJoke = true;
    }
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
  console.log('loop');
  app.intervalId = requestAnimationFrame(animationLoop);
  if (app.intervalId % 5 === 0) {
    app.y = app.y - app.dy;
    app.context.fillStyle = returnRandomRGBA();
    app.context.fillRect(app.x, app.y, app.dx, app.dy);
    if (app.y < -10) {
      app.y = 0;
      app.dy *= -1;
      app.x = window.innerWidth - app.dx;
    } else if (app.y > window.innerHeight + 250) {
      cancelAnimationFrame(app.intervalId);
    }
  }
}
