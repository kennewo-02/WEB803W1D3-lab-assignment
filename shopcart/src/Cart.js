import React from "react";

function Cart({ products, quantities }) {
  const itemsInCart = products.filter(p => (quantities[p.id] || 0) > 0);

  if (itemsInCart.length === 0) {
    return <div className="text-center mt-5">Your cart is empty.</div>;
  }

  return (
    <div className="container mt-4">
      <h3>Your Cart Items</h3>
      {itemsInCart.map((product) => (
        <div key={product.id} className="product-row d-flex align-items-center">
          <div className="product-name">
          <img src={product.image} alt={product.name} width="70" className="me-3"/>
                   <div>{product.name}</div>
                   </div>
          <div className="qtn flex-grow-1">
            <div className="col-2 d-flex align-items-center"><strong>Quantity:&nbsp; {quantities[product.id]}</strong></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;