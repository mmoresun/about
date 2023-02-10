import React from 'react';
import ComponentWrapper from '../ComponentWrapper';

const Contact = () => {
    return (
        <ComponentWrapper>
            <h2>Write to me if you want to offer me a job, need advice, or have some questions:</h2>
            <ul>
                <li>Telegram: <a href='https://t.me/zzebra'>@zzebra</a></li>
                <li>email: <a href='mailto: anton.blagoveshchenskiy@gmail.com'>anton.blagoveshchenskiy@gmail.com</a></li>
                <li>LinkedIn: <a href='https://www.linkedin.com/in/anton-blagoveshchenskiy/'>www.linkedin.com/in/anton-blagoveshchenskiy</a></li>
            </ul>
        </ComponentWrapper>
    );
}

export default Contact;
