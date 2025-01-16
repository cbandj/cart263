"use strict";

let x = 100;
let y = 100;
let w = 50;
let h = 50;

let diff = 10;

let r = 115; 
let g = 255;
let b = 204; 

let random = 10;

function setup() {
    console.log("go")
    createCanvas(300,300);
    background("#000000");

    for (let i = 0; i < 3; i++){
        diff = diff + 20;
        drawEllipse(x,y,w,h,diff,r,g,b);
    }
}

function drawEllipse(x,y,w,h,diff,r,g,b){

    push();
    ellipseMode(CENTER);
    fill(r,g,b);
    ellipse(x - diff,y - diff,w - diff,h - diff);
    pop();

}
