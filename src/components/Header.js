// import { useState } from "react";
import React from "react";
import logo1 from "../img/logo1.png"
import introduce from '../img/introduce.png'
import "../css/header.css"

const Header = () => {
    return ( 
        <header className="header">
            <a href="#"><img src={logo1} className="logo" alt="logo" /></a>
            <div><p style={{color:'#fff'}}>+00 9875466</p></div>
            
            <nav className="navbar navbar-expand-md navbar-light ">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About us
                            </a>
                            <ul className="dropdown-menu introduce-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">Introduce</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>INTRODUCE</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">Our People</a>
                                    <ul className="dropdown-menu" style={{top:'-84px'}}>
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>OUR PEOPLE</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">QHSE</a>
                                    <ul className="dropdown-menu" style={{top:'-168px'}}>
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>QHSE</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">Asset And Facility</a>
                                    <ul className="dropdown-menu" style={{top:'-252px'}}>
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>Asset And Facility</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                News & Event
                            </a>
                            <ul className="dropdown-menu newsEvent-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">Blogs</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>BLOGS</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">Company News</a>
                                    <ul className="dropdown-menu" style={{top:'-84px'}}>
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>COMPANY NEWS</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">Industry News</a>
                                    <ul className="dropdown-menu" style={{top:'-168px'}}>
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>INDUSTRY NEWS</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu"><a className="dropdown-item " href="#">News And Event</a>
                                    <ul className="dropdown-menu" style={{top:'-252px'}}>
                                        <li>
                                            <div className="dropdown-item" href="#" style={{display:'flex'}}>
                                                <div>
                                                    <img src={introduce} style={{transform:'unset'}}/>
                                                </div>
                                                <div className="content">
                                                    <p>NEWS AND EVENT</p>
                                                    <br></br>
                                                    <span>
                                                        The Company comprises dynamic qualified personnel, 
                                                        experienced in the field of offshore transportation and installation
                                                    </span>
                                                    <br></br>
                                                    <a href="#">SEE MORE +</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;