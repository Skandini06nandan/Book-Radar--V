var form,record1,user,recordCount,bg;

function setup() {
  createCanvas(800,400);
  form = new Form();
  // record1 =new Record();

  //databes reference
   database =firebase.database();
game = new Game();
bg= loadImage("screen.jpg")
  }

function draw() {
  background(bg);
 
  form.display();

  
 if(recordCount === 0){
  game.update(0)  
  form = new Form();
  }
  if(recordCount ===1){
    game.update(1)
    slides =new Slide();
  }
 
}
