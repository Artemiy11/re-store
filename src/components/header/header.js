import React from 'react';
import './header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <a href="#" className="logo text-dark">ReStore</a>
            <a href="#">
                <i className="card-icon fa fa-shopping-cart"></i>
                {numItems} items (${total})
            </a>
        </header>
    )
};

export default ShopHeader;