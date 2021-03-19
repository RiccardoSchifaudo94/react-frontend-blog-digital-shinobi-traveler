import React,{useEffect,useState} from 'react';
import Parser from 'html-react-parser';
import {useParams, Redirect, Link, useLocation} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import UtilityObj from '../../utils/UtilityObj';
import './Page.css';

export default function Page({data}) {
    
    let {slug} = useParams();
    const current_page = useLocation().pathname;
    const menu_items = data.header[0].items;
    let css = null;

    menu_items.map((item)=>{
        if(item.url===current_page)
        css = item.css;
    });
    switch(css){
        case 'about':
            require('../Page/styles/about.css');
        break;
        case 'contacts':
            require('../Page/styles/contacts.css');
        break;
        default:

        break;
    }
       
    const [page,setPage] = useState([]);
    const [isFetching,setIsFetching] = useState(true);
    const utilObj = new UtilityObj();

    const get_page = async() =>{
     
        const res_page = await fetch(process.env.REACT_APP_API_URL+`pages?slug=${slug}&_embed`);
        
        await res_page.json().then((data)=>{
            (data.length===0) ? setPage([]): setPage(data);
            setIsFetching(false);        
        }).catch((err)=>console.error(err));

    }

    useEffect(()=>{
        get_page();
    },[]);
    
    const scrollDown = () =>{
        document.getElementById('dst_blog_page').scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <div>
            {
             (!isFetching)
                ?((page.length!==0)
                    ?
                    (  <div>
                           
                            {
                                (page[0].featured_media!==0)
                                &&
                                (<div className="dst_img_section_article" style={{backgroundImage: `url(${page[0]["_embedded"]["wp:featuredmedia"][0]["source_url"]})`}}>
                                    <div className="dst_back_home">
                                        <Link to="/"> 
                                            <i className="fa fa-3x fa-angle-double-left"></i>Back
                                        </Link>
                                    </div>
                                    <div className="dst_info_section_article">    
                                        <h1>{utilObj.stripHtml(page[0].title.rendered)}</h1> 
                                        <span>{utilObj.formatDate(page[0].date, data.lang)}</span>
                                        <p>Scroll</p>
                                        <i className="fa fa-3x fa-angle-double-down" onClick={scrollDown}></i>
                                    </div>
                                 </div> 
                                )
                            }
                            <div className="dst_blog_page" id="dst_blog_page">
                                <div className="container">
                                    { (page[0].featured_media===0)
                                        &&
                                        (<h1>{utilObj.stripHtml(page[0].title.rendered)}</h1>)
                                    }
                                    {Parser(page[0].content.rendered)}
                                </div>
                            </div>
                        </div>
                    )
                    :(<Redirect to="/*"/>))
                :(<Spinner/>)
            }
        </div>
    )
}