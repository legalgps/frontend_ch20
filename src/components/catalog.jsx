import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";

class Catalog extends Component {
  state = {
    catalog: [],
    categories: [],
    filter: ""
  };

  
//Chris note this part for making the wheels dynamic

  render() {

    let itemsToDisplay = this.state.catalog;
    if(this.state.filter) {
      itemsToDisplay = itemsToDisplay.filter( item => item.category === this.state.filter);
    }

    return (
      <div className="catalog">
        <h3>Our amazing catalog</h3>
        <h5>We have {this.state.catalog.length} products for you</h5>

        <div className="filter-buttons">
          <button className="btn btn-dark" onClick={this.clearFilter} > Show all</button>
          {this.state.categories.map(cat => <button onClick={ () => {this.filterByCat(cat) }} key={cat} className="btn btn-info">{cat}</button>)}
        </div>

        <div className="item-container">
        {itemsToDisplay.map((obj) => (<Item key={obj._id} data={obj}></Item>
        ))}
        </div>
      </div>
    );
        }

  clearFilter = () => {
    this.setState ({ filter: ""})
  };
  

  filterByCat = (cat) => {
    this.setState ({ filter: cat});
  };

  //best place to load data from server
  //executed after the initial render
  componentDidMount() {
    let service = new ItemService();
    let data = service.getCatalog();


    //this algorithm is great to find unique things inside an array of objects
    let categories = [];

    for(let i=0; i< data.length; i++) {
      let category = data[i].category;

      //if the category doesn't exist inside the categeories array
      if(!categories.includes(category)) {
        categories.push(category);
      
      } 
      
    }

    console.log(categories);

    // console.log(data);
    this.setState({ catalog: data, categories: categories });
  }
}

export default Catalog;
