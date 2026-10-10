
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  return (
    <section className="product-card">
      <div className="product-image-container">
        <span className="product-badge">AMAZON CHOICE</span>

        <img
          className="product-image"
          src="https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85"
          alt="Wireless computer mouse"
        />
      </div>

      <div className="product-information">
        <p className="product-category">COMPUTER ACCESSORIES</p>

        <h2>{productName}</h2>

        <div className="product-rating">
          <span>★★★★★</span>
          <small>4.5 out of 5</small>
        </div>

        <p className="product-description">
          Smooth, comfortable, and reliable wireless mouse for everyday
          work, study, and browsing.
        </p>

        <div className="product-price">
          <span>₹{price}</span>
          <small>Inclusive of all taxes</small>
        </div>

        <div className="product-divider" />

        <div className="product-detail-row">
          <span>Product</span>
          <strong>{productName}</strong>
        </div>

        <div className="product-detail-row">
          <span>Price per item</span>
          <strong>₹{price}</strong>
        </div>

        <div className="product-detail-row">
          <span>Colour</span>
          <strong>{selectedColor}</strong>
        </div>

        <div className="product-detail-row">
          <span>Deliver to</span>
          <strong>{deliveryCity || "Not entered"}</strong>
        </div>

        <div className="product-detail-row">
          <span>Cart Quantity</span>
          <strong>{quantity}</strong>
        </div>

        <div className="product-total">
          <span>Total Amount</span>
          <strong>₹{totalAmount}</strong>
        </div>

        <div
          className={`cart-status ${
            quantity === 0 ? "empty-status" : "added-status"
          }`}
        >
          <span className="status-dot" />
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
