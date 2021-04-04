import React,{useEffect,useState} from 'react';
import {useParams, Redirect, useLocation} from 'react-router-dom';
import Parser from 'html-react-parser';

import UtilityObj from '../../utils/UtilityObj';

import { Spinner , SEO } from '../../components';
import { GridContainer } from '../../containers';

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
    let image_meta = ``;

    const get_page = async() =>{
     
        const res_page = await fetch(process.env.REACT_APP_API_URL+`pages?slug=${slug}&_embed&lang=${data.lang}`);
        
        await res_page.json().then((data)=>{
            (data.length===0) ? setPage([]): setPage(data);
            setIsFetching(false);        
        }).catch((err)=>console.error(err));

    }

    useEffect(()=>{
        get_page();
        if(page.length>1){
            (page[0].featured_media!==0) 
            ? image_meta = page[0]["_embedded"]["wp:featuredmedia"][0]["source_url"] 
            : image_meta = '';
        }
        utilObj.scrollToTop();
    },[]);
    
    const scrollDown = () =>{
        document.getElementById('dst_blog_page').scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <GridContainer.Row>
            {
             (!isFetching)
                ?((page.length!==0)
                    ?
                    (  <GridContainer.Container type="fullwidth">
                            <SEO title={utilObj.stripHtml(page[0].title.rendered)} description={utilObj.stripHtml(page[0].excerpt.rendered)} siteTitle={"Digital Shinobi Traveler"} image={image_meta} slug={slug} type='page'/>
                            {
                                (page[0].featured_media!==0)
                                &&
                                (
                                    <GridContainer.Col size={12}> 
                                        <div className="dst_img_section_article" style={{backgroundImage: `url(${page[0]["_embedded"]["wp:featuredmedia"][0]["source_url"]})`}}>
                                            <div className="dst_info_section_article">    
                                                <h1>{utilObj.stripHtml(page[0].title.rendered)}</h1> 
                                                <span>{utilObj.formatDate(page[0].date, data.lang)}</span>
                                                <p>Scroll</p>
                                                <i className="fa fa-3x fa-angle-double-down" onClick={scrollDown}></i>
                                            </div>
                                        </div> 
                                        <div className="shinobi_divider_splash"></div> 
                                    </GridContainer.Col> 
                                )
                            }
                            <div className="dst_blog_page" id="dst_blog_page">
                                <GridContainer.Row>
                                    <GridContainer.Container>
                                        { (page[0].featured_media===0)
                                            &&
                                            (<h1>{utilObj.stripHtml(page[0].title.rendered)}</h1>)
                                        }
                                        {Parser(page[0].content.rendered)}
                                    </GridContainer.Container>
                                </GridContainer.Row>
                            </div>
                        </GridContainer.Container>
                    )
                    :(<Redirect to="/*"/>))
                :(<Spinner/>)
            }
        </GridContainer.Row>
    )
}
