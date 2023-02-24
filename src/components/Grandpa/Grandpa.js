import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

// export const RingContext = createContext('Dimond Ring');
export const RingContext = createContext('Default Value');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const gift = 'Gold Ring';
    const handleBuyHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        // <RingContext.Provider value='Alur Ring'>
        // <RingContext.Provider value={gift}>
        // <RingContext.Provider value={[gift, house]}>
        <RingContext.Provider value={[house, setHouse, gift]}>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <p>House: {house}</p>
                <button onClick={() => handleBuyHouse()}>Buy Home</button>
                <section style={{ display: 'flex' }}>
                    <Father house={house} gift={gift}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;