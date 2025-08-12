import styles from "./Field.module.css";
import { useSelector } from "react-redux";
import { STATUS } from "../../constants/status";
import { useGameActions } from "../../hooks/useGameActions";
import { selectGameStatus, selectSquares } from "../../selectors";

export const FieldLayout = () => {
	const squares = useSelector(selectSquares);
	const gameStatus = useSelector(selectGameStatus);

	const { onCellClick, onRestartGame } = useGameActions();

	return (
		<div className={styles.field}>
			{squares.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}
					disabled={!!cellPlayer || gameStatus !== STATUS.TURN}
				>
					{cellPlayer}
				</button>
			))}
			<button className={styles.restartButton} onClick={onRestartGame}>
				Новая игра
			</button>
		</div>
	);
};
