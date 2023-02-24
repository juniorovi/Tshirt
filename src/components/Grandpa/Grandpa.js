import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const gift = 'Dimond Ring'
    const handleBuyHouse = ()=>{
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>House: {house}</p>
            <button onClick={()=> handleBuyHouse()}>Buy Home</button>
            <section style={{ display: 'flex' }}>
                <Father house={house} gift={gift}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;