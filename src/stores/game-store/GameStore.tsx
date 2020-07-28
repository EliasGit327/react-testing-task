import { createStore, Reducer, PreloadedState } from 'redux';
import IActionIncrement from "./actions/IActionIncrement";
import IActionDecrement from "./actions/IActionDecrement";
import IGameState from "./IGameState";
import ISelectCell from "./actions/ISelectCell";
import ICheckCells from "./actions/ICheckCells";
import IResetGrid from "./actions/IResetGrid";
import IStartStop from "./actions/IStartStop";

const size = 50;

type GameAction =
  IActionIncrement |
  IActionDecrement |
  ISelectCell |
  ICheckCells |
  IResetGrid |
  IStartStop;

const gameInitialState: PreloadedState<IGameState> = {
  number: 0,
  grid: [...Array(size)].map(() => Array(size).fill(false)),
  secondGrid: [...Array(size)].map(() => Array(size).fill(false)),
  status: false
};


const gameReducer:
  Reducer<IGameState, GameAction> = (state: IGameState | undefined, action: GameAction): IGameState => {

  if (!state) {
    return gameInitialState;
  }

  switch (action.type) {
    case "START_STOP":
      return {...state, status: !state.status}

    case "RESET_GRID":
      return {...state, grid: [...Array(size)].map(() => Array(size).fill(false)) }

    case "SELECT_CELL":
      let newGrid = { ...state.grid };
      newGrid[action.payload.x][action.payload.y] = !newGrid[action.payload.x][action.payload.y];
      return { ...state }

    case "CHECK_CELLS": {
      let newGrid = [...Array(size)].map(() => Array(size).fill(false));

      state.grid.forEach((c, ci) => {
        c.forEach((e, ei) => {
          if (state.grid[ei][ci]) {
            const aliveAround = getNeighborCount(ci, ei, state.grid, size);
            newGrid[ei][ci] = aliveAround === 2 || aliveAround === 3;
          } else {
            newGrid[ei][ci] = getNeighborCount(ci, ei, state.grid, size) === 3;
          }
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

const getNeighborCount = (x: number, y: number, array: boolean[][], size: number): number => {
  let counter = 0;

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

  return counter;
}
