
class Tail{
    constructor(pred, c){
        this.pred = pred
        this.x = pred.x
        this.y = pred.y
        this.w = 20
        this.c = c
    }
    show(){
      fill(this.c[0], this.c[1], this.c[2])
      noStroke()
      rect(this.x, this.y, this.w, this.w)
    }
    
}


class Snake{
    constructor(){
      this.x= width/2
      this.y=height/2
      this.w = 20
      this.speed = 3
      this.dir = [0,0]
      this.tail = []
       
    }
    hits(nFruit){
      let x = ((nFruit.x+nFruit.w) > this.x) && ((nFruit.x+nFruit.w)<this.x+this.w)
      let y =((nFruit.y+nFruit.w) > this.y) && ((nFruit.y+nFruit.w)<this.y+this.w)
      return (x&&y)
    }
    grow(c){
      if(this.tail.length === 0){
        this.tail.push(this)
      }
      this.tail.push(new Tail(this.tail.length-1, c))
      this.speed+=.1
    }
    show(){
      fill(255)
      
      rect(this.x,this.y,this.w,this.w)
    }
    update(){
      this.x+=this.dir[0]*this.speed
      this.y+=this.dir[1]*this.speed
    }
    move(dir){
      switch(dir){
        case "up":
          this.dir[1] = -1
          this.dir[0] = 0
          break
        case "down":
          this.dir[1] = 1
          this.dir[0] = 0
          break
        case "left":
          this.dir[1] = 0
          this.dir[0] = -1
          break
        case "right":
          this.dir[1] = 0
          this.dir[0] = 1
          break
      }
    }
    dies(){
      return (this.x<=0 || this.x>=width || this.y<=0 || this.y>=height)
    }
  };
  class Fruit{
      constructor(){
          this.x = random(0,width)
          this.y = random(0, height)  
          this.w = 20
          this.c = [floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255))]
      }
      show(){
          fill(this.c[0],this.c[1],this.c[2])
          rectMode(CENTER)
          rect(this.x, this.y, this.w, this.w)
      }
  }

  let snake
  let nFruit
  let isFirst = true;
  function setup() { 
    createCanvas(400, 400);
    snake = new Snake()
  } 
  
  function draw() { 
    background(51);
    snake.show()
    text(snake.tail.length.toString(), 20, 20)
    if(snake.dies()){
      text('GAME OVER', width/2-50, height/2)
    } else {
      snake.update()
      if(!isFirst){
          nFruit.show()
          if(snake.hits(nFruit)){
              snake.grow(nFruit.c)
              nFruit.x = -100
              nFruit.y = -100
              nFruit = new Fruit()
          }
      }
      
      for(i = snake.tail.length-1; i>0; i--){
        snake.tail[i].show()
        if(i==0) continue
        snake.tail[i].x = snake.tail[i-1].x
        snake.tail[i].y = snake.tail[i-1].y
          
      }

    }
  }
  
  function keyPressed(){
    if(isFirst){
        nFruit = new Fruit()
        isFirst = false;
    }
    if(keyCode==UP_ARROW){
      snake.move("up")
    } else if (keyCode==DOWN_ARROW){
      snake.move("down")
    } else if (keyCode==LEFT_ARROW){
      snake.move("left")
    } else if (keyCode==RIGHT_ARROW){
      snake.move("right")
    }
  }