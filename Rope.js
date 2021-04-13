class Rope {

constructor(bodyA,pointB){

        var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.05,
        length : 200
        };

        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

}

display(){
    var point1 = this.pointB;
    var point2 = this.rope.bodyA.position;
push ();
    stroke("blue");
    strokeWeight(4);
    line(point1.x,point1.y,point2.x,point2.y);

pop ();
}

}