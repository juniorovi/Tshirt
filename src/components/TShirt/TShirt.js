import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddtoCart, tShirt}) => {
    const {name, picture, price} = tShirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price:$ {price}</p>
            <button onClick={()=>handleAddtoCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;