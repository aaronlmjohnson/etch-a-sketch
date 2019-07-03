const grid = document.querySelector('#grid');
const GRID_CELLS = 16;


for(let i = 0; i < GRID_CELLS; i++){
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}


