
var ball;
var pipes = [];
function setup() {
    createCanvas(400, 600);
    ball = new Ball();  
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    
    

    for(var i = pipes.length-1; i>=0; i-- ){
        pipes[i].show();
        pipes[i].update();
        if(pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
        if(pipes[i].hits(ball)){
            console.log("FUCK YOU");
        }
    }

    ball.show();
    ball.update();

    if(frameCount % 80 == 0){
        pipes.push(new Pipe());
    }

    
}

function keyPressed(){
    if(key = ' '){
        ball.up();
    }
}

