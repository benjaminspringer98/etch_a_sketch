generateGrid(16); //default 16x16 starting grid

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", dyeSquare);
});

const changeSizeBtn = document.querySelector("#changeSizeBtn");
changeSizeBtn.addEventListener("click", function() {
    let size = prompt("Please enter a new size:");
    removeCurrentSquares();
    generateGrid(size);
});

function generateGrid(size) {
    let squareWidth = Math.sqrt(250000 / (size * size));
    console.log(squareWidth);
    console.log(size);
    const containerDiv = document.querySelector("#container");
    for(let i = 1; i <= size; i++) {
        for(let j = 1; j <= size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            containerDiv.setAttribute("style", "grid-template-columns: repeat(" + size + "," + squareWidth + "px); grid-template-rows: repeat(" + size + "," + squareWidth + "px)");
            containerDiv.appendChild(square);
        }
    }
    let squares = document.querySelectorAll(".square"); // set squares to include the newly generated ones
    squares.forEach((square) => {
        square.addEventListener("mouseover", dyeSquare);
    }); 
}

function dyeSquare() {
    let color = document.getElementById("color").value; // get color from html input
    this.setAttribute("style", "background-color:" + color + "");
}

function removeCurrentSquares() {
    let currentSquares = document.querySelectorAll(".square");
    currentSquares.forEach((currentSquare) => {
        currentSquare.remove();
    });
}

