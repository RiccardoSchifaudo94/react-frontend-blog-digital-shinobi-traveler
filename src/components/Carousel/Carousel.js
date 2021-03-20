import React,{useEffect,useState} from 'react';
import './Carousel.css';
import UtilityObj from './../../utils/UtilityObj';

export default function Carousel({data,posts, autoplay = false, showNav=true}) {
    

    var shift = 0;
    const items = posts.length;
    let totalLength = (items-2)*300;
    let i = 0;
    
 



    const utilObj = new UtilityObj();
   
    const shiftLeftCarousel = () =>{
        if(i>0){
            shift += 300;
            i--;
            console.log(shift)
        }else{
            shift = -totalLength;
            i = (items-2);
        }
        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    const shiftRightCarousel = () =>{
        
        if(i<=(items-2)){
            shift -= 300; 
            console.log(shift)
            i++
        }
        else{
            i=0; 
            shift=0;
            console.log(shift)
        }

        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    const autoplayCarousel = () =>{
                  
        if(i<=(items-2)){
            shift -= 300; 
            console.log(shift)
            i++
        }
        else{
            i=0; 
            shift=0;
            console.log(shift)
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
                                <h3>{utilObj.stripHtml(post.title.rendered)}</h3>
                                <button>{data.postgallery[0].label_btn_read}</button>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            {(showNav)&&(
            <div className="dst_carousel_nav">
                <a className="dst_carousel_nav_prev" onClick={shiftLeftCarousel}><i className="fa fa-angle-left"></i></a>
                <a className="dst_carousel_nav_next" onClick={shiftRightCarousel}><i className="fa fa-angle-right"></i></a>
            </div>)}
        </div>
    )
}
