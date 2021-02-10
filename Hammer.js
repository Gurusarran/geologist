class Hammer {
    constructor(x,y,height,angle){
    var options= {
        'density': 2,
        'friction':1.0,
        'restitution':0.5,
    };


    this.body= Bodies.rectangle(x,y,50,50,options);
    this.width= 150;
    this.height= 50;
     Matter.Body.setAngle(this.body,angle);
     World.add(world,this.body);
    }
    

    display(){
 var pos= this.body.position;
 pos.x=mouseX;
 pos.y=mouseY;
 var angle  = this.body.angle;
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 rectMode(CENTER);
 fill ("yellow");
 rect(0,0,this.width,this.height);
 pop ();


              }
}