import styles from "./Information.module.css";
import { useSelector } from "react-redux";
import { selectInformation } from "../../selectors";

export const InformationLayout = () => {
	const information = useSelector(selectInformation);

	return (
		<div className={styles.information}>
			<h2>{information}</h2>
		</div>
	);
};
