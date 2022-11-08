import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesDetailsCard = ({ serviceData }) => {

    const { id, img, title, price, des } = serviceData;

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='text-center py-20 text-5xl font-bold'>Service Details</h2>
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
        </div>
    );
};

export default ServicesDetailsCard;