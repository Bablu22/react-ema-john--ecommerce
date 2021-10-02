import React from 'react';
import './Header.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <div className="header">
            <img src={Logo} alt="" />

            <div className="nav-bar">
                <ul>
                    <li>
                        <Link to="/home">Order</Link>
                    </li>
                    <li>
                        <Link to="/review">Order Review</Link>
                    </li>
                    <li>
                        <Link to="/inventory">Manage Inventory</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Header;

