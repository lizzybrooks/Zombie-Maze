let x2 = 0;
let y3 = 0;
let z = 0;
let y2 = 0;
let x = 50;
let y = 50;
 let canvasx;
 let canvasy;
 let sprites=[];
 let a;


function setup() {
  canvasx = 500+x2;
  canvasy = 500+y3;
  a = new sprite (x,y);
}

function draw() {
  createCanvas(canvasx, canvasy);
  background("red");
  fill("pink");
  rect(50,50, 60 + z, 60 + y2);
  fill("blue");
  rect(200,50,50,50);
  //function keyPressed();
  a.drawSprite();
  a.moveSprite();
  a.canvasSprite();
}

// function keyPressed() {
//   if (keyCode === RIGHT_ARROW){
//     x = x + 30;
//     z = z + 30;
//   }
//   else if (keyCode === LEFT_ARROW){
//     x = x - 30;
//   }
// }

class sprite {

  constructor(x,y,canvasx,canvasy){
		this.x = x;
    		this.y = y;
        this.canvasx = canvasx;
        this.canvasy = canvasy;
      }

  drawSprite(){
        fill("black");
    		rect(this.x,this.y,50,50);
	}

	//update the location of the ball, so it moves across the screen
	moveSprite(){
		 if(keyIsDown(RIGHT_ARROW)){
       this.x = this.x + 20;
     }
   }

  canvasSprite(){
    if(this.x>=this.canvasx && this.y>=this.canvasy){
      x2 = x2+30;
      y3 = y3+30;
    }
  }
}
//function keyPressed() {
  //if (keyCode === DOWN_ARROW){
  //  y = y + 30;
//    y2 = y2 + 30;
//  }
//  else if (keyCode === UP_ARROW){
  //  y = y - 30;
  //}
//}
