import React from 'react';
import CustomLink from '../CostomLink/CostomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is Tshirt Collection</h1>
            <nav>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;