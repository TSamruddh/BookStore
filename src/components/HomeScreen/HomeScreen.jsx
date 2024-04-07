import React, { useEffect, useState, useCallback } from "react";
import "./HomeScreen.css";
import BookList from "../BookList/BookList";
// import { useLocation } from "react-router-dom";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  //   const location = useLocation();
  //   console.log("location", location);
  const URL = "http://openlibrary.org/search.json?title=react";
  const fetchBooks = useCallback(async () => {
    // setLoading(true);
    try {
      // console.log(`${URL}${searchTerm}`);
      const response = await fetch(`${URL}`);
      console.log(response);
      const data = await response.json();
      console.log(data);

      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);
        console.log("newBooks= " + newBooks);
      }
      // setLoading(false);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="holder">{<BookList books={books} loading={false} />}</div>
  );
};

export default HomeScreen;
