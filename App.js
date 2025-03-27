import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Address</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const FoodContainer = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="food-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="food-item"
        alt="food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const resArray = [
  {
    "info": {
      "id": "101",
      "name": "Biryani Express",
      "cloudinaryImageId": "sample", 
      "locality": "MG Road",
      "areaName": "Bangalore",
      "costForTwo": "₹300 for two",
      "cuisines": ["North Indian", "Biryani"],
      "avgRating": 4.5,
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5.0,
        "slaString": "25-30 mins",
        "lastMileTravelString": "5 km"
      },
      "availability": {
        "nextCloseTime": "2025-03-28 23:59:59",
        "opened": true
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "isOpen": true
    }
  },
  {
    "info": {
      "id": "102",
      "name": "Pizza House",
      "cloudinaryImageId": "dog",
      "locality": "JP Nagar",
      "areaName": "Bangalore",
      "costForTwo": "₹400 for two",
      "cuisines": ["Italian", "Fast Food"],
      "avgRating": 4.2,
      "totalRatingsString": "3.5K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 7.5,
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.5 km"
      },
      "availability": {
        "nextCloseTime": "2025-03-28 22:30:00",
        "opened": true
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "isOpen": true
    }
  },
  
]


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="food-container">
        {resArray.map((restaurent) => (
          <FoodContainer key={restaurent.info.id} resData={restaurent} />

        ))}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
