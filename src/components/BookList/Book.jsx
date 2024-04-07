import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import { useGlobalContext } from "../../context.";

const Book = (book) => {
  const { setAddToCart, addToCart } = useGlobalContext();
  function addToCartBook(book) {
    // console.log("addToCart yo ", book);
    // console.log("book yo " + book);
    // setAddToCart(addToCart.push(book));
    const foundIndex = addToCart.findIndex((item) => item.id === book.id);
    console.log("foundIndex ", foundIndex);

    if (foundIndex !== -1) {
      const updatedCart = addToCart.map((item, index) => {
        if (index === foundIndex) {
          return {
            ...item,
            quantity: item.quantity + 1, // Increment quantity by 1
          };
        }
        return item;
      });
      setAddToCart(updatedCart);
    } else {
      setAddToCart([...addToCart, { ...book, cartProp: true, quantity: 1 }]);
    }
  }
  // console.log(addToCart);

  return (
    <div className="book-item flex flex-column flex-sb">
      <Link to={`/book/${book.id}`} {...book}>
        <div className="book-item-img">
          <img src={book.cover_img} alt="cover" />
        </div>
      </Link>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author?.join(", ")}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        {!book.cartProp && (
          <button className="addToCartBtn" onClick={() => addToCartBook(book)}>
            Add to cart
          </button>
        )}
        {book?.quantity > 0 && <div><strong>Quantity:{book?.quantity}</strong> </div>}
      </div>
    </div>
  );
};

export default Book;
