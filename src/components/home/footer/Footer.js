import React from 'react';

const Footer = () => {
    return (
        <div className='bg-blue-400'>
            <footer className="footer px-5 lg:px-0 py-20 max-w-screen-xl text-xl mx-auto text-neutral-content">
                <div>
                    <span className="footer-title">Pizza</span>
                    <a className="link link-hover">Mymensingh</a>
                    <a className="link link-hover">Charpara</a>
                    <a className="link link-hover">1210</a>
                </div>
                <div>
                    <span className="footer-title">Contact Me</span>
                    <a className="link link-hover">Phone: 01655448866</a>
                    <a className="link link-hover">Email: piza@gmail.com</a>
                    <a className="link link-hover">Tell: 000114456</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;