let container = document.querySelector(".grid-container");
//Get user input for size of grid that is <= 100 and clear previous grid
document.querySelector('button').addEventListener('click', (e)=>{
    if(container.innerHTML.length>1)
        container.innerHTML='';
    let size;
    do{
        size = Number(prompt('Please enter grid size not greater than 100'));
    }while(size > 100 && typeof(size) === 'number');
    makeGrid(size);

});
/*
Nested loops to create the rows and cells of the grid
*/
function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row')
        for (let j = 0; j < size; j++) {
            const divCell = document.createElement('div');
            divCell.classList.add('cell')
            divRow.appendChild(divCell)
            
        }
        container.appendChild(divRow)
    }
}