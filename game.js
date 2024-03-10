const row = 15;
const col = 15;

export const createStartGrid = () =>
  Array.from({ length: row }, () => Array(col).fill(0));

export const printGrid = (grid) => {
  for (let i = 0; i < row; i++) {
    let rowString = '';
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        rowString += '🟩';
      } else {
        rowString += '⬜';
      }
    }

    console.log(rowString);
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
  grid[2][5] = 1;
  grid[2][6] = 1;

  let round = 0;

  const runRound = () => {
    console.log(`\nRound ${round + 1}:`);
    printGrid(grid);
    grid = nextRound(grid);
    round++;

    if (isGridEmpty(grid)) {
      console.log(`Todas las cellulas estan muertas!💀💀💀 GAME OVER.`);
      clearInterval(interval);
    }
  };

  runRound();

  const interval = setInterval(runRound, 1000);
};

export const isGridEmpty = (grid) => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        return false;
      }
    }
  }

  return true;
};

game();
