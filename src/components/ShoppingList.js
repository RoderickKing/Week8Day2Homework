import React from "react";
import Shopping from "./Shopping";
import "./shopping_list.css";

const ShoppingList = props => {
  const listItems = props.shopping.map((shoppingData, index) => {
    return (
      <Shopping
        shoppingData={shoppingData}
        key={index}
        index={index}
        removeShopping={props.removeShopping}
      />
    );
  });

  return <div id="shopping-list">{listItems}</div>;
};

export default ShoppingList;
