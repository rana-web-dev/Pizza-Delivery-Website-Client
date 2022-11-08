import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/home/banner/Banner';
import Footer from '../components/home/footer/Footer';
import Nav from '../components/home/header/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;