import React, { useState, useEffect } from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import UtilityObj from './../../utils/UtilityObj';
import "./Header.css";



export default function Header({data}) {

    const utilObj = new UtilityObj();
    
    const [showSearchBar, setShowSearchBar] = useState(false);
    
    const scrollToTop = () => utilObj.scrollToTop();

    const location = useLocation();
    const history = useHistory();


    useEffect(()=>{
        if(location.pathname!=='/search'){
            setShowSearchBar(false);
        }       
    },[location]);


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
