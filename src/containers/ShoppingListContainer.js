import { connect } from "react-redux";
import ShoppingList from "../components/ShoppingList";

const mapStateToProps = state => {
  return {
    shopping: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeShopping: shoppingIndex => {
      dispatch({
        type: "REMOVE_SHOPPING",
        shoppingIndex
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
