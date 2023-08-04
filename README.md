# Deploy link 
https://4xmf5m.csb.app/

# Book Store Application

Welcome to the Book Store Application! This is a React-based web application where users can view books, search for books, add books to the cart, view the final price of the cart items,go to checkout and make a payment. It offers a dynamic and interactive user experience.

# Features

Browse Books: This functionality allows users to see a list of available books in the Book Store Application. This is implemented by creating a component that fetches books data from Google API. Then, render the list of books on the user interface, displaying relevant information like book title, author, cover image, and price.

Search Functionality: The application provides a search bar where users can enter keywords to find books matching their search query. The search is optimized to provide relevant results by filtering the list of books to show only those that match the search query.

Shopping Cart: Users can add books to their cart as they browse through the collection. The cart displays the selected items, along with their individual prices. Each book in the list have a button functionality to add it to the cart. When a user clicks this button, the corresponding book is added to the shopping cart. 

Price Calculation: As users modify the contents of their cart, the application dynamically calculates the total price. Displays total price information on the user interface, so users can see the total cost of their selected items before proceeding to checkout.

Checkout process and Payment : Users enter their payment details address and credit card information to complete the transaction. After a successful payment, UI displays a confirmation message to the user.

# Technologies Used

React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.

CSS or CSS-in-JS: Styling is done using CSS and  Material UI which is an open-source React component library that implements Google's Material Design to ensure a consistent and visually appealing user interface.

Axios: Axios is used for making API requests to retrieve book information and handle user interactions.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Node.js: https://nodejs.org (Recommended version: LTS)
- Material UI

## Installation

To start the project, first, clone this repository:

```bash
git clone <repository_url>
cd Book_Store
npm install
npm start
```

