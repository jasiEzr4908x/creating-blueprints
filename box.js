class Box{

    constructor(x,y,width,height){
var options ={

    restitution:0.8
}
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
display() {
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate(angle)
rectMode(CENTER)
fill("yellow")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop();
}


}