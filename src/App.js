import React, { Component } from "react";
import Items_list from "./itemslist/items_list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Items_list />
      </div>
    );
  }
}

export default App;
