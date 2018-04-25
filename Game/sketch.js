let x = 100;
let y = 100;

function setup() {
  createCanvas(800, 600);
  background(200);
  city(x,y);
  car(x,y);
}

function draw() {
  //white background rectangle
  noStroke();
  fill(255);
  rect(0, 0, 75, 20);
  //text showing mouse coordinates
  fill(255, 0, 0);
  text("("+mouseX + ", " + mouseY+")", 5, 15);

}

function keyPressed(){
if (keyCode === LEFT_ARROW){

    translate(x = x + 20,0);
    background(200);
city(x,y);
  }
  else if (keyCode === RIGHT_ARROW){

    translate(x = x - 20,0);
    background(200);
    city(x,y);
  }
}

// class Car {
// 	//every ball needs an x value, a y value, and a speed
// 	constructor(x,y, speed){
// 		this.x = x;
//     		this.y = y;
// 	}
//
// 	// draw a ball on the screen at x,y
// 	drawCar(){
//     		stroke(0);
//         	car();
// 	}
//
// 	//update the location of the ball, so it moves across the screen
// 	moveCar(){
//
// 		this.x = this.x;
// 		this.y = this.y+.5;
// 	}
//
// 	// //if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
//   // 	bounceCar(){
//   //   		if (this.x >= mouseX-3 && this.x <= mouseX+3 && this.y > mouseY-40 && this.y < mouseY+40){
//   //     			this.speed = -this.speed;
//   //           point=point+1;
//   //           stroke(paddleC[int(random(0, paddleC.length))]);
//   //   		}
//   // 	}
// }

function city(x,y){//make all cordinates x100,y100
  strokeWeight(30);
  stroke('black')
  line(x-100,y-100,x+100,y-100);
  line(x-100,y,x+100,y);
  line(x+200,y-100,x+200,y);
  line(x+200,y,x+400,y);
  line(x+500,y-100,x+500,y);
  line(x+500,y,x+600,y);
  line(x,y+100,x+400,y+100);
  line(x+400,y+100,x+400,y+200);
  line(x+500,y+100,x+500,y+200);
  line(x+600,y+100,x+600,y+170);
  line(x+600,y+170,x+700,y+170);
  line(x-100,y+200,x+100,y+200);
}

function car(x,y){
  strokeWeight(10);
  stroke('blue');
  ellipse(x,y,10,10);
}
