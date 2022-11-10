import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../title/title";
import ReviewAccess from "./ReviewAccess";

const AllReviews = () => {
  useTitle("All Review");
  const reviewData = useLoaderData();
  console.log(reviewData);
  const [reviews, setReview] = useState(reviewData);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReviewClick = () => {
    if (user || window.confirm("Do you want to login?")) {
      return navigate("/addReview");
    }
  };

  const handleReviewDelete = (id) => {
    const processed = window.confirm("Are you sure to delete?");
    if (processed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = reviewData.filter((ord) => ord._id !== id);
            setReview(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl text-center">All Review: {reviews.length}</h1>
      <div className="p-10 max-w-screen-xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((rev) => (
          <ReviewAccess
            key={rev._id}
            rev={rev}
            handleReviewDelete={handleReviewDelete}
          ></ReviewAccess>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleReviewClick}
          className="btn border-none bg-orange-400"
        >
          Add Your Review
        </button>
      </div>
    </div>
  );
};

export default AllReviews;
