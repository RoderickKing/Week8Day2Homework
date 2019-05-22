import React, { Component } from "react";
//import "./ShoppingForm.css";

class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      reason: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newShopping = {
      name: evt.target.name.value,
      reason: evt.target.reason.value
    };
    this.props.addShopping(newShopping);
    this.reset();
  }

  reset() {
    this.setState({
      name: "",
      reason: ""
    });
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label htmlFor="reason">Reasons:</label>
        <select
          name="reason"
          id="reason"
          value={this.state.reason}
          onChange={this.handleInputChange}
        >
          <option value="Shareholders">Shareholders</option>
          <option value="Rates">Rates</option>
          <option value="Not selling much">Not Selling</option>
          <option value="Poor weather">Poor weather</option>
          <option value="All away to study Javascript !">Studying</option>
          <option value="No parking">No parking</option>
          <option value="Management mistakes like HMV">Mistakes</option>
        </select>

        <input type="submit" value="Add Basket Cases " />
      </form>
    );
  }
}

export default ShoppingForm;
