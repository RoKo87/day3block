class Pig {
    constructor(x,y) {
      var options = {
        restitution: 1.82,
        friction: 0,
      }
      this.body = Bodies.rectangle(x,y,30,30,options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lime");
      strokeWeight(5)
      stroke("brown")
      rect(0, -42, this.width, this.height);
    }
};