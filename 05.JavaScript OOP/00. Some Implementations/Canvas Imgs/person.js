(function () {
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#95DAD5";
    ctx.lineWidth = 1;
    
    //Head
    drawElipse(ctx, 90, 148, 45, 0, 2 * Math.PI, false, 1, 0.90);

    //Eyes
    drawElipse(ctx, 65, 180, 8, 0, 2 * Math.PI, false, 1, 0.65);
    drawElipse(ctx, 97, 180, 8, 0, 2 * Math.PI, false, 1, 0.65);

    ctx.fillStyle = "#1D565B";
    drawElipse(ctx, 98, 117, 3.5, 0, 2 * Math.PI, false, 0.60, 1);
    drawElipse(ctx, 152, 117, 3.5, 0, 2 * Math.PI, false, 0.60, 1);

    //Nose
    ctx.moveTo(80, 118);
    ctx.lineTo(70, 140);
    ctx.moveTo(80, 140);
    ctx.lineTo(70, 140);
    ctx.stroke();

    //Mouth
    ctx.save();
    rotateFromPoint(ctx, 30, 525, 0.15);
    ctx.scale(1, 0.30);
    ctx.beginPath();
    ctx.arc(30, 495, 20, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.restore();
    
    //Cylinder
    ctx.strokeStyle = "black";
    drawElipse(ctx, 90, 360, 50, 0, 2 * Math.PI, true, 1, 0.25);
    ctx.fillRect(ctx, 60, 20, 60, 60);
    drawElipse(ctx, 90, 200, 30, 0, 2 * Math.PI / 2, false, 1, 0.40);
    ctx.fillRect(60, 20, 60, 60);
    drawElipse(ctx, 90, 50, 30, 0, 2 * Math.PI, false, 1, 0.40);

    //Thanks stack overflow for this functions
    function drawElipse(ctx, x, y, radius, start, end, clockwise, scalex, scaley) {
        ctx.save();
        ctx.scale(scalex, scaley);
        ctx.beginPath();
        ctx.arc(x, y, radius, start, end, clockwise);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    function rotateFromPoint (ctx, x, y, r) {
        ctx.translate(x, y);
        ctx.rotate(r);
        ctx.translate(-x, -y);
    }
}());
