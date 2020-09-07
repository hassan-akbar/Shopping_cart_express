import Product_data from "../data/products.json";

class quanity_counter {
  constructor() {
    this.state = {
      item_quantity: [],
    };
  }

  initialize_quan = () => {
    this.state.item_quantity.length = Product_data.length;
    this.state.item_quantity.fill(0);
  };

  print_length = () => {
    this.initialize_quan();
    console.log(this.state.item_quantity.length);
    console.log("curr_items = ", this.print_items());
    this.add_quantity(1);
    this.print_items();
    return 1;
  };

  print_items = () => {
    console.log(this.state.item_quantity);
  };

  add_quantity = (index_val) => {
    this.state.item_quantity[index_val]++;
    this.print_items();
  };
  minus_quantity = (index_val) => {
    this.state.item_quantity[index_val]--;
    this.print_items();
  };
  return_single_val = (index_val) => {
    return this.state.item_quantity[index_val];
  };
}

export default quanity_counter;
