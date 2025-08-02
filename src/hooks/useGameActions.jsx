import { store } from "../store";
import { STATUS } from "../constants/status";

export const useGameActions = () => {
	const onCellClick = (index) => {
		const currentState = store.getState();

		if (
			currentState.squares[index] ||
			currentState.gameStatus !== STATUS.TURN
		) {
			return;
		}

		store.dispatch({
			type: "SET_FIELD",
			payload: { index },
		});
	};

	const onRestartGame = () => {
		store.dispatch({ type: "RESTART_GAME" });
	};

	return { onCellClick, onRestartGame };
};
