import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse, ring] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            {/* <p>Gift from grandpa: {gift}</p> */}
            <p>Gift from grandpa: {ring} and House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Add Home</button>
        </div>
    );
};

export default Special;