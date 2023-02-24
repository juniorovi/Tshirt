import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({gift}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>Special</h4>
            {/* <p>Gift from grandpa: {gift}</p> */}
            <p>Gift from grandpa: {ring}</p>
        </div>
    );
};

export default Special;