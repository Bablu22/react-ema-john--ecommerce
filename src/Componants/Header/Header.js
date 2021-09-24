import React from 'react';
import './Header.css'
import Logo from '../../images/logo.png'
const Header = () => {
    
    return (
        <div className="header">
            <img src={Logo} alt="" />

            <div className="nav-bar">
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Order Review</a></li>
                    <li><a href="/inventory">Manage Inventory</a></li>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;

