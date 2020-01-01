document.addEventListener('DOMContentLoaded', function(){

  let canvas = document.getElementById('photoElectricEffect');
  let ctx = canvas.getContext('2d');

  let cw = canvas.width;
  let ch = canvas.height;

  function drawPhoton(){
    ctx.beginPath();
    ctx.arc(430, 430, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#0000ff';
    ctx.fill();
  }

  var photon = new Image();

  photon.addEventListener('load', function(){
    let pw = photon.width / 6;
    let ph = photon.height;

    ctx.translate((cw - pw / 2) / 2, 20 + ph / 2);
    console.log((cw - pw / 2) / 2, 20 + ph / 2);
    ctx.rotate(45 * Math.PI / 180);
    ctx.drawImage(photon, 4 * pw, 0, pw, ph, (cw - pw ) / 2, 20, pw / 6, ph / 6);
    ctx.rotate(-45 * Math.PI / 180);
    ctx.translate(-(cw - pw / 2) / 2, -20 - ph /2);
  });
  photon.src = 'images/photons.png';
  drawPhoton();

});

/*
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
*/
