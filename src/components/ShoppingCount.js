import React from "react";

const ShoppingCount = props => {
  return (
    <>
      <h2>Total Basket Cases: {props.shopping.length}</h2>
    </>
  );
};

export default ShoppingCount;
