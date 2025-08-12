import { STATUS } from "../constants/status";
import { useSelector } from "react-redux";
import { selectSquares, selectGameStatus } from "../selectors";
import { useDispatch } from "react-redux";

export const useGameActions = () => {
	const dispatch = useDispatch();

	const squares = useSelector(selectSquares);
	const gameStatus = useSelector(selectGameStatus);

	const onCellClick = (index) => {
		if (squares[index] || gameStatus !== STATUS.TURN) {
			return;
		}

		dispatch({
			type: "SET_FIELD",
			payload: { index },
		});
	};

	const onRestartGame = () => {
		dispatch({ type: "RESTART_GAME" });
	};

	return { onCellClick, onRestartGame };
};
