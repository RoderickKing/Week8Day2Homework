import { connect } from "react-redux";
import ShoppingCount from "../components/ShoppingCount";

const mapStateToProps = state => {
  return {
    shopping: state
  };
};

export default connect(mapStateToProps)(ShoppingCount);
