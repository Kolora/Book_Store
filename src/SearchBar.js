import axios from "axios";
import React, { useEffect, useState } from "react";

import BookList from "./BookList.js";
import { Button } from "@material-ui/core";
import { Box, TextField } from "@mui/material";

const SearchBar = ({
  searchResults,
  setSearchResults,
  setCartItems,
  cartItems,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const list_of_search_terms = [
    "node.js",
    "express.js",
    "mongodb",
    "mysql",
    "middleware",
  ];

  // Set search results
  const handleSearch = () => {
    axios

      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
          searchTerm
        )}&key=AIzaSyAav2UZsFBJ_nkqmjbHLElNiheoOevoAd8`
      )
      .then((response) => {
        setSearchResults(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  useEffect(() => {
    let current_search_term =
      list_of_search_terms[
        Math.floor(Math.random() * list_of_search_terms.length)
      ];
    if (!searchTerm) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
            current_search_term
          )}&key=AIzaSyAav2UZsFBJ_nkqmjbHLElNiheoOevoAd8`
        )
        .then((response) => {
          setSearchResults(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, []);

  // As state is in parent, Reset searchResults onLoad
  useEffect(() => {
    setSearchResults([]);
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" gap={2}>
        <TextField
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books..."
          size="small"
        />
        <Button onClick={handleSearch} color="primary" variant="contained">
          Search
        </Button>
      </Box>
      <BookList
        setCartItems={setCartItems}
        cartItems={cartItems}
        books={searchResults}
      />
    </Box>
  );
};

export default SearchBar;
