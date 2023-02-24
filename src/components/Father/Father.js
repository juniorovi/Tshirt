import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import { RingContext } from '../Grandpa/Grandpa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    const [house, setHouse, gift] = useContext(RingContext);
    return (
        <div>
            <h3>Father</h3>
            <p>House: {house}</p>
            <button onClick={()=> setHouse(house+1)}>Buy Home</button>
            <div style={{ display: 'flex' }}>
                <Myself house={house} gift={gift}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;