import React, { useContext } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Nav = () => {

    const {user, logOut} = useContext(AuthContext);

    const items = <>
        <Link to='/home'>Home</Link>,
        <Link to='/blog'>Blogs</Link>,
        {
            user?.email ?
            <>
            <Link to='/addServices' >Add Services</Link>
            <Link to='/allReviews' >My Review</Link>
            <Link to='/addReview' >Add Review</Link>
            <Link to='' onClick={logOut}>LogOut</Link>
            </>
            :
            <Link to='/login'>LogIn</Link>
        }
    </>

    return (
        <div className='bg-orange-400'>
            <div className="navbar max-w-screen-xl mx-auto justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{items}</li>
                        </ul>
                    </div>
                    <div className="btn btn-ghost normal-case text-xl">
                        <img src={require('../../../images/pizza-logo-free-vector.png')} width='40px' alt='' img></img> &nbsp;
                        <span className='text-white'>Pizza Quick Delivery</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>{items}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;