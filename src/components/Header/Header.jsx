import React from 'react';
import cl from './header.module.css';
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <a className={cl.logo} href={'#'}>
                    <h3>Viktor.<span>Khan</span></h3>
                </a>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;