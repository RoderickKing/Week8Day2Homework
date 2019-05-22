import React from "react";
import "./shopping.css";

const Shopping = props => {
  const handleRemoveClick = evt => {
    props.removeShopping(props.index);
  };

  const { name, reason } = props.shoppingData;

  return (
    <div className="shopping">
      <button onClick={handleRemoveClick}>Bye !</button>
      <h4>{name}</h4>
      <p>Reason: {reason}</p>
    </div>
  );
};

export default Shopping;
