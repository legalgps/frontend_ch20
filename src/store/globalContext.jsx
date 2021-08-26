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
    console.log("adding product");
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
    // let copy = [...this.state.cart];

    let copy = this.state.cart.filter((prod) => prod._id !== productId);
    this.setState({ cart: copy });

    //opt 1 - new array

    //     let newCart = [];
    //     for (let i = 0; i < copy.length; i++) {
    //       let item = copy[i];

    //       if (item._id !== productId) {
    //         newCart.push(item);
    //       }
    //     }

    //     this.setState({ cart: newCart });
    //   };
    // }
  };
}
export default GlobalState;
