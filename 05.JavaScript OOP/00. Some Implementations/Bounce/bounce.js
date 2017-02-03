(function () {
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");

    function Ball(radius) {
        this.x = 15;
        this.y = 50;
        this.radius = radius;
        this.directionX = 2;
        this.directionY = 2;
    }

    var theBall = new Ball(15);

    function reDraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(theBall.x, theBall.y, theBall.radius, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        if (theBall.x < 15 || theBall.x > canvas.width - 15) {
            theBall.directionX = -(theBall.directionX);
        } 
        else if (theBall.y < 15 || theBall.y > canvas.height - 15) {
            theBall.directionY = -(theBall.directionY);
        }

        theBall.x += theBall.directionX;
        theBall.y += theBall.directionY;
    }

    setInterval(reDraw, 3);
}());