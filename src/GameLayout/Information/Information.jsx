import { InformationLayout } from "./InformationLayout";
import { connect } from "react-redux";
import { selectInformation } from "../../selectors";

const mapStateToProps = (state) => ({
	information: selectInformation(state),
});

export const Information = connect(mapStateToProps)(InformationLayout);
