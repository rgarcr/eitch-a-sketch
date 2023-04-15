let container = document.querySelector(".grid-container");
document.querySelector('button').addEventListener('click', makeGrid);
/*
Nested loops to create the rows and cells of the grid
*/
function makeGrid() {
    for (let i = 0; i < 16; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row')
        for (let j = 0; j < 16; j++) {
            const divCell = document.createElement('div');
            divCell.classList.add('cell')
            divRow.appendChild(divCell)
            
        }
        container.appendChild(divRow)
    }
}