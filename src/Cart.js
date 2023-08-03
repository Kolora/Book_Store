import React from "react";
import BookItem from "./BookItem.js";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { ListPricing } from "./ListPricing.js";
const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (book) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== book.id)
    );
  };
  const onGoBackClick = () => {
    navigate("/");
  };
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Typography variant="h4">Cart</Typography>
        {cartItems.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            handleBtnClick={handleRemoveFromCart}
            btnText="Remove from Cart"
          />
        ))}
        {!cartItems?.length && (
          <Box sx={{ py: 2 }}>
            <Typography sx={{ pb: 1 }}>No Items in cart.</Typography>
            <Button color="primary" variant="contained" onClick={onGoBackClick}>
              Go to Inventory
            </Button>
          </Box>
        )}
      </Grid>
      <Grid item>
        <ListPricing cartItems={cartItems} />
      </Grid>
    </Grid>
  );
};

export default Cart;
