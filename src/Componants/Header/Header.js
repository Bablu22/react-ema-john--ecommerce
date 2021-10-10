import React from 'react';
import './Header.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAutht';
const Header = () => {
    const { user, logOut } = useAuth();
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
                    {user.email ?
                        <li>
                            <small>{user.displayName}</small>
                            <Link onClick={logOut} to="/login">Logout</Link>
                        </li> :
                        <li>
                            <Link to="/login">Login</Link>
                        </li>}
                </ul>
            </div>
        </div>
    );
};

export default Header;

