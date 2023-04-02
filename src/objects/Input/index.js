import React from 'react';
import Label from '../Label';
import './styles.css';

const Input = ({ id = "", value = "", content = "", type = "text" }) => {
    return(
        <>
            <input id={id} type={type} value={value} />
            <Label htmlFor={id} content={content}/>
        </>
    )
}

export default Input