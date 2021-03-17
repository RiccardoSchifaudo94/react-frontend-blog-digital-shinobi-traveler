import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
import UtilityObj from './../../utils/UtilityObj';
import Search from '../Search/Search';

export default function Header({data}) {

    const utilObj = new UtilityObj();
    const [showSearchBar, setShowSearchBar] = useState(false);
    const scrollToTop = () => utilObj.scrollToTop();

    return (
        <>
        <nav className="dst_header" id="top">
            <div className="container">
                <img src={data.header[0].image} width="50" height="50" alt="digital-shinobi-traveler"/>
                <h1>{data.header[0].title}</h1>
                <span>{data.header[0].description}</span>
            </div>
            <div className="dst_sub_header">
                <div className="container">
                    <ul>
                        { data.header[0].items.map((item,key)=>(<li key={key}><a rel="noreferrer" href={item.url}>{item.text}</a></li>)) }
                        <li onClick={()=>{setShowSearchBar(!showSearchBar);}}>
                            {
                                showSearchBar 
                                ?(<Link to="/"><i className="fa fa-times"></i></Link>)
                                :(<Link to="/search"><i className="fa fa-search"></i></Link>)
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <i className="fa fa-2x fa-angle-double-up dst_top_menu" onClick={()=>{scrollToTop()}}></i>
        </nav>
        </>
    )
}
