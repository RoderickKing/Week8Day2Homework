import React, { Component } from "react";

import ShoppingListContainer from "./containers/ShoppingListContainer";
import NewShoppingContainer from "./containers/NewShoppingContainer";
import ShoppingCountContainer from "./containers/ShoppingCountContainer";

var image1 = "/Images/wolliies.jpeg";
var image2 = "/Images/canda.png";
var image3 = "/Images/leyland.png";
var image4 = "/Images/danair.png";

class App extends Component {
  render() {
    return (
      <>
        <h2>Dodgy things past and present all to be added to Room 101...</h2>

        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />

        <NewShoppingContainer />
        <ShoppingListContainer />
        <ShoppingCountContainer />
      </>
    );
  }
}

export default App;
