import {Outlet, Link} from "react-router-dom";
import homeLogo from '../images/logoWithNameNoBG.png'
import React from 'react'
import './NavBar.css'

const MenuList = () => {

    const onLogout = async (event) => {

        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("token");

        window.location.reload();
    };

    const username = localStorage.getItem("email");
    const firstName = localStorage.getItem("name");


    return (
        !username ? (
                <>
                    <nav>
                        <Link to="/"><img src={homeLogo} className='nav-logo' alt=""/></Link>
                        <ul className="nav-items">
                            <li>
                                <Link to="/SignUp">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/">Sign in</Link>
                            </li>
                        </ul>
                    </nav>

                    <Outlet/>
                </>
            ) :
            (
                <>
                    <nav>
                        <Link to="/"><img src={homeLogo} className='nav-logo' alt=""/></Link>
                        <ul className="nav-items">
                            <li className="user">
                                Hello {firstName}
                            </li>
                            <li onClick={onLogout} className="logout">
                                <Link to="/">Log-Out</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet/>
                </>
            )
    )
};

export default MenuList;