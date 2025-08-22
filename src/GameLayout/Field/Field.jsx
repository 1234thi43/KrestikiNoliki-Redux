import { FieldLayout } from "./FieldLayout";
import { connect } from "react-redux";
import { selectGameStatus, selectSquares } from "../../selectors";
import { GameActions } from "../../hooks/useGameActions";
import { store } from "../../store";

const mapStateToProps = (state) => ({
	squares: selectSquares(state),
	gameStatus: selectGameStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
	onCellClick: GameActions.getOnCellClick(
		dispatch,
		selectSquares(store.getState()),
		selectGameStatus(store.getState())
	),
	onRestartGame: GameActions.getOnRestartGame(dispatch),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldLayout);
