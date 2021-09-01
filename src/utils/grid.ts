import { NUMBER_OF_GRID_COLUMNS, NUMBER_OF_GRID_ROWS } from '@/constants';

const row = (level: number) =>
  Array(NUMBER_OF_GRID_COLUMNS)
    .fill(undefined)
    .map((_, i) => [i, level]);

const grid = Array(NUMBER_OF_GRID_ROWS)
  .fill(undefined)
  .reduce<number[][]>((acc, _, i) => [...acc, ...row(i)], []);

export { grid };
