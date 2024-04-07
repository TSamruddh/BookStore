import React, { useState } from "react";
import { useGlobalContext } from "../../context.";
import Book from "../BookList/Book";
import Popup from "../Popup/Popup";
import "./Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Cart() {
  const { setAddToCart, addToCart } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const removeFromCart = (id) => {
    const updatedCart = addToCart.filter((item) => item.id !== id);
    setAddToCart(updatedCart);
  };

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>CART</h2>
          <div className="checkout-container">
            {addToCart?.length > 0 && (
              <button className="checkoutBtn" onClick={() => setOpen(true)}>
                CHECKOUT
              </button>
            )}
          </div>
        </div>
        <div className="booklist-content grid">
          {addToCart.slice(0, 30).map((item, index) => {
            return (
              <div key={index} className="book-item">
                <Book {...item} />
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {open && (
        <Popup
          content={
            <CheckoutForm
              onSubmit={() => {
                setOpen(false);
                setAddToCart([]);
              }}
            />
          }
          setOpen={() => {
            setOpen(false);
            // setAddToCart([]);
          }}
        />
      )}
    </section>
  );
}
