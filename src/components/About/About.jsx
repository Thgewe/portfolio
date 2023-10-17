import React from 'react';
import cl from './about.module.css';

const About = () => {
    return (
        <section className={cl.about}>
            <div className={cl.container}>
                <h3>ABOUT ME</h3>
                <h2>Front-End developer</h2>
                <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and SCSS. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus, perspiciatis. Blanditiis commodi eum incidunt laborum maiores possimus qui vel?</p>
            </div>
        </section>
    );
};

export default About;