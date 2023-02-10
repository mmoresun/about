import React from 'react';
import classes from './styles.module.css';
import Header from '../../components/Header';

const ComponentWrapper = (props) => {
    return (
        <>            
            <div className={classes.componentwrapper}>
                {props.children}
            </div>
        </>
    );
}

export default ComponentWrapper;
