import React from "react";
import { Link } from "react-router-dom";
import useReviewFetch from "../../hooks/useReviewFetch";
import Review from "../Reviews/Review";
import "./Home.css";

const Home = () => {
  const reviews = useReviewFetch();
  return (
    <>
      <div className="container">
        <div className="half">
          <h1>Laptop gallary</h1>
          <p>Explore best laptop in laptop gallary.</p>
        </div>
        <div className="half">
          <div className="img">
            <img
              src="https://www.startech.com.bd/image/cache/catalog/laptop/chuwi/herobook/herobook-pro/herobook-pro-1-500x500.jpg"
              alt="watch"
            ></img>
          </div>
        </div>
      </div>
      <div className="customer-reviews-container">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          {reviews.slice(0, 3).map((review) => (
            <Review review={review} />
          ))}
        </div>
        <Link to="/reviews" className="Reviews-btn">
          All Reviews
        </Link>
      </div>
    </>
  );
};

export default Home;
