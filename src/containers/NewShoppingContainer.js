import { connect } from "react-redux";
import ShoppingForm from "../components/ShoppingForm.js";

const mapDispatchToProps = dispatch => {
  return {
    addShopping: shopping => {
      dispatch({
        type: "ADD_SHOPPING",
        shopping
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShoppingForm);
