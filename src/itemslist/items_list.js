import React, { Component } from "react";
import Product_data from "../data/products.json";
import Item_details from "./item_details";
var totalval = 0;
//reduxx gloabl state

class Items_list extends Component {
  constructor(props) {
    super(props);
    //this.change_color=this.change_color.bind(this)
    this.total_cart_handler = this.total_cart_handler.bind(this);
    this.child = React.createRef();
    this.state = {
      curr_color: "any",
    };
  }

  async total_cart_handler(t_price) {
    // used to display total cart value
    console.log(this);
    t_price = Math.round(t_price * 100) / 100;
    totalval = t_price;
    this.setState({ showMe: true });
  }

  change_color = (selected_color) => {
    //module develope to filter cart
    selected_color = this.refs.color_pallete.value;
    selected_color = this.setState({ curr_color: selected_color });
  };

  render() {
    return (
      <div>
        <div id="dropdown_container">
          <label>Select filter colour : </label>
          <select
            name="Filter by Color"
            id="Colurs"
            ref="color_pallete"
            onChange={this.change_color}
          >
            <option value="any">All</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Stone">Stone</option>
          </select>
        </div>
        <div className="cart_checkout">
          {Product_data.filter(
            (products) =>
              products.colour === this.state.curr_color ||
              this.state.curr_color === "any"
          ).map((items, index) => {
            // filter records
            return (
              <Item_details
                ind_item={items}
                key={`Item key ${index}`}
                pricecallback={this.total_cart_handler}
                Item_details
                ref={this.child}
              />
            );
          })}
          <h2 id="total_val"> Total Sum : {totalval}</h2>
        </div>
      </div>
    );
  }
}

export default Items_list;
