class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.5,
          isStatic:false           
        }
        this.visibility=250
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;

        var pos= this.body.position;
        if(this.body.speed<3){
          rectMode(CENTER);
          rect(pos.x,pos.y ,this.width, this.height);
        }else{
World.remove(world,this.body)
        
        push();
        this.visibility=this.visibility-5
        tint (250,this.visibility)
       
       
        pop();
      }
    }
}
