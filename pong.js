var WIDTH=700, HEIGHT=600, pi=Math.PI;
var canvas, ctx, keystate;
var player, ai, ball;

player = {
  x: null,
  y: null,
  width: 20,
  height: 100,

  update: function() {},
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

ai = {
  x: null,
  y: null,
  width: 20,
  height: 100,

  update: function() {},
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

ball = {
  x: null,
  y: null,
  side: 20,

  update: function() {},
  draw: function() {
    ctx.fillRect(this.x, this.y, this.side, this.side);
};

function main() {
    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    init();

    function loop() {
      update();
      draw();
      window.requestAnimationFrame(loop, canvas);
    }
}
window.requestAnimationFrame(loop, canvas);

function init() {
  player.x = player.width;
  player.y = (HEIGHT - player.height)/2;

  ai.x = WIDTH -
}
function update() {}
function draw() {}
