import { Information } from "./GameLayout/Information/Information";
import { Field } from "./GameLayout/Field/Field";
import styles from "./app.module.css";

export const AppLayout = () => {
	return (
		<div className={styles.app}>
			<Information />
			<Field />
		</div>
	);
};
