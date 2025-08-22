import { STATUS } from "../constants/status";

export const GameActions = {
	getOnCellClick: (dispatch, squares, gameStatus) => (index) => {
		if (squares[index] || gameStatus !== STATUS.TURN) {
			return;
		}

		dispatch({
			type: "SET_FIELD",
			payload: { index },
		});
	},

	getOnRestartGame: (dispatch) => () => {
		dispatch({ type: "RESTART_GAME" });
	},
};
