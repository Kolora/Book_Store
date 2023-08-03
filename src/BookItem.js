import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    width: 400, // Adjust this value to control the minimum width of each card,
    height: 200,
  },
  cardMedia: {
    width: 150,
    height: 200,
    marginRight: theme.spacing(2),
  },
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  button: {
    // marginLeft: "auto",
    // margin: "24px"
  },
}));

const BookItem = ({
  book,
  handleBtnClick,
  disableBtn,
  btnText = "Add to Cart",
}) => {
  const classes = useStyles();
  const { volumeInfo, saleInfo } = book;
  const randomPrices = [
    17.2, 22.5, 65.1, 32.0, 45.1, 21.0, 23.1, 24.4, 26.2, 28.9, 30.1,
  ];
  console.log("price", volumeInfo?.saleInfo?.listPrice);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.cardMedia}
        image={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ""}
        alt={volumeInfo.title}
      />
      <CardContent className={classes.cardContent}>
        <Box style={{ flex: 1 }}>
          <Typography variant="h5" component="h2">
            {volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author:{" "}
            {volumeInfo.authors
              ? volumeInfo.authors.length > 1
                ? `${volumeInfo.authors[0]}...`
                : volumeInfo.authors[0]
              : "Unknown"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price:{" "}
            {saleInfo?.listPrice
              ? `$${saleInfo.listPrice?.amount}`
              : "Not For Sale"}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleBtnClick(book)}
        >
          {btnText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
