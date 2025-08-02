import { WIN_PATTERNS } from "./constants/win-patterns";
import { PLAYER } from "./constants/player";
import { PLAYER_SIGN } from "./constants/player-sign";
import { STATUS } from "./constants/status";
import { PLAYER_NAME } from "./constants/player-name";
import { ACTION } from "./constants/action";

export const initialState = {
	squares: Array(9).fill(""),
	currentPlayer: PLAYER.X,
	gameStatus: STATUS.TURN,
	winner: null,
	information: `${ACTION[STATUS.TURN]}: ${PLAYER_NAME[PLAYER.X]}`,
};

export const appReducer = (state = initialState, { type, payload }) => {
	const newSquares = [...state.squares];

	const getCurrentInformation = () => {
		const { winner, gameStatus } = checkGameResult(newSquares);

		if (gameStatus === STATUS.WIN)
			return `Победитель: ${PLAYER_NAME[winner]}`;
		if (gameStatus === STATUS.DRAW) return "Ничья!";
		return `Ходит: ${
			PLAYER_NAME[state.currentPlayer === PLAYER.X ? PLAYER.O : PLAYER.X]
		}`;
	};

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
				information: getCurrentInformation(),
			};
		}
		case "RESTART_GAME":
			return initialState;

		default:
			return state;
	}
};

export const checkGameResult = (squares) => {
	for (const [a, b, c] of WIN_PATTERNS) {
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return {
				winner:
					squares[a] === PLAYER_SIGN[PLAYER.X] ? PLAYER.X : PLAYER.O,
				gameStatus: STATUS.WIN,
			};
		}
	}

	const isBoardFull = squares.every((cell) => cell !== "");
	if (isBoardFull) {
		return { winner: null, gameStatus: STATUS.DRAW };
	}

	return { winner: null, gameStatus: STATUS.TURN };
};
