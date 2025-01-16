"use strict";

let x = 10;
let y = 10;

let r = 115; 
let g = 255;
let b = 204; 


let r3 = 115; 
let g3 = 255;
let b3 = 204; 

let rect1X = 100;
let rect1Y = 100;

let rect2X = 200;
let rect2Y = 200;

let rect3Y = 0;

function setup() {
    console.log("go")
    createCanvas(300,300);

    moveRect();
    draw();
}

function moveRect(){
    rect3Y =+ 2;
}

function draw(){
    push();
    rectMode(CENTER);
    fill(r,g,b);
    rect(rect1X,rect1Y,20,20);
    pop();

    background("#000000");
    push();
    rectMode(CENTER);
    fill(r,g,b);
    rect(rect2X,rect2Y,30,30);
    pop();

    push();
    rectMode(CENTER);
    fill(r3,g3,b3);
    rect(x,rect3Y,80,80);
    pop();
}

function mouseClicked(event){
    rect1X =+ 10;
    rect1Y =+ 10;
}

function keyPressed(event){
    if (keyCode === SPACE){
        rect2X = random (0, 300);
        rect2Y = random (0, 300);
    }
}

function mouseMoved(event){
    r3 = random(0,255);
    b3 = random(0,255);
    g3 = random(0,255);
}