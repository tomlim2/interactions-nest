let hand;

function preload(){
  hand = loadImage("hand.png")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  arrow(100,100)
  arrow(100,200)
  arrow(100,300)
  
}

function arrow (posX, posY) {
  // 목표 위치 - 기준 위치 => 방향과 크기
  
  let pos = new p5.Vector(posX,posY);
  let target = new p5.Vector(mouseX, mouseY);
  
  target.sub(pos) // 뱡향과 크기가 target에 남는다
  // target.limit(50)
  target.setMag(50); // set target's mag
  // console.log(target.mag()) // get target's scalar
  // ellipse(pos.x, pos.y, 10, 10)
  
  push()
    translate(pos.x, pos.y);
    rotate(target.heading())
    imageMode(CENTER)
    image(hand, 0, 0)
  pop()
}