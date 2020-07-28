import { createStore, Reducer, PreloadedState } from 'redux';
import IActionIncrement from "./actions/IActionIncrement";
import IActionDecrement from "./actions/IActionDecrement";
import IGameState from "./IGameState";

type GameAction = IActionIncrement | IActionDecrement;
const gameInitialState: PreloadedState<IGameState> = {
  number: 0,
  grid:  [...Array(6)].map(e => Array(6).fill(false))
};

const gameReducer:
  Reducer<IGameState, GameAction> = (state: IGameState | undefined, action: GameAction): IGameState => {

  if (!state) {
    return gameInitialState;
  }

  switch (action.type) {
    case "INCREMENT_NUMBER":
      return { ...state, number: state.number + action.payload }
    case "DECREMENT_NUMBER":
      return { ...state, number: state.number - action.payload }
    default:
      return state
  }
}

export const GameStore = createStore(gameReducer, gameInitialState);
