import React from 'react';
import cl from './footer.module.css';
import {ReactComponent as GitHub} from '../../images/icons/github.svg';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.container}>
                <h3>Thgewe 2023</h3>
                <ul className={cl.links}>
                    <li>
                        <a href={'https://github.com/Thgewe'}><GitHub /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;