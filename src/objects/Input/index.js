import React from 'react';

import './styles.css';

const Input = ({ id = "", value = "", type = "text" }) => {
    return(
        <>
            <input className='input' id={id} type={type} value={value} />          
        </>
    )
}

export default Input