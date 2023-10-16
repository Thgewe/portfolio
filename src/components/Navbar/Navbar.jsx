import React, {useState} from 'react';
import cl from './navbar.module.css';
import {ReactComponent as Burger} from '../../images/icons/burger.svg';
import {ReactComponent as Cross} from "../../images/icons/cross.svg";

const Navbar = () => {

    const [burgerStatus, setBurgerStatus] = useState(false);

    const closeMenu = () => setBurgerStatus(false)
    const openMenu = () => setBurgerStatus(true)

    return (
        <div className={cl.navbar}>
            <div
                className={cl.burger}
                tabIndex={burgerStatus ? -1 : 0}
                onClick={openMenu}
            >
                <Burger />
            </div>
            <div
                className={burgerStatus
                    ? cl.container + ' ' + cl.active
                    : cl.container}
            >
                <div
                    className={cl.close}
                    tabIndex={burgerStatus ? 0 : -1}
                    onClick={closeMenu}
                >
                    <Cross />
                </div>
                <nav className={cl.nav}>
                    <ul className={cl.list}>
                        <li><a href={'#'} onClick={closeMenu}>Home</a></li>
                        <li><a href={'#'} onClick={closeMenu}>About</a></li>
                        <li><a href={'#'} onClick={closeMenu}>Projects</a></li>
                        <li><a href={'#'} onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;