import React from 'react';
import ComponentWrapper from '../ComponentWrapper';
import './styles.module.css';
import projects from '../lists/projects';

const Projects = () => {
    return (
        <ComponentWrapper>
            <h2>
                My Projects (commercial and pet, made with React or HTML/CSS/JS)
            </h2>
            <ul>
                {projects.map((item) => {
                    return (
                        <li key={item.id}>
                            <h3>
                                <a href={item.link}
                                    target='_blank'
                                    rel='noreferrer'>
                                    {item.name}
                                </a>
                            </h3>
                            <p>{item.description}</p>
                        </li>
                    );
                })}
            </ul>
        </ComponentWrapper>
    );
}

export default Projects;
