import { createGrid, printGrid } from './game.js';

describe('Create grid funcion: this funcion must create the grid', () => {
  test('We expect a grid of []', () => {
    const row = 10;
    const col = 10;
    const expected = [];
    const r = createGrid(row, col);
    expect(r).toBe(expected);
  });
});

describe('Stamp grid funcion: this funcion must create the grid', () => {
  test('', () => {
    const expected = [];
    const r = printGrid();
    expect(r).toBe(expected);
  });
});
