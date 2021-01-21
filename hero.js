class Hero {
    constructor(x, y,radius) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1,
          'density':0.5
      }
      
      //this.width = width;
      //this.height = height;
      this.radius = radius;
      this.image = loadImage("images/Superhero-01.png");
      this.body = Bodies.circle(x, y, radius/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 200, 160);
      pop();
    }
  }