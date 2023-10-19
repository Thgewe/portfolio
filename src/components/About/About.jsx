import React from 'react';
import cl from './about.module.css';

const About = () => {
    return (
        <section id={'about'} className={cl.about}>
            <div className={cl.container}>
                <h3>ABOUT ME</h3>
                <h2>Front-End developer</h2>
                <p>Good knowledge of HTML, CSS, JS, TS, React. I can use redux, redux-toolkit, redux-saga, HTMLCanvas, figma. High level of English, I can read technical documentation without any problems. There are not many projects shown on the page, but there are quite a lot of them in Github.</p>
            </div>
        </section>
    );
};

export default About;