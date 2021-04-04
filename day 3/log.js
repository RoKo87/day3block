class Log {
    constructor(x, y, angle, height) {
      var options = {
          restitution: 0,
          friction: 1,
          density: 1.0
      }
      this.body = Bodies.rectangle(x, y, 42, height, options);
      this.width = 42;
      this.height = height;
      Matter.Body.setAngle(this.body, angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ang = this.body.angle
      
      translate(pos.x, pos.y)
      push()
      rotate(ang)
      rectMode(CENTER);
      fill("cyan");
      rect(0, 0, this.width, this.height);
      pop()
      
    }
  };
  