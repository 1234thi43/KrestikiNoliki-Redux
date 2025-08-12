import { PLAYER } from "./constants/player";
import { PLAYER_SIGN } from "./constants/player-sign";
import { STATUS } from "./constants/status";
import { PLAYER_NAME } from "./constants/player-name";
import { ACTION } from "./constants/action";
import { getCurrentInformation, checkGameResult } from "./hooks/game-utils";

export const initialState = {
  squares: Array(9).fill(""),
  currentPlayer: PLAYER.X,
  gameStatus: STATUS.TURN,
  winner: null,
  information: `${ACTION[STATUS.TURN]}: ${PLAYER_NAME[PLAYER.X]}`,
};

export const appReducer = (state = initialState, { type, payload }) => {
  const newSquares = [...state.squares];

  switch (type) {
    case "SET_FIELD": {
      if (state.gameStatus !== STATUS.TURN) return state;

      newSquares[payload.index] = PLAYER_SIGN[state.currentPlayer];

      // Проверяем результат на ОБНОВЛЕННОМ поле
      const { winner, gameStatus } = checkGameResult(newSquares);

      return {
        ...state,
        squares: newSquares,
        currentPlayer:
          state.currentPlayer === PLAYER.X ? PLAYER.O : PLAYER.X,
        winner,
        gameStatus,
        information: getCurrentInformation(newSquares, state.currentPlayer),
      };
    }
    case "RESTART_GAME":
      return initialState;

    default:
      return state;
  }
};
