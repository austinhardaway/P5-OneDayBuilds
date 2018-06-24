class Ball{
    constructor(){
        this.x = 50;
        this.y = height/2;

        this.velocity = 0;
        this.gravity = .6;
    }

    show(){
        fill(255);
        ellipse(this.x, this.y, 40, 40);
    }

    update(){
        this.velocity += this.gravity;
        this.velocity*=.9;
        this.y += this.velocity;

        if(this.y>height){
            this.y = height;
            this.velocity= 0;
        } else if (this.y<0){
            this.y = 0;
            this.velocity = 0;
        }
    }

    up(){
        this.velocity -= 17 ; 
    }

}