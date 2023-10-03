import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import loginIcon from "../../assets/loginIcon.png"

const Navbar = () => {
    return (
        <nav>
            <div className='leftNav'>
                <Link to="/">
                    <h1>GICE</h1>
                </Link>
            </div>
            <div className='rightNavbar'>
                <ul>
                    <li>
                        <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link to="/divisas">Divisas</Link>
                    </li>
                    <li>
                        <Link to="/criptomonedas">Criptomonedas</Link>
                    </li>
                    <li>
                        <Link to="/curso">Curso</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <img src={loginIcon} className='loginIcon'></img>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;