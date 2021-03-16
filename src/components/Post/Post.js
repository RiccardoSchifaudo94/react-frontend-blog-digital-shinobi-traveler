import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import UtilityObj from '../../utils/UtilityObj';
import Parser from 'html-react-parser';
import './Post.css';
import Spinner from '../Spinner/Spinner';

export default function Post() {
    let { slug } = useParams();
    const [post, setPost] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const utilObj = new UtilityObj();

   
   
    const get_single_post = async() => {
        console.log("url get single post");
        console.log(window.env.API_URL+`/?_embed&slug=${slug}`);
      
        const res = await fetch(window.env.API_URL+`?_embed&slug=${slug}`);
        await res.json().then((data)=>{
            setPost(data);
            setIsFetching(false);
            console.log(data);
        });
    }
   
    const scrollDown = () =>{
        document.getElementById('dst_blog_post').scrollIntoView({
            behavior: 'smooth'
        });
    }

    useEffect(()=>{    
        get_single_post();
    },[]);
   
    return (
            (!isFetching) ? 
            (    <div onLoad={utilObj.scrollToTop()}>
                    <div className="dst_img_section_article" style={{backgroundImage: `url(${post[0].images.large})`}}>
                        <div className="dst_info_section_article">    
                            <h1>{utilObj.stripHtml(post[0].title.rendered)}</h1> 
                            <span>{post[0].date}</span>
                            <p>Scroll</p>
                            <i className="fa fa-3x fa-angle-double-down" onClick={scrollDown}></i>
                        </div>
                    </div>
                    <div className="container">
                        <div className="dst_blog_post" id="dst_blog_post">
                            { Parser(post[0].content.rendered) }
                        </div>
                    </div>
                </div>
            ):(<Spinner/>)
    )
}