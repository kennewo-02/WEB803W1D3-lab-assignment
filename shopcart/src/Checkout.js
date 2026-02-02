import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Checkout({ products, quantities }) {
  const navigate = useNavigate();
  const itemsInCart = products.filter(p => (quantities[p.id] || 0) > 0);
  const totalValue = itemsInCart.reduce(
    (sum, p) => sum + p.price * quantities[p.id],
    0
  );

  return (
    <div className="container mt-4">
      <h3>Check Out</h3>

      {itemsInCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <React.Fragment>
          {itemsInCart.map(p => (
            <div key={p.id} className="d-flex justify-content-between align-items-center mb-2">
              <div>{p.name}</div>
              <div>Qty: {quantities[p.id]}</div>
              <div>Price: ${p.price * quantities[p.id]}</div>
            </div>
          ))}
          <hr />
          <h5>Total: ${totalValue.toFixed(2)}</h5>
          <Button variant="success" onClick={() => alert("Payment processed!")}>
            Pay Now
          </Button>
        </React.Fragment>
      )}

      <div className="mt-3">
        <Button variant="secondary" onClick={() => navigate("/")}>
          Back to Shop
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
