"use strict";

let x = 50;
let y = 50;
let w = 50;
let h = 50;

let r = 115; 
let g = 255;
let b = 204; 

function setup() {
    console.log("go")
    createCanvas(100,100);
    background("#000000");

    draw();
}

function draw() {

    // first circle
    push();
    ellipseMode(CENTER);
    fill(r,g,b);
    ellipse(x,y,w,h);
    pop();

    // second circle
    push();
    ellipseMode(CENTER);
    fill(r,g,b);
    ellipse(x - 20 ,y - 20 ,w - 20 ,h - 20);
    pop();

    // third circle
    push();
    ellipseMode(CENTER);
    fill(r,g,b);
    ellipse(x -30,y -30,w -30,h -30);
    pop();

}