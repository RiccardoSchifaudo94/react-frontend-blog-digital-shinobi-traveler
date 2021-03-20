import React, {useState, useEffect} from 'react';
import {useParams, Link, Redirect} from 'react-router-dom';
import UtilityObj from '../../utils/UtilityObj';
import Parser from 'html-react-parser';
import './Post.css';
import Spinner from '../Spinner/Spinner';
import Carousel from '../Carousel/Carousel';
import carousel_json from '../../data_mocks/carousel_mock/it-mock.json'


export default function Post({data,posts}) {
    console.log(posts);
    let { slug } = useParams();
    const [post, setPost] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const utilObj = new UtilityObj();
    
    const get_single_post = async() => {
     
        const res = await fetch(process.env.REACT_APP_API_URL+`posts?_embed&slug=${slug}`);
        
        await res.json().then((data)=>{
            if(data.length===0){
                setPost([]);
                setIsFetching(false);
            }else{
                setPost(data);
                setIsFetching(false);
            }  
        }).catch((err)=>{
            console.error(err);
        });
    }
   
    const scrollDown = () =>{
        document.getElementById('dst_blog_post').scrollIntoView({
            behavior: 'smooth'
        });
    }

    useEffect(()=>{    
        utilObj.scrollToTop();
        get_single_post();
    },[]);
   
    return (
            (!isFetching) 
                        ? 
                        ((post.length!==0) 
                            ?(  
                                <div>
                                    {
                                    (post[0].featured_media!==0)&&
                                        (
                                            <div className="dst_img_section_article" style={{backgroundImage: `url(${post[0].images.large})`}}>
                                                <div className="dst_info_section_article">    
                                                    <h1>{utilObj.stripHtml(post[0].title.rendered)}</h1> 
                                                    <span>{utilObj.formatDate(post[0].date, data.lang)}</span>
                                                    <p>Scroll</p>
                                                    <i className="fa fa-3x fa-angle-double-down" onClick={scrollDown}></i>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="container">
                                        <div className="dst_blog_post" id="dst_blog_post">
                                            { Parser(post[0].content.rendered) }
                                        </div>
                                        <Carousel data={data} posts={carousel_json} autoplay={false}/>
                                    </div>
                                </div>
                            )
                            :(<Redirect to="/"/>)
            ):(<Spinner/>)
    )
}
