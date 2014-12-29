var el = document.getElementById('c');
var ctx = el.getContext('2d');
var isDrawing;
var posX;
var posY;

document.addEventListener( "keydown", doKeyDown, true);

function doKeyDown(e) {
    console.log("finalee" + e.clientX, e.clientY, posX, posY );
    ctx.font = '18px Pacifico';
    ctx.fillStyle = "#FF0000";
    ctx.fillText(String.fromCharCode(e.keyCode), posX, posY);
    posX += 10;
}

el.onmousedown = function(e) {
  isDrawing = true;
  ctx.lineWidth = 3;
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.moveTo(e.clientX, e.clientY);
}

el.onmousemove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
}

el.onmouseup = function(e) {
  isDrawing = false;
  posX = e.clientX;
  posY = e.clientY;
}

function save() {
  var canvas  = document.getElementById("c");
  var dataUrl = canvas.toDataURL();
  window.open(dataUrl, "toDataURL() image", "width=400, height=300");
}
/*
http://www.codicode.com/art/how_to_draw_on_a_html5_canvas_with_a_mouse.aspx
http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-simple
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
http://perfectionkills.com/exploring-canvas-drawing-techniques/
http://www.homeandlearn.co.uk/JS/move_box_keyboard.txt
http://www.homeandlearn.co.uk/JS/html5_canvas_mouse_events.html
*/