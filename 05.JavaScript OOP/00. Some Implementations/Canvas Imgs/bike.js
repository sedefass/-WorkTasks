(function () {
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
	ctx.fillStyle = "#fff";
	ctx.fillStyle = "#7EC6DE";
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    //tyre
    ctx.beginPath();
    ctx.arc(180, 340, 90, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();

    //tyre2
    ctx.beginPath();
    ctx.arc(680, 340, 90, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();

    //drawing the hangman
    ctx.beginPath();
    ctx.arc(400, 340, 25, 0, 2 * Math.PI, false);
    ctx.stroke();

    ctx.moveTo(390, 320);
    ctx.lineTo(370, 300);
    ctx.moveTo(410, 365);
    ctx.lineTo(430, 380);
    ctx.stroke();

    //front stick
    ctx.moveTo(680, 340);
    ctx.lineTo(610, 110);
    ctx.lineTo(630, 50);
    ctx.moveTo(610, 110);
    ctx.lineTo(530, 90);
    ctx.stroke();

    ctx.moveTo(400, 340);
    ctx.lineTo(180, 340);
    ctx.lineTo(305, 210);
    ctx.lineTo(640, 210);
    ctx.lineTo(400, 340);
    ctx.lineTo(280, 150);
    ctx.moveTo(315, 150);
    ctx.lineTo(235, 150);
    ctx.stroke();     
    
}());
