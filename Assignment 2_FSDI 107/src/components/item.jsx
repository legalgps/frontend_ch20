import React, { Component } from 'react';
import "./item.css";
import QuantityPicker from './quantityPicker';

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item">
            <img src={"/images/products/" + this.props.data.image} alt="product">
        </img>
    {/* check image source path to get images to appear*/}
            <h5>{this.props.data.title}</h5>

            <label>Total ${this.props.data.price}</label>
            <label>Price ${this.props.data.price}</label>
               
       <div className="item-controls">
            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-info btn-add">
                <i class="fa fa-cart-plus"></i>
            </button>
            </div>
</div>

         );
    }
}
 
export default Item;
//added "to fix" 