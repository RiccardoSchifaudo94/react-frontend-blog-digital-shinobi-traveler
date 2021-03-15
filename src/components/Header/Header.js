import React from 'react';
import "./Header.css";
import UtilityObj from './../../utils/UtilityObj';

export default function Header({data}) {

    const utilObj = new UtilityObj();
    
    const scrollToTop = () => utilObj.scrollToTop();

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
                        { data.header[0].items.map((item,key)=>(<li key={key}><a rel="noreferrer" href={item.url} target="_blank">{item.text}</a></li>)) }
                    </ul>
                </div>
            </div>
            <i className="fa fa-2x fa-angle-double-up dst_top_menu" onClick={()=>{scrollToTop()}}></i>
        </nav>
    )
}
