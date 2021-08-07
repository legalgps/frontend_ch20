import React, { Component } from "react";


class QuantityPicker extends Component {
  state = {
  quantity: 1
  }
  
  render() {
    return (
      <div className="quantity-picker">
        <button onClick={this.increase} className="btn btn-primary">+</button>
         {this.state.quantity}             
        <button onClick={this.decrease} className="btn btn-primary">-</button>
      </div>
    );
  }

  increase = () => {
      if(this.state.quantity <20) {
   //  console.log(this.state.quantity += 1); //read the state
   let qnty = this.state.quantity + 1;
     this.setState({quantity: qnty});
      }      
};

    decrease = () => {
        if(this.state.quantity >1) {
        let qnty = this.state.quantity - 1;
        this.setState({quantity: qnty});   
    }
}



    

    


}

export default QuantityPicker;
