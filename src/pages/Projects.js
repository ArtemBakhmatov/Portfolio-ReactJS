import React from 'react';

import Project from '../components/project/Project';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <Project />
                    <Project />
                    <Project />
                </ul>
            </div>
        </main>
    );
};

export default Projects;