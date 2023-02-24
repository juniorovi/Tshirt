import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemovetoCart}) => {
    console.log(cart)
    return (
        <div>
            <h1>This is Order Cart<br></br>Total selected item: {cart.length}</h1>
            {
                cart.map(genji=><p>
                    {genji.name}
                    <button onClick={()=>handleRemovetoCart(genji)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;