import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
const BookList = ({ setCartItems, cartItems, books }) => {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const handleAddToCart = (book) => {
    if (cartItems.filter((obj) => obj.id === book.id)?.length) {
      return handleGoToCart();
    }
    setCartItems((prevCartItems) => [...prevCartItems, book]);
  };

  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item>
          <BookItem
            key={book.id}
            book={book}
            handleBtnClick={handleAddToCart}
            btnText={
              cartItems.filter((obj) => obj.id === book.id)?.length
                ? "Go to Cart"
                : "Add to Cart"
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
