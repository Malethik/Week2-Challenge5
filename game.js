const row = 10;
const col = 10;

export const createStartGrid = () =>
  Array.from({ length: row }, () => Array(col).fill(0));

export const printGrid = (grid) => {
  for (let i = 0; i < row; i++) {
    console.log(grid[i].join(' '));
  }
};

export const nextRound = (grid) => {
  const newGrid = createStartGrid();

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const neighbors = countNeighbors(grid, i, j);

      if (grid[i][j] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          newGrid[i][j] = 0;
        } else {
          newGrid[i][j] = 1;
        }
      } else if (neighbors === 3) {
        newGrid[i][j] = 1;
      } else {
        newGrid[i][j] = 0;
      }
    }
  }

  return newGrid;
};

export const countNeighbors = (grid, x, y) => {
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;

      if (
        neighborX >= 0 &&
        neighborX < row &&
        neighborY >= 0 &&
        neighborY < col
      ) {
        count += grid[neighborX][neighborY];
      }
    }
  }

  count -= grid[x][y];
  return count;
};

export const game = () => {
  let grid = createStartGrid();
  grid[2][2] = 1;
  grid[2][3] = 1;
  grid[2][4] = 1;
  grid[3][4] = 1;
  grid[1][4] = 1;

  console.log('Starting');
  printGrid(grid);

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    grid = nextRound(grid);
    printGrid(grid);
  }
};

setInterval(() => game(), 4000);
