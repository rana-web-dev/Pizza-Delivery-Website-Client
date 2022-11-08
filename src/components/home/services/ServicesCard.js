import React from 'react';

const ServicesCard = ({ srv }) => {
    const { id, title, img, des } = srv;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <h2>{title}</h2>
                </h2>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default ServicesCard;