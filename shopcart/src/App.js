import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import productsData from "./Products";
import Navbar from "./Navbar";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";
import SignIn from "./SignIn";
import Checkout from "./Checkout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      quantities: {},
      sortType: "normal",
    };
  }

  handleQuantityChange = (id, value) => {
    this.setState((prev) => ({
      quantities: {
        ...prev.quantities,
        [id]: Number(value),
      },
    }));
  };

  handleSortChange = (e) => {
    this.setState({ sortType: e.target.value });
  };

  getSortedProducts = () => {
    const { products, sortType } = this.state;
    let sorted = [...products];

    if (sortType === "lowest") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "highest") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => a.id - b.id);
    }

    return sorted;
  };

  getTotalItems = () => {
    return Object.values(this.state.quantities).reduce(
      (total, qty) => total + qty,
      0
    );
  };

  render() {
    const { quantities, sortType } = this.state;
    const sortedProducts = this.getSortedProducts();

    return (
      <Router>
        <Navbar totalItems={this.getTotalItems()} />

        <Routes>
          <Route
            path="/"
            element={
              <DisplayProducts
                products={sortedProducts}
                quantities={quantities}
                onQuantityChange={this.handleQuantityChange}
                sortType={sortType}
                onSortChange={this.handleSortChange}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart products={sortedProducts} quantities={quantities} />}
          />

          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/checkout"
            element={
              this.getTotalItems() > 0 ? (
                <Checkout
                  products={sortedProducts}
                  quantities={quantities}
                />
              ) : (
                <SignIn />
              )
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
