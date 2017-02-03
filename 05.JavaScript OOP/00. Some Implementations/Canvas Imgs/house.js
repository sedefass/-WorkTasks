(function () {
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
	ctx.fillStyle = "#fff";
	ctx.fillStyle = "#CC8FB6";
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    //body
    ctx.fillRect(280, 250, 450, 330);
    ctx.strokeRect(280, 250, 450, 330);

    //roof
    ctx.beginPath();
    ctx.moveTo(280, 250);
    ctx.lineTo(500, 1);
    ctx.lineTo(730, 250);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //Windows   
    ctx.beginPath();
    ctx.lineWidth = 50;
    ctx.moveTo(300, 300);
    ctx.lineTo(380, 300);

    ctx.moveTo(390, 300);
    ctx.lineTo(470, 300);

    ctx.moveTo(300, 360);
    ctx.lineTo(380, 360);

    ctx.moveTo(390, 360);
    ctx.lineTo(470, 360);
    ctx.stroke();

    ctx.moveTo(515, 300);
    ctx.lineTo(595, 300);

    ctx.moveTo(600, 300);
    ctx.lineTo(680, 300);

    ctx.moveTo(515, 355);
    ctx.lineTo(595, 355);

    ctx.moveTo(600, 355);
    ctx.lineTo(680, 355);
    ctx.stroke();


    ctx.moveTo(515, 300);
    ctx.lineTo(595, 300);
    //second above part
    ctx.moveTo(600, 300);
    ctx.lineTo(680, 300);
    //first bottom
    ctx.moveTo(515, 355);
    ctx.lineTo(595, 355);
    //second bottom
    ctx.moveTo(600, 355);
    ctx.lineTo(680, 355);
    ctx.stroke();

    ctx.moveTo(515, 445);
    ctx.lineTo(595, 445);
    //second above part
    ctx.moveTo(600, 445);
    ctx.lineTo(680, 445);
    //first bottom
    ctx.moveTo(515, 500);
    ctx.lineTo(595, 500);
    //second bottom
    ctx.moveTo(600, 500);
    ctx.lineTo(680, 500);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fillRect(575, 70, 50, 135);
    ctx.strokeRect(575, 70, 50, 135);
    ctx.stroke();
    ctx.closePath();
    ctx.lineWidth = 9;
    ctx.save();
    ctx.scale(0.95, 0.3);
    ctx.beginPath();
    ctx.arc(632, 230, 24, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.fillRect(585, 670, 80, 80);
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeRect(325, 457, 124, 120);
    ctx.save();
    ctx.scale(1, 0.6);
    ctx.beginPath();
    ctx.arc(387, 770, 62, 0, Math.PI, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(387, 423);
    ctx.lineTo(387, 575);
    ctx.stroke();
}());
