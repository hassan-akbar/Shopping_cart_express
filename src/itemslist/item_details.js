import React, { Component } from "react";
import quantityOfItems from "./quantity_counter.js";
let totalval = 0;
let item_quanitiy = new quantityOfItems();
item_quanitiy.initialize_quan();
class Items_list extends Component {
  constructor(props) {
    super(props);
  }

  reset_quanity_upon_filter = () => {
    this.setState({ quantiy: 0 });
  };
  sum_total_cart = (price) => {
    // aquires total price and sends it to the parent form to be displayed
    const { pricecallback } = this.props;
    console.log(this);
    if (price > 0) {
      totalval = price;
    } else {
      totalval = 0;
      price = 0;
    }
    // alert(totalval)
    pricecallback(totalval);
  };

  add_to_cart = (index_val) => {
    // function implimented to add items to cart based on the component object clicked

    this.t_price = this.props.ind_item.price + totalval;
    this.sum_total_cart(this.t_price);
    console.log(index_val);
    item_quanitiy.add_quantity(index_val - 1);
  };

  remove_from_cart = (index_val) => {
    // function implimented to remove items from the cart based on the component object clicked

    // alert(this.t_price)

    if (item_quanitiy.return_single_val(index_val - 1) > 0) {
      this.t_price = totalval - this.props.ind_item.price;
      this.sum_total_cart(this.t_price);
      item_quanitiy.minus_quantity(index_val - 1);
    }
  };

  render() {
    const { ind_item } = this.props;
    return (
      <div>
        {
          <div className="item_container">
            <img src={ind_item.img} alt="null" className={"img_disp"} />
            <div className="details_contain">
              <h2 className="item_desc">{ind_item.name}</h2>
              <h3 className="item_price"> Price : $ {ind_item.price}</h3>
              <h3 className="item_desc">color : {ind_item.colour}</h3>

              <button
                className="price_btns"
                onClick={() => this.add_to_cart(ind_item.id)}
              >
                +
              </button>
              <h4 className="price_btns">Add to cart</h4>
              <button
                className="price_btns"
                onClick={() => this.remove_from_cart(ind_item.id)}
              >
                -
              </button>

              <p id="Qunatity">
                {" "}
                Quantity : {item_quanitiy.return_single_val(ind_item.id - 1)}
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Items_list;
