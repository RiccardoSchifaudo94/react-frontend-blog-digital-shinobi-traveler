import React from 'react';
import { Privacy } from '../../components';
import './Footer.css';


export default function Footer({data}) {
    return (
        <footer>
            <div className="container">
                <h2>{data.footer[0].title}</h2>
                <img src={data.footer[0].image} alt="ricky-author"/>
                <p className="dst_footer_text">{data.footer[0].description}</p>
                <div className="dst_footer_icon_socials">
                        <a href={data.footer[0].social_urls.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href={data.footer[0].social_urls.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                        <a href={data.footer[0].social_urls.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href={data.footer[0].social_urls.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
                {
                    (data.footer[0].items.lenght!==0)
                    &&(
                        <div className="dst_footer_nav_menu">
                        
                            <h2 className="dst_footer_nav_title">{data.footer[0].title_nav_sections}</h2>
                            <ul>
                            { data.footer[0].items.map((item,key)=>(<li key={key} className="ds_footer_desktop_item"><a rel="noreferrer" href={item.url}>{item.text}</a></li>)) }
                            </ul>
                        </div>
                    )
                }
                <span className="dst_footer_copyright">{data.footer[0].copyright}</span>
                <Privacy/>
            </div>
        </footer>
    )
}
