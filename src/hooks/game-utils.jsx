import { PLAYER } from "../constants/player";
import { PLAYER_NAME } from "../constants/player-name";
import { STATUS } from "../constants/status";
import { WIN_PATTERNS } from "../constants/win-patterns";
import { PLAYER_SIGN } from "../constants/player-sign";

export const getCurrentInformation = (squares, currentPlayer) => {
	const { winner, gameStatus } = checkGameResult(squares);

	if (gameStatus === STATUS.WIN) return `Победитель: ${PLAYER_NAME[winner]}`;
	if (gameStatus === STATUS.DRAW) return "Ничья!";
	return `Ходит: ${
		PLAYER_NAME[currentPlayer === PLAYER.X ? PLAYER.O : PLAYER.X]
	}`;
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
