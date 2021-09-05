import React, { Component } from "react";
import ItemService from "../services/itemService";
import OrderHistoryRecord from "./orderHistoryRecord";
import "./history.css";

class HistoryPurchase extends Component {
  state = {
    orders: [],
  };

  render() {
    return (
      <div className="history-page">
        <h2>These are your purchases on our store: </h2>
        <hr />

        {this.state.orders.map((ord) => (
          <OrderHistoryRecord key={ord._id} order={ord}></OrderHistoryRecord>
        ))}
      </div>
    );
  }

  async componentDidMount() {
    let service = new ItemService();
    let ords = await service.getUserOrders(123);
    this.setState({ orders: ords });
  }
}

export default HistoryPurchase;
