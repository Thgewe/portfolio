import React from 'react';
import cl from './projectCard.module.css';
import {ReactComponent as GitHub} from '../../images/icons/github.svg';
import {ReactComponent as Link} from '../../images/icons/link.svg';

const ProjectCard = ({image, name, description, stack, github, deploy}) => {
    return (
        <div className={cl.card}>
            <div className={cl.image}>
                <img src={image} alt={name}/>
            </div>
            <h4 className={cl.head}>{name}</h4>
            <div className={cl.descr}>{description}</div>
            <div className={cl.stack}>
                {stack.map((stackName) => <div className={cl.stack__item} key={stackName}>
                    {stackName}
                </div>)}
            </div>
            <div className={cl.links}>
                <a href={github}>GitHub <GitHub /></a>
                <a href={deploy}>Deploy <Link /></a>
            </div>
        </div>
    );
};

export default ProjectCard;