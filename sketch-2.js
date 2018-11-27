var r, g ,b;
var er,eg,eb;

function setup () {
    createCanvas(500, 500);
    er = random(255);
    eg = random(255);
    eb = random(255);
}

function draw() {
  
    stroke(er, eg ,eb);
    strokeWeight(7);
    fill(er, eg, eb);
      ellipse(250, 225, 300 ,300);//code for main color changing circle
       
    stroke("black")
    fill("black")
    ellipse(200, 200, 50, 100);//code for left eye
    
    stroke("black")
    fill("black")
    ellipse(300, 200, 50, 100);//code for right eye
    
    
}


function mousePressed() {//code for circle to change colors with mouse press
    var d = dist(mouseX, mouseY, 360, 200);
    console.log(d);
    if (d < 100) {
    er = random(255);
    eg = random(255);
    eb = random(255);
    }
    fill(r, g, b);
    ellipse(250, 225, 300 ,300)
}

function keyPressed() {//code for background to change colors with key press
    r = random(255);
    g = random(255);
    b = random(255);   
    background (r, g ,b); 
}








