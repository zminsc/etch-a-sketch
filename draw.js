let mouseClicked = false;

const gridCells = document.querySelectorAll(".grid-cell");

for (const gridCell of gridCells) {
    gridCell.addEventListener("mousedown", () => {
        mouseClicked = true,
        gridCell.classList.add("drawn")
    });

    gridCell.addEventListener("mousemove", () => {
        if (mouseClicked) {
            gridCell.classList.add("drawn");
        }
    });

    gridCell.addEventListener("mouseup", () =>
        mouseClicked = false
    );
}