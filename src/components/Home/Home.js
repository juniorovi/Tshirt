import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirts from '../Hooks/useTshirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (selectedItem) => {
        // console.log(selectedItem);
        const exist = cart.find(kapor => kapor._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('Item already added')
        }

    }

    const handleRemovetoCart = (selectedItem) => {
        const rest = cart.filter(dress => dress._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-cointainer'>
            <div className="tshirt-cointainer">
                {/* <h3>{tShirts.length}</h3> */}
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddtoCart={handleAddtoCart}
                    ></TShirt>)
                }
                {/* {tShirts.map(tShirt=> <h2 key={tShirt._id}>{tShirt.name}</h2>)} */}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemovetoCart={handleRemovetoCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;