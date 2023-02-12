function createGrid(n) {
    n = Math.min(100, n);
    const gridContainer = document.querySelector("#grid-container");

    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add("grid-cell");
            gridContainer.appendChild(gridCell);
        }
    }
}

createGrid(20);