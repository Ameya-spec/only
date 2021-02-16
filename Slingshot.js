class Slingshot{
constructor(body,point){
 var options = {
 bodyA:body,
pointB:point,
stiffness: 0.04,
length:10,
 damping:2
 }

 this.pointB=point;
this.sling=Constraint.create(options);
  World.add(world,this.sling);
 }


display(){


}
}
