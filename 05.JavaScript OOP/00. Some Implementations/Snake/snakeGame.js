(function () {
    //TODO: make consts for canvas dementions!
    var snake = new function() { 
        this.tail = [];
        this.moveDirection = "left";
        this.tail.push(new Cord(15, 15));
        this.tail.push(new Cord(30, 15));
        this.tail.push(new Cord(45, 15));
        this.getLonger = false;
        this.score = 0;

        this.move = function () {
            if(this.moveDirection == "left"){
                this.tail.push(new Cord(this.tail[this.tail.length - 1].x + 15, this.tail[this.tail.length - 1].y));
            }
            else if(this.moveDirection == "up"){
                this.tail.push(new Cord(this.tail[this.tail.length - 1].x, this.tail[this.tail.length - 1].y - 15));
            }
            else if(this.moveDirection == "right"){
                this.tail.push(new Cord(this.tail[this.tail.length - 1].x - 15, this.tail[this.tail.length - 1].y));
            }
            else if(this.moveDirection == "down"){
                this.tail.push(new Cord(this.tail[this.tail.length - 1].x, this.tail[this.tail.length - 1].y + 15));
            }

            if(this.getLonger == false){
                this.tail.splice(0,1);  
            }
            this.getLonger = false;
        }
        
        this.changeDirection = function () {
            if(event.keyCode == 100 && this.moveDirection != "right"){
                this.moveDirection = "left";
            } 
            else if(event.keyCode == 119 && this.moveDirection != "down"){
                this.moveDirection = "up";
            }
            else if(event.keyCode == 97 && this.moveDirection != "left"){
                this.moveDirection = "right";
            }
            else if(event.keyCode == 115 && this.moveDirection != "up"){
                this.moveDirection = "down";
            }
        }
    }
    
    var food = new function() {
        this.cord = new Cord(30, 30);
        //TODO: make color random
        this.color = "green";
        
        this.changeLocation = function () {
            var newX = Math.floor(Math.random()*32+1)*15;
            var newY = Math.floor(Math.random()*32+1)*15;
            this.cord = new Cord(newX, newY);
        }
    }

    displayTopScores();

    setInterval(function(){gameLoop(snake, food)}, 150);
    
    window.onkeypress = function(){ snake.changeDirection() };
}());

function displayTopScores(){
    //TODO: Order the top scores by scores
    var storages = "<h3>Top players:</h3> <br>";
    for (var i = 0; i <= localStorage.length; i++) {
        key = localStorage.key(i);  
        storages += key + " : " + localStorage.getItem(key) + "<br>";
    };
    var div = document.createElement("div");
    div.innerHTML = storages;
    document.body.appendChild(div);
}

function Cord (x, y) {
    this.x = x;
    this.y = y;
}

function gameLoop(snake, food){
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
    //Reset console every time
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 500, 500);

    ctx.lineWidth = 2;
    ctx.beginPath();
    //Print snake
    for (var i = 0; i < snake.tail.length; i++) {
        ctx.rect(snake.tail[i].x, snake.tail[i].y, 15, 15);
    };

    //Print food
    ctx.fillStyle = food.color;
    ctx.fillRect(food.cord.x, food.cord.y, 15, 15);
    //Check for eatring food
    if(snake.tail[snake.tail.length - 1].x == food.cord.x &&
       snake.tail[snake.tail.length - 1].y == food.cord.y ){
       food.changeLocation();
       snake.getLonger = true; 
       snake.score++;
    }
    //Check for game end
    //TODO: check for snake beat herself.
    if(snake.tail[snake.tail.length - 1].x >= 500 || snake.tail[snake.tail.length - 1].x <= 0 ||
    snake.tail[snake.tail.length - 1].y <= 0 || snake.tail[snake.tail.length - 1].y >= 500){
        var username = prompt("Your score is: " + snake.score + "\nEnter your nickname:");
        localStorage.setItem(username ? username : '[nobody]', snake.score);
        location.reload();
    }

    ctx.stroke();

    snake.move();
}