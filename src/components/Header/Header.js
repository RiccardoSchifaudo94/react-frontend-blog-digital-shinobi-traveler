import React from 'react';
import "./Header.css";

export default function Header({data}) {
    return (
        <nav className="dst_header" id="top">
            <div className="container">
                <img src={data.header[0].image} width="75" height="75" alt="digital-shinobi-traveler"/>
                <h1>{data.header[0].title}</h1>
                <span>{data.header[0].description}</span>
            </div>
            <div className="dst_sub_header">
                <div className="container">
                    <ul>
                        { data.header[0].items.map((item)=>(<li><a rel="noreferrer" href={item.url} target="_blank">{item.text}</a></li>)) }
                    </ul>
                </div>
            </div>
            <a href="#top"><i className="fa fa-2x fa-angle-double-up dst_top_menu"></i></a>
        </nav>
    )
}
