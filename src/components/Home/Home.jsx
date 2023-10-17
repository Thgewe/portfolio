import React from 'react';
import cl from './home.module.css';
import {ReactComponent as GitHub} from "../../images/icons/github.svg";
import {ReactComponent as ReactLogo} from "../../images/icons/react.svg";
import {ReactComponent as HtmlLogo} from "../../images/icons/html.svg";
import {ReactComponent as CssLogo} from "../../images/icons/css.svg";
import {ReactComponent as JavascriptLogo} from "../../images/icons/javascript.svg";
import {ReactComponent as SassLogo} from "../../images/icons/sass-1.svg";
import {ReactComponent as TypescriptLogo} from "../../images/icons/typescript.svg";

const Home = () => {
    return (
        <div className={cl.container}>
            <section id={'home'} className={cl.home}>
                <div className={cl.descr}>
                    <h1>Front-End <span>React</span> Developer</h1>
                    <p className={cl.text}>Hi, I'm Viktor Khankhatov. A Front-end React Developer from Russia, the Republic of Buryatia, Ulan-Ude</p>
                    <div className={cl.links}>
                        <a href={'https://github.com/Thgewe'}><GitHub title="GitHub"/></a>
                    </div>
                </div>
                <div className={cl.tech}>
                    <h3>Tech Stack</h3>
                    <div className={cl.stack}>
                        {/*I didn’t make it a separate component because I don’t see any particular need*/}
                        <div className={cl.logo} title={'HTML5'}>
                            <HtmlLogo />
                        </div>
                        <div className={cl.logo} title={'CSS'}>
                            <CssLogo />
                        </div>
                        <div className={cl.logo} title={'JavaScript'}>
                            <JavascriptLogo />
                        </div>
                        <div className={cl.logo} title={'TypeScript'}>
                            <TypescriptLogo />
                        </div>
                        <div className={cl.logo} title={'Sass'}>
                            <SassLogo />
                        </div>
                        <div className={cl.logo} title={'React'}>
                            <ReactLogo />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;