import { createStore, Reducer, PreloadedState } from 'redux';

export interface IGameState {
  number: number;
}

interface IActionIncrement {
  type: "INCREMENT_NUMBER";
  payload: number;
}

interface IActionDecrement {
  type: "DECREMENT_NUMBER";
  payload: number;
}

type GameAction = IActionIncrement | IActionDecrement;

const gameInitialState: PreloadedState<IGameState> = { number: 0 };

const gameReducer: Reducer<IGameState, GameAction> = (state: IGameState | undefined, action: GameAction): IGameState => {
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
export const GameReducer = gameReducer;
