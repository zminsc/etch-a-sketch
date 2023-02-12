function createGrid(n) {
    const gridContainer = document.querySelector("#grid-container");

    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.toggle("grid-cell");
            gridCell.setAttribute("id", `row${i}-col${j}`);
            gridContainer.appendChild(gridCell);
        }
    }
}

createGrid(4);