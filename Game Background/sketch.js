// let x2 = 0;
// let y3 = 0;
// let z = 0;
// let y2 = 0;
let x = 50;
let y = 50;
let canvasX = 500;
let canvasY = 500;
let sprites=[];
let a;


function setup() {
  a = new sprite (x,y);
}

function draw() {
  createCanvas(canvasX, canvasY);
  background("red");
  fill("pink");
  rect(50,50, 60, 60);
  fill("blue");
  rect(200,50,50,50);
  print(x);
  //function keyPressed();
  a.drawSprite();
  a.moveSprite();
  a.canvasSprite();
  a.canvasSpriteY();
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

  constructor(x,y){
		this.x = x;
    		this.y = y;
        // this.canvasx = canvasX;
        // this.canvasy = canvasY;
      }

  drawSprite(){
        fill("black");
    		rect(this.x,this.y,50,50);
	}

	//update the location of the ball, so it moves across the screen
	moveSprite(){
		 if(keyIsDown(RIGHT_ARROW)){
       this.x = this.x + 15;
     }
     else if (keyIsDown(LEFT_ARROW)){
       this.x = this.x - 15;
     }
     else if (keyIsDown(DOWN_ARROW)){
       this.y = this.y + 15;
     }
     else if (keyIsDown(UP_ARROW)){
       this.y = this.y - 15;
    }
   }
   canvasSprite(){
     if(this.x+50>=canvasX){
       canvasX = canvasX + 30;
     }
   }
   canvasSpriteY(){
     if(this.y+50>=canvasY){
       canvasY = canvasY + 30;
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
