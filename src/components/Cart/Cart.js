import React, { Fragment } from 'react';
import './Cart.css'

const Cart = ({cart, handleRemovetoCart}) => {
    console.log(cart)
    //conditional rendering options
    //1. Element variable
    //2. ternary operator condition ? true : false
    //3. && operator (shorthand)
    //4. || operator
    let command;
    if(cart.length===0){
        command= <p>Please Add at least one item</p>
    }
    else if(cart.length===1){
        command= <p>Please Add more...</p>
    }
    else{
        command =<p>Thanks for adding items</p>
    }
    return (
        <div>
            <h1>This is Order Cart<br></br>Total selected item: {cart.length}</h1>
            
            {
                cart.map(genji=><p>
                    {genji.name}
                    <button onClick={()=>handleRemovetoCart(genji)}>X</button>
                    </p>)
            }
            {command}
            {cart.length===0 || <div className='bisque'><h1>Thank you for buying</h1></div>}
            {cart.length===3 && <div className='bisque'><h1>Good Purchase</h1></div>}
            {/* {cart.length !== 4 ? Fragment : <button>Remove All</button>} */}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;