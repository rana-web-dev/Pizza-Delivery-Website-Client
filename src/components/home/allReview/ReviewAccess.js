import React from "react";

const ReviewAccess = ({ rev, handleReviewDelete }) => {
  const { _id, revImg, revDes, revName } = rev;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={revImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {revName}</h2>
        <p>{revDes}</p>
      </div>
      <button
        className="mb-3"
        onClick={() => {
          handleReviewDelete(_id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ReviewAccess;
