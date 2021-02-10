class Rubber {
    constructor(x,y,r,){
    var options= {
        density: 1.0,
        friction:6.0,
        restitution:0.3,
    }


    this.body= Bodies.circle(x,y,30);
    this.r= r;
    

    World.add(world, this.body);
    }
    

    display(){
 var pos= this.body.position;
 

 push();
 translate(pos.x,pos.y);
 
 fill ("darkblue");
 ellipse(0,0,this.r*2);
 pop ();


              }
}