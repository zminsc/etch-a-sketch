let sz = 20;
let mouseClicked = false;

const gridContainer = document.querySelector("#grid-container");
const btnClear = document.querySelector("#grid-clear");
const btnResize = document.querySelector("#grid-resize");

function createGrid() {
    sz = Math.min(100, sz);

    gridContainer.style.gridTemplateColumns = `repeat(${sz}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sz}, 1fr)`;

    for (let i = 1; i <= sz; i++) {
        for (let j = 1; j <= sz; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add("grid-cell");
            gridContainer.appendChild(gridCell);
        }
    }

    const gridCells = document.querySelectorAll(".grid-cell");

    for (const gridCell of gridCells) {
        gridCell.addEventListener("mousedown", handleMouseDown);
        gridCell.addEventListener("mousemove", handleMouseMove);
        gridCell.addEventListener("mouseup", handleMouseUp);
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    createGrid();
}

function resizeGrid() {
    let szStr = prompt("Enter the desired grid size: ", sz);

    if (szStr == null) {
        return;
    }

    if (isNaN(parseInt(szStr))) {
        alert("You did not enter a valid number. Please try again.");
        resizeGrid();
    } else {
        sz = parseInt(szStr);
        clearGrid();
    }
}

function onDrawn(event) {
    event.currentTarget.removeEventListener("mousedown", handleMouseDown);
    event.currentTarget.removeEventListener("mousemove", handleMouseMove);
    event.currentTarget.addEventListener("mousedown", () => mouseClicked = true);
}

function handleMouseDown(event) {
    mouseClicked = true;
    event.currentTarget.classList.add("drawn");
    onDrawn(event);
}

function handleMouseMove(event) {
    if (mouseClicked) {
        event.currentTarget.classList.add("drawn");
        onDrawn(event);
    }
}

function handleMouseUp() {
    mouseClicked = false;
}

createGrid();

btnClear.addEventListener("click", clearGrid);
btnResize.addEventListener("click", resizeGrid);