import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DisplayProducts({ products, quantities, onQuantityChange }) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
      setShow(true);
      setShowImge(product);
    };
    
    const handleAdd = (id) => {
        onQuantityChange(id, (quantities[id] || 0) +1);
        };

    const handleSubtract = (id) => {
        if ((quantities[id] || 0) > 0) {
            onQuantityChange(id, (quantities[id] || 0) - 1);
        }
    };

   return (
    <div className="container-fluid px-0 product-container"
    style={{
      border: '1px solid #ced4da',
      borderRadius: '6px',
  
    }}>
{products.map((product) => (
  <div
    key={product.id}
    className="d-flex border-bottom product-row p-2 align-items-center justify-content-flex-start"
  >
    {/* Product info */}
    <div className="me-4" style={{ width: "140px" }}>
      <div className="mb-2">{product.name}</div>
      <img
        src={product.image}
        alt={product.name}
        width="70"
        style={{ cursor: "pointer" }}
        onClick={() => handleShow(product)}
      />
    </div>

    {/* Quantity section */}
    <div className="quantity-wrapper">
      <div className="quantity-controls d-flex align-items-end">
        <div className="btn-group">
          <button className="qty-btn" onClick={() => handleAdd(product.id)}><span>+</span></button>
          <button className="qty-btn" onClick={() => handleSubtract(product.id)}><span>−</span></button>
        </div>

        <div className="qty-column">
          <div className="quantity-label">Quantity</div>
          <div className="qty-box">{quantities[product.id] || 0}</div>
        </div>
      </div>
    </div>
  </div>  
))}

      {/* Modal */}
      {showImge && (
<Modal
  show={show}
  onHide={handleClose}
  backdropClassName="custom-backdrop"
>

<Modal.Header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
   <strong>{showImge.name}</strong>
   <Modal.Title>{showImge.desc}</Modal.Title>
                     <button
  type="button"
  className="btn btn-outline-secondary btn-sm"
  style={{padding: '0 8px', borderRadius: '4px' }}
  onClick={() => setShowImge(null)}
>
  ✕
</button>
</Modal.Header>
          <Modal.Body className="text-center">
            <img src={showImge.image} 
            width="150"
            alt={showImge.desc} 
             className="mx-5"/>
          </Modal.Body>
            <Modal.Body>
            <p>Ratings: {showImge.ratings}/5 </p>
          </Modal.Body>
    </Modal>
      )}
      </div>
  );
}

export default DisplayProducts;