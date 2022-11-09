import React from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../title/title";

const ServicesDetails = () => {

    // Add Dynamic Title
    useTitle('Services Details')


    const data = useLoaderData();
    const { id, img, title, des, price, revImg, revName, revDes } = data;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 max-w-screen-xl mx-auto pb-10">
            <div className="card bg-base-100">
                <h2 className='text-center py-20 text-5xl font-bold'>Services Details</h2>
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
                </div>
            </div>
            <div className="card bg-base-100">
                <h2 className='text-center py-20 text-5xl font-bold'>Customer Review</h2>
                <figure>
                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView key={id} src={revImg}>
                                <img src={revImg} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: <h2>{revName}</h2>
                    </h2>
                    <p>{revDes}</p>
                    <Link to='/allReviews'>
                    <button className="btn border-none bg-orange-400">See All Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;