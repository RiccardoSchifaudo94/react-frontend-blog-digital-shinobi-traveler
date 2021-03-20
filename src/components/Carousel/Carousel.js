import React,{useEffect,useState} from 'react';
import './Carousel.css';
import UtilityObj from './../../utils/UtilityObj';

export default function Carousel({data,posts, autoplay = false}) {
    

    var shift = 0;
    const items = posts.length;
    let totalLength = (items-3)*200;
    let i = 0;
    
 



    const utilObj = new UtilityObj();
   
    const shiftLeftCarousel = () =>{
        if(i>0){
            shift += 200;
            i--;
        }else{
            shift = -totalLength;
            i = (items-3);
        }
        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    const shiftRightCarousel = () =>{
        
        if(i<=(items-4)){
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
                  
        if(i<=(items-4)){
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
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <a href={post.slug}>
                            <div className="dst_carousel_item" style={{backgroundImage:`url(${post.images.medium})`}}>
                                <h3>{utilObj.trimString(utilObj.stripHtml(post.title.rendered),70)}</h3>
                                <button>{data.postgallery[0].label_btn_read}</button>
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
