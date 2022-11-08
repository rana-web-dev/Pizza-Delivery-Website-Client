import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServiceCard = ({ service }) => {
    const { id, title, img, des, price } = service;
    return (
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView key={id} src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Pizza: <h2>{title}</h2>
                </h2>
                <p className='text-bold text-orange-400 text-2xl'>Price: {price}</p>
                <p>{des}</p>
                <button className='btn border-none bg-orange-400'>Details</button>
            </div>
        </div>
    );
};

export default AllServiceCard;