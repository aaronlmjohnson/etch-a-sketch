
const grid = document.querySelector('#grid');
const GRID_WIDTH = 600;
let cellsPerSide = 4;
let gridCells = cellsPerSide ** 2;
let cells;

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', (e)=>{
  cellsPerSide = 's'; 
  while(isNaN(cellsPerSide))
   cellsPerSide = prompt("How many squares for each row and column?");
   
  removeGrid();
  createGrid();
})

createGrid();





function createGrid(){
  gridCells = cellsPerSide ** 2;
  grid.setAttribute('style', `grid-template: 
      repeat(${cellsPerSide}, ${GRID_WIDTH / cellsPerSide}px) / repeat(${cellsPerSide}, ${GRID_WIDTH / cellsPerSide}px); 
      width = ${GRID_WIDTH}`);

  for(let i = 0; i < gridCells; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }

  cells = [...document.querySelectorAll('.cell')];
  colorGrid();
}

function removeGrid(){
  if(grid.hasChildNodes()){
    while(grid.hasChildNodes())
    grid.removeChild(grid.childNodes[0]);
  }
}

function colorGrid(){
  
  cells.forEach((cell)=>{
    cell.addEventListener('mouseover', (e)=>{
      let red = Math.ceil(Math.random() * 255);
      let green = Math.ceil(Math.random() * 255);
      let blue = Math.ceil(Math.random() * 255);
      cell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`);
    });
  });
}

