import React from 'react';
import ComponentWrapper from '../ComponentWrapper';
import classes from './styles.module.css';

const About = () => {
    return (
        <ComponentWrapper>
            <h2>About me</h2>
            <div className={classes.about}>
                <p>
                    Hi, my name is Anton. I'm a front-end developer from Kyiv, Ukraine.
                </p>
                <p>
                    I have 1+ yr of experience with:</p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>React Router</li>
                    <li>TypeScript</li>
                    <li>REST API (fetch, axios)</li>
                    <li>Websockets (socket.io)</li>
                    <li>React Material UI</li>
                    <li>React Styled Components</li>
                    <li>Bootstrap</li>
                    <li>Google Materialize</li>
                    <li>Pure CSS</li>
                    <li>PerfectPixel add-on</li>
                    <li>Gatsby.js</li>
                    <li>NPM/Yarn</li>
                    <li>GitHub</li>
                    <li>Atlassian Jira (for team work)</li>
                    <li>Visual Studio Code</li>
                    <li>Prettier/ESLint</li>
                </ul>
                <p>
                    I like to work both in a team and on my own; I pay attention to details and constantly improve the products I work on: code refactoring and adding new features. My goal is to develop in front-end development, create a positive user experience, and ensure that my website or application is well-designed and works excellently.
                </p>
            </div>
        </ComponentWrapper>
    );
}

export default About;
