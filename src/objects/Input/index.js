import React from 'react';
import Label from '../Label';
import './styles.css';

const Input = ({ id, value, content }) => {
    return(
        <>
            <input id={id} type="checkbox" value={value} />
            <Label htmlFor={id} content={content}/>
        </>
    )
}

export default Input