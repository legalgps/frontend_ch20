import React, { Component } from "react";
import "./orderHistoryRecord.css";

class OrderHistoryRecord extends Component {
  state = {};
  render() {
    return (
      <div className="order-history-record">
        <label>Order total $: {this.props.order.total}</label>
        <label>Products: {this.props.order.products.length}</label>
        <label>Date: {this.props.order.createOn}</label>
      </div>
    );
  }
}

export default OrderHistoryRecord;
