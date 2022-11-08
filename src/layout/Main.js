import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/home/banner/Banner';
import Nav from '../components/home/header/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;