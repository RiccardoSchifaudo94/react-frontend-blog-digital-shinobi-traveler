import React,{useEffect,useState} from 'react';
import './Carousel.css';
import UtilityObj from './../../utils/UtilityObj';

export default function Carousel({data,posts, autoplay = false}) {
    console.log(data);

    var shift = 0;
    const items = posts.length;
    let num_slides;

    const isMobile = () =>{
        if(window.screen.width<468)
            return true;
        return false;
    }

    let totalLength = (isMobile()) ? (items-1)*200 : (items-3)*200;
    let i = 0;

    const utilObj = new UtilityObj();
    
   

    const shiftLeftCarousel = () =>{
        
        if(i>0){
        
            shift += 200;
            i--;
        
        }else{ 
            
            (isMobile()) ? num_slides = items - 1 : num_slides = items - 4;
            
            shift = -totalLength;
            i = (num_slides);
        }
        
        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    
    const shiftRightCarousel = () =>{
        
        (isMobile()) ? num_slides = items - 2 : num_slides = items - 4;
        
        if(i<=(num_slides)){
            shift -= 200; 
            i++;
        }
        else{
            i=0; 
            shift=0;
        }

        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    
    const autoplayCarousel = () =>{
        
        (isMobile()) ? num_slides = items - 2 : num_slides = items - 4;        
        
        if(i<=(num_slides)){
            shift -= 200; 
            i++
        }
        else{
            i=0; 
            shift=0;
        }

        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    useEffect(()=>{
       
     if(autoplay)
        setInterval(autoplayCarousel,3000);
       
    },[shift]);

    return (
        <div className="dst_carousel">
            <h2>{data.carousel[0].title}</h2>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <a href={post.slug}>
                            <div className="dst_carousel_item" style={{backgroundImage:`url(${post.images.medium})`}}>
                                <h3>{utilObj.trimString(utilObj.stripHtml(post.title.rendered),70)}</h3>
                                <button>{data.carousel[0].label_btn_read}</button>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            {(!autoplay)&&(
            <div className="dst_carousel_nav">
                <a className="dst_carousel_nav_prev" onClick={shiftLeftCarousel}><i className="fa fa-angle-left"></i></a>
                <a className="dst_carousel_nav_next" onClick={shiftRightCarousel}><i className="fa fa-angle-right"></i></a>
            </div>)}
        </div>
    )
}
