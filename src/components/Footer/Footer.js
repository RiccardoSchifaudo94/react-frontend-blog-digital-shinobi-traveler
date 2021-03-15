import React from 'react';
import { Privacy } from '..';
import './Footer.css';

export default function Footer({data}) {
    return (
        <footer>
            <div className="container">
                <h2>{data.footer[0].title}</h2>
                <img src={data.footer[0].image} alt="ricky-author"/>
                <p className="dst_footer_text">{data.footer[0].description}</p>
                <div className="dst_footer_icon_socials">
                        <a href={window.env.URL_LINKEDIN} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href={window.env.URL_FACEBOOK} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href={window.env.URL_INSTAGRAM} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href={window.env.URL_TWITTER} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
                <span className="dst_footer_copyright">{data.footer[0].copyright}</span>
                <Privacy/>
            </div>
        </footer>
    )
}
