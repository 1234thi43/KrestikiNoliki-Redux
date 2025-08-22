import React from "react";
import styles from "./Information.module.css";

export class InformationLayout extends React.Component {
	render() {
		const { information } = this.props;

		return (
			<div className={styles.information}>
				<h2>{information}</h2>
			</div>
		);
	}
}
