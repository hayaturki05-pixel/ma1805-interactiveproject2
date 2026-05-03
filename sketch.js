//Declares the variables 
let cols; let rows; //declaring colunms and rows variable that represents how many colunms and rows will be
let size = 182; //This is the pixel size of an individual squares width and height on the 4x4 grid 
let a = ["crimson", "purple","yellow","cyan"]; //The variable that identifies the colors to be integrated in the columns of the grid

//The grids x and y starting positions 
let Xstart = 365  
let Ystart= 50 

//Individual square positions with x y coordinate in the 4x4 grid in order to determine their placements for the sound detection
let positions=[
    [Xstart, Ystart], [Xstart+1*size, Ystart], [Xstart+2*size, Ystart], [Xstart+3*size, Ystart], 
    [Xstart, Ystart+1*size],  [Xstart+1*size, Ystart+1*size], [Xstart+2*size, Ystart+1*size], [Xstart+3*size, Ystart+1*size], 
    [Xstart, Ystart+2*size],  [Xstart+1*size, Ystart+2*size], [Xstart+2*size, Ystart+2*size], [Xstart+3*size, Ystart+2*size], 
    [Xstart, Ystart+3*size],  [Xstart+1*size, Ystart+3*size], [Xstart+2*size, Ystart+3*size], [Xstart+3*size, Ystart+3*size], 
]

//declaring dancer and dancer activitated variables which represents the dancer object and to keep track if any square dancer is activitated or not 
let dancer; 
let dancerActivate= -1; 

//Loads all the necessary sounds based on their given square 
function preload(){
  sound1= loadSound("beat-mixer-sounds/drum-sound-1.mp3");
  sound2=loadSound("beat-mixer-sounds/kickdrum-sound-2.mp3")
  sound3=loadSound("beat-mixer-sounds/hi-hat&cymbals-drum-sound-4.mp3")
  sound4=loadSound("beat-mixer-sounds/hi-hat&cymbals(2)-drum-sound-5.mp3")
  sound5=loadSound("beat-mixer-sounds/midrange- minor-dance-piano-9.mp3")
  sound6=loadSound("beat-mixer-sounds/midrange-bass-sound-8.mp3")
  sound7=loadSound("beat-mixer-sounds/snaredrum-sound-3.mp3")
  sound8=loadSound("beat-mixer-sounds/sub-bass-sound-7.mp3")
  sound9=loadSound("beat-mixer-sounds/tom-drum-sound-6.mp3")
  sound10=loadSound("beat-mixer-sounds/witdth-piano-dark-mystery-urgency-10.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  cols = 4; 
  rows = 4; 
  
  dancer=new HayaDancer(0,0)//making dancer variable to be a HayaDancer object 
}

//Drawing all squares and the activitated dancers 
function draw(){
  background (0); 
  //A loop that draws all squares depending on number of columns and rows  
  for (let i=0; i<cols; i++){
    for (let h=0; h<rows; h++){
      fill(a[i]);
      rect(positions[i*4+h][0],positions[i*4+h][1],  size, size);
      strokeWeight(10);
    }
  }
  //Checks each square dancer if any activated then display it 
  if (dancerActivate!= -1){
    dancer.x = positions[dancerActivate][0]+91 
    dancer.y = positions[dancerActivate][1]+91 

    dancer.dancing()
    dancer.display()

  }
}
//On mouse pressed check which square got pressed and then if its media is playing then stop it and deactivate the dancer animation or if its not playing then stop all media and dancers if any is playing then play that square media and draw dancer on it
function mousePressed(){
   if (mouseX > positions[0][0] && mouseX < positions[0][0]+size && mouseY > positions[0][1] && mouseY < positions[0][1]+size){
    if (sound1.isPlaying()){
      sound1.stop(); 
       dancerActivate=-1 
    }
    else{
      stopAllSounds() 
      sound1.play(); 
       dancerActivate=0 
    }
  }
  else if (mouseX > positions[1][0] && mouseX < positions[1][0]+size && mouseY > positions[1][1] && mouseY < positions[1][1]+size){
    if (sound2.isPlaying()){
      sound2.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound2.play();
       dancerActivate=1
      
    }
  }
  else if (mouseX > positions[2][0] && mouseX < positions[2][0]+size && mouseY > positions[2][1] && mouseY < positions[2][1]+size){
    if (sound3.isPlaying()){
      sound3.stop();
       dancerActivate=-1 
    }
    else{
      stopAllSounds()
      sound3.play();
       dancerActivate=2
      
    }
  }
  
  else if (mouseX > positions[3][0] && mouseX < positions[3][0]+size && mouseY > positions[3][1] && mouseY < positions[3][1]+size){
    if (sound4.isPlaying()){
      sound4.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound4.play();
       dancerActivate=3
      
    }
  }
  
   else if (mouseX > positions[4][0] && mouseX < positions[4][0]+size && mouseY > positions[4][1] && mouseY < positions[4][1]+size){
    if (sound5.isPlaying()){
      sound5.stop();
       dancerActivate=-1

    }
    else{
      stopAllSounds()
      sound5.play();
       dancerActivate=4
    }
  }

   else if (mouseX > positions[5][0] && mouseX < positions[5][0]+size && mouseY > positions[5][1] && mouseY < positions[5][1]+size){
    if (sound6.isPlaying()){
      sound6.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound6.play();
       dancerActivate=5
    }
  }
  
   else if (mouseX > positions[6][0] && mouseX < positions[6][0]+size && mouseY > positions[6][1] && mouseY < positions[6][1]+size){
    if (sound7.isPlaying()){
      sound7.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound7.play();
       dancerActivate=6
      
    }
  }
  
   else if (mouseX > positions[7][0] && mouseX < positions[7][0]+size && mouseY > positions[7][1] && mouseY < positions[7][1]+size){
    if (sound8.isPlaying()){
      sound8.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound8.play();
       dancerActivate=7
      
    }
  }
 
   else if (mouseX > positions[8][0] && mouseX < positions[8][0]+size && mouseY > positions[8][1] && mouseY < positions[8][1]+size){
    if (sound9.isPlaying()){
      sound9.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound9.play();
      dancerActivate=8
    }
  }

   else if (mouseX > positions[9][0] && mouseX < positions[9][0]+size && mouseY > positions[9][1] && mouseY < positions[9][1]+size){
    if (sound10.isPlaying()){
      sound10.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound10.play();
      dancerActivate=9
      
    }
  }
  
   else if (mouseX > positions[10][0] && mouseX < positions[10][0]+size && mouseY > positions[10][1] && mouseY < positions[10][1]+size){
    if (sound1.isPlaying()){
      sound1.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound1.play();
       dancerActivate=10
      
    }
  }
  
   else if (mouseX > positions[11][0] && mouseX < positions[11][0]+size && mouseY > positions[11][1] && mouseY < positions[11][1]+size){
    if (sound2.isPlaying()){
      sound2.stop();
      dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound2.play();
      dancerActivate=11
      
    }
  }

  else if (mouseX > positions[12][0] && mouseX < positions[12][0]+size && mouseY > positions[12][1] && mouseY < positions[12][1]+size){
    if (sound3.isPlaying()){
      sound3.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound3.play();
       dancerActivate=12
      
    }
  }

  else if (mouseX > positions[13][0] && mouseX < positions[13][0]+size && mouseY > positions[13][1] && mouseY < positions[13][1]+size){
    if (sound4.isPlaying()){
      sound4.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound4.play();
       dancerActivate=13
      
    }
  }

  else if (mouseX > positions[14][0] && mouseX < positions[14][0]+size && mouseY > positions[14][1] && mouseY < positions[14][1]+size){
    if (sound5.isPlaying()){
      sound5.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound5.play();
       dancerActivate=14
      
    }
  }
  
  else if (mouseX > positions[15][0] && mouseX < positions[15][0]+size && mouseY > positions[15][1] && mouseY < positions[15][1]+size){
    if (sound6.isPlaying()){
      sound6.stop();
       dancerActivate=-1
    }
    else{
      stopAllSounds()
      sound6.play();
       dancerActivate=15
      
    }
  }
  
}

//enables to stop all the sounds being played on the beat mixer grid 
function stopAllSounds(){
  sound1.stop();
  sound2.stop();
  sound3.stop(); 
  sound4.stop(); 
  sound5.stop(); 
  sound6.stop(); 
  sound7.stop(); 
  sound8.stop(); 
  sound9.stop(); 
  sound10.stop(); 
  dancerActivate=-1//as well as the deactivation of the dancer 
}

class HayaDancer {
  constructor(startX, startY) {
    this.x = startX; //x position of the dancer 
    this.y = startY; //y position of the dancer 
    this.armX = 0; // arm x animated movement 
    this.armY = 0; // arm y animated movement 
    this.amp = 5; //the amplitude of the displayed movements 
    this.legX = 0; //leg x animated movement
    this.legY = 0; //leg y animated movement 
    this.headX = 0; //head x animated movement 
    this.headY = 0; //head y animated movement 
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  //With the frame count provided it modifies the dancers animation 
   dancing() {
    this.legX = sin(frameCount * 0.1) * 8; //the legs moving side to side 
    this.legY = cos(frameCount * 0.1) * 6; //the legs moving forward and backwards
    this.headX = sin(frameCount * 0.2) * 2; //the slight head shaking movement 
    this.headY = sin(frameCount * 0.1); //the other contributions to the head movements  
    this.eyeHeight = sin(frameCount * 0.05) * 3;// the rythmic eye squint movement 
  }
  //forms and appears the dancer on the x y positions 
     display() {
    push();
    translate(this.x, this.y); //moves the dancer to its x y positions 

    //the creation of the arms ands its wave animation 
    push();
    translate(0, 3);
    stroke(this.r, this.g, this.b);
    strokeWeight(4);
    strokeCap(SQUARE);
    for (let i = 0; i < 2; i++) {
      rotate(i * PI);
      for (let x = 10; x < 45; x += 0.1) {
        this.armY = sin(x * 0.1 + frameCount * 0.1) * this.amp;
        point(x, this.armY);
      }
    }
    pop();

    //the creation of the legs and its apparent "swirl" animation  
    for (let i = 0; i < 2; i++) {
      push();
      rotate((i * PI) / 5);
      stroke(255);
      translate(10, 25);
      fill(this.r, this.g, this.b);
      beginShape();
      vertex(1, 0);
      vertex(20 + this.legX, 20 + this.legY); //
      vertex(15, 70);
      vertex(10, 70);
      vertex(20 + this.legX, 20 + this.legY); //
      vertex(-7, 0);
      endShape();
      pop();
    }
    //the creation of the body and its hip-shoulder movement 
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    translate(0, -2);
    quad(-12, this.armY * 0.6, 12, -this.armY * 0.6, 12, 28, -12, 28);
    translate(0, 4);
    quad(-4, this.armY * 0.6, 4, -this.armY * 0.6, 2, -15, -2, -15);
    pop();

    //the creation of the head's shaking side to side movement 
    push();
    noStroke();
    rotate(this.headX * 0.05);
    translate(0, -28);
    fill(this.r, this.g, this.b);
    ellipse(this.headX, this.headY, 35, 35);
    fill(0);
    ellipse(this.headX - 6, this.headY - 2, 5, this.eyeHeight);
    ellipse(this.headX + 6, this.headY - 2, 5, this.eyeHeight);
    arc(this.headX, this.headY + 6, 20, 10, 0, PI);
    pop();

    
    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

//References: 
  //https://p5js.org/reference/
  //https://editor.p5js.org/LafouCC/sketches/0vklvOUHa 
  //https://www.youtube.com/watch?v=3j_cr44OZTc&t=14s 