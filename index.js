import React from "react";
import { createRoot } from "react-dom/client";

/*
Planning
- Header and components
  - Logo 
  - Nav Links
- Body
  - Search
  - Restaurant container
  - Restaurant Cards
      - Image
      - Name of Restaurant
      - Rating
      - Cusines
      - Time for delivery
      - 
- Footer
  - copyright
  - links
  - Address
  - Contact us
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse2.mm.bing.net/th/id/OIP.LoP6tRjIjSvCCJ3QlK-fFgHaHn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "honeydew" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://tse3.mm.bing.net/th/id/OIP.2PYrFyzDKmM7DXizioW1sAHaE7?pid=Api&P=0&h=180"
       />
      <h3 className="h3">Bamboo Tree</h3>
      <h4 className="h4">South Asian, Arabian </h4>
      <ul style={{display: "flex", justifyContent: "space-between", paddingLeft: 20}}>
        <li>4.5 stars</li>
        <li>45 MINS</li>
        <li>$80 for TWO</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <div className="search-box">
          <input
            className="search-text"
            type="text"
            placeholder="Enter your search text"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard /> 
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
