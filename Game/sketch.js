function setup() {
  createCanvas(800, 600);
  background(200);
  city();
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
    car();
    translate(20,0);
  }
  else if (keyCode === RIGHT_ARROW){
    car();
    translate(-20,0);
  }
}

function city(){
  strokeWeight(30);
  line(0,0,200,0);
  line(0,100,200,100);
  line(300,0,300,100);
  line(300,100,500,100);
  line(600,0,600,100);
  line(600,100,700,100);
  line(100,200,500,200);
  line(500,200,500,300);
  line(600,200,600,300);
  line(700,200,700,270);
  line(700,270,800,270);
  line(0,300,200,300);
}

function car(){
  strokeWeight(10);
  stroke('blue');
  ellipse(20,50,10,10);
}
