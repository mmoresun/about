import React from 'react';
import classes from './styles.module.css';

const Wrapper = (props) => {
    return (
        <div className={classes.main}>
            {props.children}
        </div>
    );
}

export default Wrapper;
