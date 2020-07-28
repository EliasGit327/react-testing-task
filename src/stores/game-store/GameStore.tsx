import { createStore, Reducer, PreloadedState } from 'redux';
import IActionIncrement from "./actions/IActionIncrement";
import IActionDecrement from "./actions/IActionDecrement";
import IGameState from "./IGameState";

interface ISelectCell {
  type: "SELECT_CELL";
  payload: { x: number, y: number };
}

interface ICheckCells {
  type: "CHECK_CELLS";
}

const size = 5;

const getNeighborCount = (x: number, y: number, array: boolean[][], size: number): number => {
  let counter = 0;
  // console.warn([x-1, y-1, (x-1 >= 0 && y-1 >= 0)])

  // Top line
  if (x-1 >= 0 && y-1 >= 0)
  if(array[y-1][x-1])
      counter++;
  if (y-1 >= 0)
    if(array[y-1][x])
      counter++;
  if (x+1 < size && y-1 >= 0)
    if(array[y-1][x+1])
      counter++;

  //Left right
  if (x-1 >= 0)
    if(array[y][x-1])
      counter++;
  if (x+1 < size)
    if(array[y][x+1])
      counter++;

  //Bottom line
  if (x+1 < size && y+1 < size)
    if (array[y+1][x+1])
      counter++;
  if (y+1 < size)
    if (array[y+1][x])
      counter++;
  if (x-1 >= 0 && y+1 < size)
    if (array[y+1][x-1])
      counter++;

  console.warn(counter)

  return counter;
}

type GameAction = IActionIncrement | IActionDecrement | ISelectCell | ICheckCells;
const gameInitialState: PreloadedState<IGameState> = {
  number: 0,
  grid: [...Array(size)].map(e => Array(size).fill(false)),
  secondGrid: [...Array(size)].map(e => Array(size).fill(false))
};

const gameReducer:
  Reducer<IGameState, GameAction> = (state: IGameState | undefined, action: GameAction): IGameState => {

  if (!state) {
    return gameInitialState;
  }

  switch (action.type) {
    case "SELECT_CELL":
      let newGrid = { ...state.grid };
      newGrid[action.payload.x][action.payload.y] = !newGrid[action.payload.x][action.payload.y];
      return { ...state }

    case "CHECK_CELLS": {
      // console.warn(getNeighborCount(1, 1, state.grid, 25));

      let newGrid = [...Array(size)].map(e => Array(size).fill(false));

      // const x = 3;
      // const y = 3;
      // newGrid[x][y] = true;
      // getNeighborCount(y, x, state.grid, size)

      state.grid.forEach((c, ci) => {
        c.forEach((e, ei) => {
          newGrid[ei][ci] = getNeighborCount(ci, ei, state.grid, size) === 3;
        });
      });
      return { ...state, grid: newGrid };
    }

    case "INCREMENT_NUMBER":
      return { ...state, number: state.number + action.payload }

    case "DECREMENT_NUMBER":
      return { ...state, number: state.number - action.payload }
    default:
      return state
  }
}

export const GameStore = createStore(gameReducer, gameInitialState);
