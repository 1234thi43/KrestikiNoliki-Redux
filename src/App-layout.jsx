import React from "react";
import { Information } from "./GameLayout/Information/Information";
import { Field } from "./GameLayout/Field/Field";

export class AppLayout extends React.Component {
	render() {
		return (
			<div className="game-container bg-red-700">
				<Information />
				<Field />
			</div>
		);
	}
}

export const App = AppLayout;
