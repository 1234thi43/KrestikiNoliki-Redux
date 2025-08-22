import React from "react";
import styles from "./Field.module.css";
import { STATUS } from "../../constants/status";

export class FieldLayout extends React.Component {
	render() {
		const { squares, gameStatus, onCellClick, onRestartGame } = this.props;

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
				<button
					className={styles.restartButton}
					onClick={onRestartGame}
				>
					Новая игра
				</button>
			</div>
		);
	}
}
