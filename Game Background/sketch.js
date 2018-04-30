let x = 0;
let y = 0;
let z = 0;
let y2 = 0;
let canvasx = 500+x;
let canvasy = 500+y;

function setup() {
}

function draw() {
  createCanvas(canvasx, canvasy);
  background("red");
  fill("pink");
  rect(50,50, 60 + z, 60 + y2);
  fill("blue");
  rect(200,50,50,50);
  //function keyPressed();
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
  drawSprite(){
        fill("black");
    		rect(50,50,50,50);
	}

	//update the location of the ball, so it moves across the screen
	moveSprite(){
		 if(keyIsDown(RIGHT_ARROW)){
       this.x = this.x + 10;
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
