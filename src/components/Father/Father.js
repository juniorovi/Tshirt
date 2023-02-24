import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house, gift }) => {
    return (
        <div>
            <h3>Father</h3>
            <p>House: {house}</p>
            <div style={{ display: 'flex' }}>
                <Myself house={house} gift={gift}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;