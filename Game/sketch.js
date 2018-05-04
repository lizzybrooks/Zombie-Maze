let x = 100;
let y = 100;

function setup() {
  createCanvas(1000, 1000);
  background(200);
  city(x,y);
  car();
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


  }
  else if (keyCode === RIGHT_ARROW){


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
  //top
  line(x-100,y-100,x+900,y-100);//top side line
  line(x+900,y-100,x+900,y+900);//right side line
  line(x-100,y,x+100,y);
  line(x+200,y-100,x+200,y);
  line(x+200,y,x+450,y);
  line(x+570,y-100,x+570,y);
  line(x+570,y,x+800,y);
  line(x,y+100,x+600,y+100);
  line(x+600,y+100,x+600,y+250);
  line(x+700,y+100,x+700,y+250);
  line(x+700,y+250,x+800,y+250);
  line(x+800,y+250,x+800,y+500);
  line(x+800,y+500,x+700,y+500);
//part C
  line(x+800,y+100,x+800,y+170);
  line(x+800,y+170,x+900,y+170);
  line(x-100,y+200,x+100,y+200);
  line(x-100,y-100,x-100,y+900);//left side line
  line(200,300,200,450);
  line(270,450,100,450);
  line(100,450,100,390);
  line(270,550,100,550);
//part B
  line(500,200,500,450);
  line(500,450,800,450);
  line(800,450,800,1000);
  line(300,300,400,300);
  line(400,300,400,550);
  line(400,550,700,550);
  line(700,550,700,750);
  //part A
  line(0,650,450,650);
  line(400,650,400,800);
  line(700,750,600,750);
  line(600,750,600,1000);
  line(700,860,700,1000);
  line(1000,700,900,700);
  line(800,800,900,800);
  line(1000,1000,800,1000);
  line(0,1000,600,1000);
  line(500,800,500,1000);
  line(300,800,300,1000);
  line(300,800,100,800);

}

function car(x,y){
  strokeWeight(10);
  stroke('blue');
  ellipse(20,50,10,10);
}
