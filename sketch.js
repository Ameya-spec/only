const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render= Matter.Render


var engine, world;
var ball,slingShot;




function setup(){
  createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
     render = Render.create({
      element: document.body,
      engine: engine,
    options: {
          width: 500,
          height: 600,
          pixelRatio: 1,
          background: "skyblue",
          wireframeBackground: 'black',
          hasBounds: false,
          enabled: true,
          wireframes:true,
          showSleeping: false,
          showDebug: false,
          showBroadphase: false,
          showBounds: true,
          showVelocity: true,
          showCollisions: true,
          showSeparations: true,
          showAxes: true,
          showPositions: true,
          showAngleIndicator: true,
          showIds: true,
          showShadows: true,
          showVertexNumbers: false,
          showConvexHulls: true,
          showInternalEdges: true,
          showMousePosition: false
      }});

      
 ball = new Ball(280,200)
 slingShot = new Slingshot(ball.body,{x:280,y:200})

 Engine.run(engine);
 Render.run(render);
  }
function draw (){


slingShot.display();
}
