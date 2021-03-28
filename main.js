generateGrid();

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", dyeSquare);
});

function generateGrid() {
    const containerDiv = document.querySelector("#container");
    for(let i = 1; i <= 16; i++) {
        for(let j = 1; j <= 16; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            containerDiv.appendChild(square);
        }
    } 
}

function dyeSquare() {
    this.setAttribute("style", "background-color: red");
}

