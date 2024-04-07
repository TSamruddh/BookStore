import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { setAddToCart, addToCart } = useGlobalContext();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  function addToCartBook() {
    // console.log("addToCart yo ", book);
    // console.log("book yo " + book);
    // setAddToCart(addToCart.push(book));
    const foundIndex = addToCart.findIndex((item) => item.id === id);
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
  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Places: </span>
              <span className="text-italic">{book?.subject_places}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subject Times: </span>
              <span className="text-italic">{book?.subject_times}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
            <button className="addToCartBtn" onClick={addToCartBook}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
