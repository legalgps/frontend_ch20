import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Admin from "./components/admin";
import GlobalState from "./store/globalContext";
import Cart from "./components/cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import"font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Switch} from "react-router-dom";
import OrderPlaced from "./components/orderPlaced";
import HistoryPurchase from "./components/history";


function App() {
  return (
    <GlobalState>
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route path= "/" exact component={Home}></Route>
        <Route path= "/home" exact component={Home}></Route>
        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/admin" exact component={Admin}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/order-saved" exact component={OrderPlaced}></Route>
        <Route path="/purchase-history" exact component={HistoryPurchase}></Route>
     </Switch>

      <Footer></Footer>
    </div>
    </BrowserRouter>
  </GlobalState>
);
}

export default App;
