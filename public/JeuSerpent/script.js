window.onload = function()
{
    var canvasWidth = 900;
    var blocksize = 30;
    var canvasHeight = 600;
    var ctx;
    var delay = 100;
    var snakee;
    var applee;
    var widthInBlocks = canvasWidth/blocksize;
    var heightInBlocks = canvasHeight/blocksize;
    var score;
    var timeout;

    init();

    function init()
    {
    var canvas = document.createElement('canvas')
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.border = "30px solid gray";
    canvas.style.margin = "50px auto";
    canvas.style.display =  "block";
    canvas.style.backgroundColor = "#dddd";
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    snakee = new snake([[6 , 4],[5 , 4],[4 , 4],[3 , 4],[2 , 4]],"right");
    applee = new Apple([10 , 10]);
    score = 0;
    refreshCanvas();
    }

    function refreshCanvas()
        {
            snakee.advance();
            if(snakee.checkCollision())
            {
                gameOver();
            }
            else
            {
             if(snakee.EatingApple(applee))
             {
                score++;
                snakee.ateApple = true;
                do
                {
                applee.setNewPosition();
                }
                while(applee.isOnSnake(snakee))
             }
             ctx.clearRect(0 , 0 , canvasWidth , canvasHeight);
             drawScore();
             snakee.draw();
             applee.draw();
             timeout = setTimeout(refreshCanvas,delay);
            }
        }

        function gameOver()
        {
            ctx.save();
            ctx.font = "bold 60px sans-serif ";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.strokeStyle = "white";
            ctx.lineWidth = 5;
            var centerX = canvasWidth / 2 ;
            var centerY = canvasHeight / 2 ;
            ctx.strokeText("GameOver", centerX , centerY-180);
            ctx.fillText("GameOver", centerX , centerY-180);

            ctx.font = "bold 30px sans-serif ";
            ctx.strokeText("Appuyer sur la touche espace pour rejouer" , centerX , centerY-120);
            ctx.fillText("Appuyer sur la touche espace pour rejouer" , centerX , centerY-120);
            ctx.restore();
        }

        function restart()
        {
            snakee = new snake([[6 , 4],[5 , 4],[4 , 4],[3 , 4],[2 , 4]],"right");
            applee = new Apple([10 , 10]);
            score = 0;
            clearTimeout(timeout);
            refreshCanvas();
        }

        function drawScore()
        {
            ctx.save();
            ctx.font = "bold 200px sans-serif ";
            ctx.fillStyle = "gray";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            var centerX = canvasWidth / 2 ;
            var centerY = canvasHeight / 2 ;
            ctx.fillText(score.toString(), centerX , centerY);
            ctx.restore();
        }

        function darwblock(ctx , position)
        {
            var x = position[0] * blocksize;
            var y = position[1] * blocksize;
            ctx.fillRect(x , y , blocksize , blocksize);
        }

        function snake(body,direction)
        {
            this.body = body,
            this.direction = direction;
            this.ateApple = false;
            this.draw = function()
            {
                ctx.save();
                ctx.fillStyle = "#ff0000";
                for(var i = 0; i<this.body.length; i++)
                {
                    darwblock(ctx , this.body[i]);
                }
                ctx.restore();
            };
            this.advance = function()
            {
                var nextposition = this.body[0].slice();
                switch(this.direction)
                {
                    case"left":
                    nextposition[0] -=1;
                    break;
                    case"right":
                    nextposition[0] +=1;
                    break;
                    case"down":
                    nextposition[1] +=1;
                    break;
                    case"up":
                    nextposition[1] -=1;
                    break;
                    default:
                    throw("invalide direction");
                }
                this.body.unshift(nextposition);
                if(!this.ateApple)
                {
                this.body.pop();
                }
                else
                {
                    this.ateApple = false;
                }
            
            };

            this.setdirection = function(newdirection)
            {
                var alloweddirection;
                switch(this.direction)
                {
                    case"left":
                    case"right":
                    alloweddirection = ["up" , "down"];
                    break;
                    case"down":
                    case"up":
                    alloweddirection = ["left" , "right"];
                    break;
                    default:
                        throw("invalide direction");
                }
                if(alloweddirection.indexOf(newdirection)>-1)
                {
                    this.direction  = newdirection;
                }
            };
            this.checkCollision = function()
            {
                var wallcollision = false;
                var snakeCollision = false;
                var head = this.body[0];
                var rest = this.body.slice(1);
                var snakeX = head[0];
                var snakeY = head[1];
                var minX = 0;
                var minY = 0;
                var maxX = widthInBlocks-1;
                var maxY = heightInBlocks-1;
                var isNotBetweenHorizontalWalls = snakeX<minX || snakeX>maxX;
                var isNotBetweenVerticalWalls = snakeY<minY || snakeY>maxY;

                if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)
                {
                    wallcollision = true;
                }

                for (var i = 0; i<rest.length ; i++)
                {
                    if(snakeX == rest[i][0] && snakeY == rest[i][1])
                    {
                        snakeCollision = true;
                    }
                }

                return wallcollision || snakeCollision;
            };
            this.EatingApple = function(appleToEat)
            {
                var head = this.body[0];
                if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])
                {
                    return true;
                }
                else
                {
                    return false;
                }
            };
        }

        function Apple (position)
        {
            this.position = position;
            this.draw = function()
            {
                ctx.save();
                ctx.fillStyle = "#33cc33";
                ctx.beginPath();
                var reduis = blocksize/2;
                var x = this.position[0]*blocksize+reduis;
                var y = this.position[1]*blocksize+reduis;
                ctx.arc(x,y,reduis,0,Math.PI*2, true);
                ctx.fill();
                ctx.restore();
            };
            this.setNewPosition = function()
            {
                var newX = Math.round(Math.random() * (widthInBlocks - 1));
                var newY = Math.round(Math.random() * (heightInBlocks - 1));
                this.position =  [newX , newY];

            };
            this.isOnSnake = function(snakeToCheck)
            {
                var isOnSnake = false;
                for(var i=0 ; i<snakeToCheck.body.length ; i++)
                {
                    if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1])
                    {
                        isOnSnake = true;
                    }
                }
                return isOnSnake;
            };
        }

document.onkeydown = function handlekeydown(e)
{
    var key = e.keyCode;
    var newdirection;
    switch(key)
    {
        case 37:
            newdirection = "left";
            break;

        case 38:
            newdirection = "up";
            break;

        case 39:
            newdirection= "right";
            break;

        case 40:
            newdirection = "down";
            break;
        case 32:
            restart();
            return;

        default:
            return;
    }

    snakee.setdirection(newdirection);
}
}

