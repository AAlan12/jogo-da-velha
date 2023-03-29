import React from 'react';
import './styles.css';

const Label = ({ content }) => {
    return(
        <label className='label'>
            {content}
        </label>
    )
}

export default Label