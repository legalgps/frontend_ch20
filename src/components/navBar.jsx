import React, { Component } from "react"; //imrc
import storeContext from "../store/storeContext";
import "./navBar.css"; //you have to import your CSS
import { Link } from "react-router-dom";

// to import from node modules just do x from 'x';

// cc
class NavBar extends Component {
  static contextType = storeContext;
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            Legal GPS | For Schools
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/purchase-history">
                  My Orders
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn-btn-outline-primary" to="/cart">
                <i className="fa fa-cart-plus mr-1"></i>
                View Cart &nbsp;&nbsp;&nbsp;
                <span className="badge badge-dark ml-1">
                  {this.context.cart.length}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  test() {
    console.log("this is a test");
  }
}

export default NavBar;
