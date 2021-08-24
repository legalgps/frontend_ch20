import React, { Component } from "react";
import storeContext from "./storeContext";

class GlobalState extends Component {
  state = {
    cart: [],
  };
  render() {
    return (
      <storeContext.Provider
        value={{
          cart: this.state.cart,

          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
        }}
      >
        {this.props.children}
      </storeContext.Provider>
    );
  }

  addProductToCart = (product) => {
    let currentCart = [...this.state.cart];

    let found = false;
    for (let i = 0; i < currentCart.length; i++) {
      let item = currentCart[i];

      if (item._id === product._id) {
        item.quantity += product.quantity;
        found = true;
      }
    }

    if (!found) {
      currentCart.push(product);
    }

    this.setState({ cart: currentCart });
  };

  removeProductFromCart = (productId) => {
    console.log("TODO: remove product");
  };
}

export default GlobalState;
