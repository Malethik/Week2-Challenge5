/* eslint-disable no-unused-vars */
const grid = () => {
  const grid = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 1) {
        let counter = 0;
        if (grid[i - 1][j]) {
          counter += counter;
        }
      }
    }
  }
};
