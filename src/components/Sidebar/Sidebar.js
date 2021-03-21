import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({data, showSidebar}) {
    
    const [searchKey,setSearchKey] = useState('');
   
    return (
       
        <div className={`dst_sidebar ${(showSidebar) ?`dst_sidebar_open ` :``}`}>
            <a className="dst_sidebar_close" onClick={()=>{document.querySelector(".dst_sidebar").classList.remove("dst_sidebar_open");}}><i className="fa fa-times"></i></a>
            <img src={data.header[0].image} width="50" height="50" alt="digital-shinobi-traveler"/>
            <h1>{data.header[0].title}</h1>
            <span>{data.header[0].description}</span>
            <hr/>
            <div className="dst_sidebar_block">
                <form method="GET" action="/search">
                    <input  type="text" placeholder={data.searchbar[0].placeholder_mini} value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>
                    <input  type="hidden" name="s"  value={searchKey}/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <hr/>
            <ul>
                { data.header[0].items.map((item,key)=>(<li key={key}><a rel="noreferrer" href={item.url}>{item.text}</a></li>)) }
            </ul>
            <hr/>
            <div className="dst_sidebar_icon_socials">
                        <a href={data.footer[0].social_urls.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href={data.footer[0].social_urls.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                        <a href={data.footer[0].social_urls.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href={data.footer[0].social_urls.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    )
}
