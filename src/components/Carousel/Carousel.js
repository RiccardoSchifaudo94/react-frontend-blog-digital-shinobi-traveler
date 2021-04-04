import React from 'react';
import './Carousel.css';
import UtilityObj from './../../utils/UtilityObj';

export default function Carousel({data,posts, autoplay = false, width=200, gutter=10, setTitle=false}) {

    const isMobile = () =>{
        if(window.screen.width<468)
            return true;
        return false;
    }

    var shift = 0;
    const items = posts.length;
    let totalLength = (isMobile()) ? (items -1)*300 : (items-3)*width;
    let length_shift = (isMobile()) ? 300 : width;
    let width_item = (isMobile()) ? 300 : width;
    let num_slides;
        num_slides = (isMobile()) ? num_slides = items - 1 : num_slides = items - 3;
    
    gutter = (isMobile()) ? gutter = 0 : gutter;
    
    let i = 0;

    const utilObj = new UtilityObj();
  
    const shiftLeftCarousel = () =>{
        
        if(i>0){
        
            shift += length_shift;
            i--;
        
        }else{ 
            
            shift = -(totalLength);
            i = (num_slides);
        }
        
        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    
    const shiftRightCarousel = () =>{
      
    
        if(i<(num_slides)){
            shift -= length_shift; 
            i++;
        }
        else{
            i=0; 
            shift=0;
        }

        document.querySelector(".dst_carousel ul").style.left = shift+"px";
    }
    

    return (<div>
            {  (posts.length!==0)&&(
                <div className="dst_carousel">
                    {(setTitle) && (<h2>{data.carousel[0].title}</h2>)}
                    <ul>
                        {posts.map((post)=>(
                            <li key={post.id}>
                                <a href={`/post/${post.slug}`}>
                                    <div className="dst_carousel_item" style={{backgroundImage:`url(${post.images.medium})`,width:`${(width_item - gutter) }px`,marginLeft:`${(gutter/2)}px`,marginRight:`${(gutter/2)}px`}}>
                                        <h3>{utilObj.trimString(utilObj.stripHtml(post.title.rendered),70)}</h3>
                                        <button>{data.carousel[0].label_btn_read}</button>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {
                        (isMobile()===false && posts.length<3)
                            ?(<div></div>)
                            :
                            (
                                <div className="dst_carousel_nav">
                                    <a className="dst_carousel_nav_prev" onClick={shiftLeftCarousel}><i className="fa fa-angle-left"></i></a>
                                    <a className="dst_carousel_nav_next" onClick={shiftRightCarousel}><i className="fa fa-angle-right"></i></a>
                                </div>
                            )
                    }
                </div>)
            }
        </div>
    )
}
