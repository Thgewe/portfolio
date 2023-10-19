import React from 'react';
import cl from './projects.module.css';
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../utils/projects";

const Projects = () => {
    return (
        <section id={'projects'} className={cl.projects}>
            <div className={cl.container}>
                <h3>PROJECTS</h3>
                {projects.map(({
                                   image,
                                   name,
                                   description,
                                   stack,
                                   github,
                                   deploy,
                }) => <ProjectCard
                    key={name}
                    image={image}
                    name={name}
                    description={description}
                    stack={stack}
                    github={github}
                    deploy={deploy}
                />)}
            </div>
        </section>
    );
};

export default Projects;