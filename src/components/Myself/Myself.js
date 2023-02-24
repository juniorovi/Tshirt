import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, gift }) => {
    return (
        <div>
            <h3>Me</h3>
            <p>House: {house}</p>
            <Special gift={gift}></Special>
        </div>
    );
};

export default Myself;