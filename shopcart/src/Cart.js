import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Cart({ products, quantities }) {
  const itemsInCart = products.filter(p => (quantities[p.id] || 0) > 0);
  const navigate = useNavigate();


return (
  <>
    {itemsInCart.length === 0 ? (
      <div className="container mt-4">
        <h4>Your Cart Items</h4>
        <p>There are 0 items in your cart.</p>
        <Button
          variant="success"
          size="sm"
          onClick={() => navigate("/")}
        >
          Continue Shop
        </Button>
      </div>
    ) : (
      <div className="container mt-4">
        <h3>Your Cart Items</h3>
        {itemsInCart.map((product) => (
          <div key={product.id} className="product-row d-flex align-items-center mb-2">
            <div className="product-name">
              <img src={product.image} alt={product.name} width="70" className="me-3" />
              <div>{product.name}</div>
            </div>
            <div className="qtn flex-grow-1">
              <div className="col-2 d-flex align-items-center">
                <strong>Quantity:&nbsp; {quantities[product.id]}</strong>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3">
          <Button variant="primary" onClick={() => navigate("/signin")}>
            Check Out
          </Button>
        </div>
      </div>
    )}
  </>
);
}

export default Cart;
