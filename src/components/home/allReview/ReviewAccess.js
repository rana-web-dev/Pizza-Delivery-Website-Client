import React from 'react';

const ReviewAccess = ({ rev }) => {
    const { id, revImg, revDes, revName } = rev;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={revImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {revName}</h2>
                <p>{revDes}</p>
            </div>
        </div>
    );
};

export default ReviewAccess;