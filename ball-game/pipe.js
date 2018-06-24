class Pipe{
    constructor(){
        this.winWidth = random(100, 350);  //  --------|----------|--------
        this.start = random(0,height/3); //   >>>>>>s       s+w<<<<<<<<<<<
        this.x = width;                   //         |------| == (0,start), ((start + winWidth), height)
        this.w = 20;
        this.speed = 1;
        this.highlight = false;
    }

    show(){
        fill(255);
        if(this.highlight){
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w,  this.start);
        rect(this.x, this.start+this.winWidth, this.w, height);
    }

    update(){
        this.x -= this.speed;
    }

    offscreen(){
        return (this.x< -this.w);
    }

    hits(ball){
        if ((ball.y<this.start) ||(ball.y>(this.start+this.winWidth)) &&
              (ball.x > this.x && ball.x< this.x+this.w)  ){
                this.highlight = true;
                return true;
            
        }
        return false;
    }
    
}