import React from 'react';
import "./Header.css";

export default function Header({logo}) {
    return (
        <nav className="dst_header">
            <div className="container">
                <img src={logo} width="75" height="75" alt="digital-shinobi-traveler"/>
                <h1>Digital Shinobi Traveler</h1>
                <span>Digital Dojo for Unconventional People</span>
            </div>
            <div className="dst_sub_header">
                <div className="container">
                    <ul>
                        <li><a rel="noreferrer" href="/">Home</a></li>
                        <li><a rel="noreferrer" href="https://www.the-shinobi-arts-of-eccentricity.com/blog/su-di-me/">About</a></li>
                        <li><a rel="noreferrer" href="https://www.the-shinobi-arts-of-eccentricity.com/blog/contattami/">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
