import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div classNAme="logoName">
            <img src="logoDRD.png" alt="David Roem Macul Dumalag" style={{ width: '45px', height: 'auto' }} />
        </div>
        <ul>
            <li>
                <a href="#hero">
                    Home
                </a>
            </li>
            <li>
                <a href="#about">
                    About
                </a>
            </li>
            <li>
                <a href="#projects">
                    Projects
                </a>
            </li>
            <li className="contactbtn">
                <a href="#contact">
                    Contact
                </a>
            </li>
        </ul>     
    </nav>
  );
};

export default Navbar;