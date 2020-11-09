var car,wall;
var speed,weight;

function setup() {
  createCanvas(1360,600);

speed = random(55, 90);
weight = random(400, 1500);

  car = createSprite(50, 300, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white"


wall = createSprite(1260, 300, 60, height/2);
wall.shapeColor = "blue"

}

function draw() {
  background("pink");  

 

if(wall.x - car.x <   wall.width/2 + car.width/2){

car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;

if(deformation < 100){

  car.shapeColor = "green";
  
  }
  
  if(deformation < 180 && deformation>100){

    car.shapeColor = "yellow";
    
    }
    

if(deformation > 180){

car.shapeColor =  "red";


}



}

  drawSprites();
}