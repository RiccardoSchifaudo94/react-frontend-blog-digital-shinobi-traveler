import React, {useState, useEffect} from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Parser from 'html-react-parser';

import UtilityObj from '../../utils/UtilityObj';
import { Carousel, LightBox, Spinner, ProgressBar, SocialShare, Widget } from '../../components';
import { GridContainer } from '../../containers';

import './Post.css';


export default function Post({data,totalPosts, lastPosts = []}) {
    
    let { slug } = useParams();
    const [post, setPost] = useState([]);
    const [postsCarousel,setPostsCarousel] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [showLightBox,setShowLightBox] = useState(false);
    const [urlLightBox,setUrlLightBox] = useState('');
    const [slideGallery,setSlideGallery] = useState([]);
    const [counterNavPosts,setCounterNavPosts] = useState(0);
    const [showPrevNavPost,setShowPrevNavPost] = useState(false);
    const [showNextNavPost,setShowNextNavPost] = useState(true);
    const history = useHistory();

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
        await res_carousel.json().then((response)=>{
            let carousel_data_without_current_post = response.filter((x)=>x.slug!==slug);
            setPostsCarousel(carousel_data_without_current_post);
        }).catch((err)=>console.log(err));
    }

    
    const get_nav_post = async() => {
        
        if(counterNavPosts!==0&&counterNavPosts<=totalPosts){

            if(counterNavPosts>1)
                setShowPrevNavPost(true);
            else
                setShowPrevNavPost(false);

            if(counterNavPosts===totalPosts)
                setShowNextNavPost(false);
            
            setIsFetching(true);
            
            let url_next_post = process.env.REACT_APP_API_URL+`posts?_embed&lang=${data.lang}&per_page=1&page=${counterNavPosts}`;
    
            const res_next_post = await fetch(url_next_post);  
            await res_next_post.json().then((data)=>{
                history.push(data[0].slug);
                utilObj.scrollToTop();
                setPost(data);   
                get_posts_carousel(data);
                setIsFetching(false);
            }).catch((err)=>console.log(err));  

        }
       
       
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

    useEffect(()=>{
        get_nav_post();
    },[counterNavPosts]);
   
    const openLightBox = (url) =>{
        setUrlLightBox(url);
        setShowLightBox(true);
        document.body.style.overflow = 'hidden';
    }
    const prepareLightBoxesImages = () =>{
        var items_img = document.querySelectorAll(".dst_blog_post img");
        var src_slides = [];
        for(let i=0;i<items_img.length;i++){
            src_slides.push(items_img[i].src);
            items_img[i].addEventListener("click",function(){
                openLightBox(this.src);
                document.querySelector(".dst_lightbox i").addEventListener("click",function(){
                    setShowLightBox(false);
                    document.body.style.overflow = 'unset';
                })
            })
        }
        setSlideGallery(src_slides);
    }
    return (
            (!isFetching) 
                        ? 
                        ((post.length!==0) 
                            ?(  
                                <GridContainer.Row>
                                    {
                                    (post[0].featured_media!==0)&&
                                        (
                                            <GridContainer.Col size={12}>
                                                    <div className="dst_img_section_article" style={{backgroundImage: `url(${post[0].images.large})`}}>
                                                        <div className="dst_info_section_article">    
                                                            <h1>{utilObj.stripHtml(post[0].title.rendered)}</h1> 
                                                            <span>{utilObj.formatDate(post[0].date, data.lang)}</span>
                                                            <SocialShare title={utilObj.stripHtml(post[0].title.rendered)} link={post[0].link} />
                                                            <p>Scroll</p>
                                                            <i className="fa fa-3x fa-angle-double-down" onClick={scrollDown}></i>
                                                        </div>   
                                                    </div>
                                                    <div className="shinobi_divider_splash"></div> 
                                            </GridContainer.Col>   
                                        )
                                    }
                                    <GridContainer.Container>
                                        <ProgressBar/>
                                        <GridContainer.Row>
                                            <GridContainer.Col size={8}>
                                                <div className="dst_blog_post" id="dst_blog_post" onLoad={prepareLightBoxesImages}>
                                                    { Parser(post[0].content.rendered) }
                                                </div>
                                                <Carousel data={data} posts={postsCarousel} setTitle={true}/>
                                                <div className="dst_nav_post_gallery">
                                                    {(showPrevNavPost)&&(<button className="dst_nav_post_prev" onClick={()=>{setCounterNavPosts(counterNavPosts - 1)}}><i className="fa fa-arrow-left"></i>{" "}{data.post[0].nav_btn_prev}</button>)}
                                                    {(showNextNavPost)&&(<button className="dst_nav_post_next" onClick={()=>{setCounterNavPosts(counterNavPosts + 1)}}>{data.post[0].nav_btn_next}{" "}<i className="fa fa-arrow-right"></i></button>)}
                                                </div>
                                            </GridContainer.Col>
                                            <GridContainer.Col size={4}>
                                                <Widget data={data} lastPosts={lastPosts}/>
                                            </GridContainer.Col>
                                        </GridContainer.Row>
                                    </GridContainer.Container>
                                    {(showLightBox)&&(<LightBox url={urlLightBox} slideGallery={slideGallery}/>)}
                                </GridContainer.Row>
                            )
                            :(<Redirect to="/"/>)
            ):(<Spinner/>)
    )
}
