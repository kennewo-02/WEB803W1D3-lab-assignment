import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import productsData from "./Products";
import Navbar from "./Navbar";
import DisplayProducts from "./DisplayProducts";
import Cart from "./Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
products: productsData,      
      quantities: {},
    };
  }

  handleQuantityChange = (id, value) => {
    this.setState(prev => ({
      quantities: {
        ...prev.quantities,
        [id]: Number(value),
      },
    }));
  };

  getTotalItems =() => {
    return Object.values(this.state.quantities).reduce(
      (total, qty) => total + qty,
      0
    );
  };
  

 render() {
    const { products, quantities } = this.state;

    return (
      <Router>
        <Navbar totalItems={this.getTotalItems()} />
        <Routes>
          <Route 
            path="/" 
            element={
              <DisplayProducts 
                products={products} 
                quantities={quantities} 
                onQuantityChange={this.handleQuantityChange} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                products={products} 
                quantities={quantities} 
              />
            } 
          />
        </Routes>
      </Router>
    );
  }
}

export default App;