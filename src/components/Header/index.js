import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './styles.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.name}>
                <h2>
                    Anton Blagoveshchenskiy, web developer
                </h2>
            </div>
            <div className={classes.links}>
                <h2>
                    <NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        to='/me'>
                        About
                    </NavLink>
                </h2>
                <h2>
                    <NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        to='/projects'>Projects
                    </NavLink>
                </h2>
                <h2>
                    <NavLink
                        className={({ isActive }) => isActive ? classes.active : undefined}
                        to='/contact'>Contact
                    </NavLink>
                </h2>
            </div>
        </div>
    );
}

export default Header;
