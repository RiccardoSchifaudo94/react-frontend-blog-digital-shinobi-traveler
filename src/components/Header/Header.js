import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import UtilityObj from './../../utils/UtilityObj';
import {Sidebar} from '../../components';
import "./Header.css";



export default function Header({data, selectLang, isMobile}) {

    const utilObj = new UtilityObj();
    
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showSidebar,setShowSidebar] = useState(isMobile);
    
    
    const scrollToTop = () => utilObj.scrollToTop();

    const location = useLocation();

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
                       <li className="ds_header_mobile_item"><Link to="/"><i className="fa fa-angle-left" style={{fontWeight:"900",fontSize:"20px"}}></i></Link></li>
                        <li className="ds_header_mobile_item" onClick={()=>{setShowSidebar(!showSidebar);}}><a><i className="fa fa-reorder"></i></a></li>
                        { data.header[0].items.map((item,key)=>(<li key={key} className="ds_header_desktop_item">{(item.type==='link')?(<Link to={`${item.url}`}>{item.text}</Link>):(<a rel="noreferrer" href={item.url}>{item.text}</a>)}</li>)) }
                        <li onClick={()=>{setShowSearchBar(!showSearchBar);}}>
                            {
                                showSearchBar 
                                ?(<Link to="/"><i className="fa fa-times"></i></Link>)
                                :(<Link to="/search"><i className="fa fa-search"></i></Link>)
                            }
                        </li>
                        <li>
                            <select className="dst_select_lang" value={data.lang} onChange={(e)=>selectLang(e.target.value)}>
                                <option value="it">Ita</option>
                                <option value="en">Eng</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <i className="fa fa-2x fa-angle-double-up dst_top_menu" onClick={()=>{scrollToTop()}}></i>
        </nav>
        <Sidebar data={data} showSidebar={showSidebar}/>
        </>
    )
}
