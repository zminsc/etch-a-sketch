let mouseClicked = false;

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

const gridCells = document.querySelectorAll(".grid-cell");

for (const gridCell of gridCells) {
    gridCell.addEventListener("mousedown", handleMouseDown);
    gridCell.addEventListener("mousemove", handleMouseMove);
    gridCell.addEventListener("mouseup", handleMouseUp);
}