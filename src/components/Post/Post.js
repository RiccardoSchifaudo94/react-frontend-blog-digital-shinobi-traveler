import React, {useState, useEffect} from 'react';
import {useParams, Link, Redirect} from 'react-router-dom';
import UtilityObj from '../../utils/UtilityObj';
import Parser from 'html-react-parser';
import './Post.css';
import Spinner from '../Spinner/Spinner';
import Carousel from '../Carousel/Carousel';
import carousel_json from '../../data_mocks/carousel_mock/it-mock.json'


export default function Post({data,posts}) {

    let { slug } = useParams();
    const [post, setPost] = useState([]);
    const [postsCarousel,setPostsCarousel] = useState([]);
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
                get_posts_carousel(data);
                setIsFetching(false);
            }  
        }).catch((err)=>{
            console.error(err);
        });
    }
   
    const get_posts_carousel = async(single_post) => {
        const res_carousel = await fetch(process.env.REACT_APP_API_URL+`posts?_embed&lang=${data.lang}&categories=${single_post[0].categories[0]}`);
        await res_carousel.json().then((data)=>{
            setPostsCarousel(data);
        }).catch((err)=>console.log(err));
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
                                                    <div className="dst_socials_section">
                                                        <a href={`https://www.facebook.com/sharer.php?u=${post[0].link}`} target="_blank">
                                                            <div style={{backgroundColor:"#3b5998",borderBottom:"3px solid #1b305d"}}>
                                                                <i className="fa fa-facebook-f"></i>
                                                            </div>
                                                        </a>
                                                        <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${post[0].link}`} target="_blank">
                                                            <div style={{backgroundColor:"#0e76a8",borderBottom:"3px solid #004b6f"}}>
                                                                <i className="fab fa-linkedin-in"></i>
                                                            </div>
                                                        </a>
                                                        <a href={`https://twitter.com/intent/tweet?text=${post[0].link}`} target="_blank">
                                                            <div style={{backgroundColor:"#1da1f2",borderBottom:"3px solid #136ba0"}}>
                                                                <i class="fab fa-twitter"></i>
                                                            </div>
                                                        </a>
                                                        <a href={`https://wa.me/?text=${post[0].link}`} target="_blank">
                                                            <div style={{backgroundColor:"#26be0a",borderBottom:"3px solid #3d751e"}}>
                                                                <i className="fab fa-whatsapp"></i>
                                                            </div>	
                                                        </a>
                                                        <a href={`mailto:?subject=${post[0].title.rendered}&body=Digital Shinobi Traveler - Riccardo Schifaudo Blog : ${post[0].link}`} title={`${post[0].title.rendered}`}>
                                                                <div style={{backgroundColor:"#999",borderBottom:"3px solid #6d6d6d"}}>
                                                                    <i className="far fa-envelope"></i>
                                                                </div>
                                                        </a>
                                                    </div>
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
                                        <Carousel data={data} posts={postsCarousel}/>
                                    </div>
                                </div>
                            )
                            :(<Redirect to="/"/>)
            ):(<Spinner/>)
    )
}
