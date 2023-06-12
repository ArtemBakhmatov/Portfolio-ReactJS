import React from 'react';

import { projects } from '../helpers/projectList';
import Project from '../components/project/Project';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project, i) => {
                        return <Project 
                            key={i + 1}
                            title={project.title}
                            img={project.img}
                            index={i}
                        />
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Projects;