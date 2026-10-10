
import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="page-heading">
          <p className="eyebrow">DAY 3 · REACT ACTIVITY</p>
          <h2>Amazon Product Cart</h2>
          <p>Choose your style. Add to cart. Shop with ease.</p>
        </div>

        <section className="controls-card">
          <h3>Personalise your order</h3>

          <div className="controls">
            <div className="form-group">
              <label htmlFor="color">Choose Colour</label>

              <select
                id="color"
                value={selectedColor}
                onChange={(event) =>
                  setSelectedColor(event.target.value)
                }
              >
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="city">Delivery City</label>

              <input
                id="city"
                type="text"
                value={deliveryCity}
                onChange={(event) =>
                  setDeliveryCity(event.target.value)
                }
                placeholder="Enter delivery city"
              />
            </div>
          </div>
        </section>

        <section className="cart-controls">
          <button
            className="button add-btn"
            onClick={() =>
              setQuantity((previous) => previous + 1)
            }
          >
            + Add to Cart
          </button>

          <button
            className="button remove-btn"
            onClick={() =>
              setQuantity((previous) => Math.max(0, previous - 1))
            }
            disabled={quantity === 0}
          >
            − Remove One
          </button>

          <button
            className="button reset-btn"
            onClick={() => setQuantity(0)}
          >
            Reset Cart
          </button>

          <button
            className="button toggle-btn"
            onClick={() =>
              setShowProduct((previous) => !previous)
            }
          >
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </section>

        {showProduct ? (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        ) : (
          <div className="hidden-message">
            <span>👀</span>
            <h3>Product is hidden</h3>
            <p>
              Your cart quantity, colour, and delivery city are
              preserved.
            </p>
            <button
              className="button toggle-btn"
              onClick={() => setShowProduct(true)}
            >
              Show Product
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
