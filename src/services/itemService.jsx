import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

// import Item from "../components/item";

class ItemService {
  async getCatalog() {
    let response = await axios.get(ServerUrl + "/api/catalog");
    return response.data;
  }

  async saveItem(item) {
    await axios.post(ServerUrl + "/api/catalog", item);
  }

  getItemDetails(id) {}

  async validateCouponCode(code) {
    let response = await axios.get(ServerUrl + "/api/couponCodes/" + code);
    return response.data;
  }

  async submitOrder(order) {
    let response = await axios.post(ServerUrl + "/api/orders", order);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error submitting order", response.data);
      return null;
    }
  }

  async getUserOrders(userId) {
    let response = await axios.get(ServerUrl + "/api/orders" + userId);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error getting user orders", response.data);
      return null;
    }
  }
}

export default ItemService;
