import React, { Component } from "react";

let totalval = 0;
class Items_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantiy: 0,
    };
  }

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

  add_to_cart = () => {
    // function implimented to add items to cart based on the component object clicked

    this.t_price = this.props.ind_item.price + totalval;
    //alert(this.t_price)
    this.sum_total_cart(this.t_price);
    console.log(this.props);
    this.state.quantiy++;
  };

  remove_from_cart = () => {
    // function implimented to remove items from the cart based on the component object clicked

    // alert(this.t_price)

    if (this.state.quantiy > 0) {
      this.t_price = totalval - this.props.ind_item.price;
      this.state.quantiy--;
      this.sum_total_cart(this.t_price);
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

              <button className="price_btns" onClick={this.add_to_cart}>
                +
              </button>
              <h4 className="price_btns">Add to cart</h4>
              <button className="price_btns" onClick={this.remove_from_cart}>
                -
              </button>
              <p id="Qunatity"> Quantity : {this.state.quantiy}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Items_list;
