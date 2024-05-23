let innerContainer= document.querySelector(".inner-container");

let shapes = document.querySelector("#square");

let btn = document.querySelectorAll("button");

//color change----------------------
btn[0].addEventListener("click", changeColor);

function generateColor(){
    let color= Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let choosenColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`;
    innerContainer.style.backgroundColor=choosenColor;
}

btn[1].addEventListener("click", changeShape);
let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

function changeShape(){
    let choosenShape = randomShape();
    shapes.id = choosenShape;
    
}