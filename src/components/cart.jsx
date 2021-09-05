import React, { Component } from "react";
import storeContext from "../store/storeContext";
import ItemInCart from "./itemInCart";

import "./cart.css";
import ItemService from "../services/itemService";

class Cart extends Component {
  static contextType = storeContext;
  state = {
    couponCode: "",
    discount: 0,
  };

  render() {
    return (
      <div className="cart-page">
        <h1>Your current cart</h1>
        <h4>You have {this.context.cart.length} products in cart</h4>

        <div className="d-flex">
          <div className="cart-container">
            {this.context.cart.map((prod) => (
              <ItemInCart key={prod._id} data={prod}></ItemInCart>
            ))}
          </div>

          <div className="total-container px-5 py-3">
            <label>Your total:</label>
            <h6>{this.getTotal()}</h6>
            {/* Chris check line above */}

            <input
              type="text"
              placeholder="Coupon Code"
              name="couponCode"
              value={this.state.couponCode}
              onChange={this.handleInputChange}
            />

            <button
              disabled={!this.state.couponCode}
              onClick={this.handleApplyCoupon}
              className="btn btn-sm btn-info"
            >
              Apply Coupon
            </button>

            <hr />
            <button
              onClick={this.handleSubmitOrder}
              className="btn btn-primary"
            >
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    );
  }
  // className="btn btn-dark" onClick={this.clearFilter}

  handleSubmitOrder = async () => {
    let order = {
      userId: 123,
      couponCode: this.state.couponCode,
      products: this.context.cart,
    };

    let service = new ItemService();
    let res = await service.submitOrder(order);
    if (res) {
      console.log("response data  ", res);
      this.props.history.push("/order-saved");
    } else {
      //request failed
      //show an error
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleApplyCoupon = async () => {
    if (!this.state.couponCode) {
      return;
    }

    // console.log("Validating coupon code", this.state.couponCode);

    let service = new ItemService();
    let res = await service.validateCouponCode(this.state.couponCode);
    if (!res) {
      console.log("Invalid coup!");
      this.setState({ discount: 0 });
      return;
    }

    console.log(res.discount);
    this.setState({ discount: res.discount });
  };

  getTotal = () => {
    let total = 0;
    for (let i = 0; i < this.context.cart.length; i++) {
      let item = this.context.cart[i];
      total += item.price * item.quantity;
    }

    total = total - (total * this.state.discount) / 100;
    return total.toFixed(2);
  };
}

export default Cart;
