import styles from "./Field.module.css";
import { useStore } from "../../hooks/useStore";
import { store } from "../../store";
import { STATUS } from "../../constants/status";
import { useGameActions } from "../../hooks/useGameActions";

export const FieldLayout = () => {
	const { squares = [], gameStatus } = useStore(store);
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
