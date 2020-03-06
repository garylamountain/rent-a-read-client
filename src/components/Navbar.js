import React from 'react';
import logo from '../RaR.png'

const Navbar = () => {
    var Img = <img src={logo}/>
    return (
        <nav className="nav-wrapper blue">
            <div className="container">
                {/* <a className="brand-logo center">Rent-a-Read</a> */}
                <img className="brand-logo center" src={logo} height="60px" style={{paddingTop:'5px'}}></img>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </div>
        </nav> 
    )
}

export default Navbar;