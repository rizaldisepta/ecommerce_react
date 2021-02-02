import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';

const Header = props => {
    return(
        <header className="header">
        <div className="wrap">
            <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="Simple Logo" />
                </Link>   
            </div>
            
            <div className="callToActions">
                <li>
                    <Link to="/registration">
                        Register
                    </Link>
                </li>
            </div>
        </div>
        </header>
    );
};

export default Header;