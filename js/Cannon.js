class Cannon {
  constructor(x, y, width, height, angle) {
    var options = {
      isStatic: true
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage('./assets/canon.png');
    this.body = Bodies.rectangle(x,y,width, height, options);
    this.cannonBase = loadImage('./assets/cannonBase.png');
    World.add(world, this.body)
    
  }
  show(){
    push ();
    imageMode(CENTER);
    
    image (this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    
    pop ();
    image (this.cannonBase, 70, 25, 210, 200);
  }
  
}
