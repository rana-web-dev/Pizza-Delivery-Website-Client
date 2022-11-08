import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/home/footer/Footer';
import Nav from '../components/home/header/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;