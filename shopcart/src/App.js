import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "Unisex Cologne",
          image: "/products/cologne.jpg",
        },
        {
          id: 2,
          name: "Apple iWatch",
          image: "/products/iwatch.jpg",
        },
        {
          id: 3,
          name: "Unique Mug",
          image: "/products/mug.jpg",
        },
        {
          id: 4,
          name: "Mens Wallet",
          image: "/products/wallet.jpg",
        },
      ],
      quantities: {},
    };
  }

  handleQuantityChange = (id, value) => {
    this.setState((prevState) => ({
      quantities: {
        ...prevState.quantities,
        [id]: Number(value),
      },
    }));
  };

  getTotalItems() {
    return Object.values(this.state.quantities).reduce(
      (total, qty) => total + qty,
      0
    );
  }

  render() {
    const { products, quantities } = this.state;

    return (
      <div className="app-wrapper">
<nav className="navbar navbar-light bg-info px-4">
  <span className="navbar-brand mb-0 h4 text-dark">
    Shop to React
  </span>
  <span className="text-dark ms-auto d-flex align-items-center">
    <i className="bi bi-cart-fill me-1"></i>
    {this.getTotalItems()} items
  </span>
</nav>


        <div className="container-fluid px-0">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              quantity={quantities[product.id] || 0}
              onQuantityChange={this.handleQuantityChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

function ProductItem({ product, quantity, onQuantityChange }) {
  return (
    <div className="d-flex border-bottom product-row">
<div className="me-4" style={{ width: "140px" }}>
  <div className="d-block mb-2">{product.name}</div>
  <div className="text-center">
    <img src={product.image} alt={product.name} width="70" />
  </div>
</div>

      <div className="d-flex align-items-center">
        <input
          type="number"
          min="0"
          className="form-control text-center"
          style={{ width: "60px" }}
          value={quantity}
          onChange={(e) =>
            onQuantityChange(product.id, e.target.value)
          }
        />
        <span className="ms-2">quantity</span>
      </div>
    </div>
  );
}
export default App;
