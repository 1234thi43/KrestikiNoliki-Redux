import { useStore } from "../../hooks/useStore";
import { store } from "../../store";
import styles from "./Information.module.css";

export const InformationLayout = () => {
	const { information } = useStore(store);

	return (
		<div className={styles.information}>
			<h2>{information}</h2>
		</div>
	);
};
