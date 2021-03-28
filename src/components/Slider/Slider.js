import React,{useEffect, useState} from 'react';
import UtilityObj from '../../utils/UtilityObj'
import './Slider.css';

export default function Slider({slides,data}) {
    
    const utilObj = new UtilityObj();

    const [items,setItems] = useState(slides.length);
    
    function slider_funct(slider,shift,i,items){
        setInterval(function(){
            if(i<items){
                slider.style.left = -(i*shift)+"px";
                i++;
            }else{
                i=0;
            } 
        },2000);
    }

    const detectWidth = () =>{
        let get_width = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;
        return get_width;
    }

    const [shift,setShift] = useState(detectWidth());
    
    function resizeSlider(){
        //futute implementation
        /*
            let new_width = detectWidth();
            setShift(new_width);
            initSlider(new_width);
        */    
            
       (shift===detectWidth()) 
        ? document.querySelector(".dst_slider").style.display = 'block' 
        : document.querySelector(".dst_slider").style.display = 'none';
        
    }
   
    function initSlider(shift){
        let slider = document.querySelector(".dst_slider_container");
        slider_funct(slider,shift,0,items);
    }

    useEffect(()=>{
        window.addEventListener("resize",detectWidth);
        window.addEventListener("load",initSlider(detectWidth()));
        window.addEventListener("resize",resizeSlider);
    },[]);
    
    return (
        (slides.length>0)
        &&(
            <div className="dst_slider" style={{maxWidth:`${detectWidth()}px`}}>
                <ul className="dst_slider_container" style={{width:`${detectWidth()}px`}}>
                    {
                        slides.map((slide)=>(
                                        <li className="dst_slider_item" style={{width:`${detectWidth()}px`,backgroundImage:`url(${slide.images.large})`}}>
                                            <div className="dst_slider_item_info_box">
                                                <h1>{utilObj.stripHtml(slide.title.rendered)}</h1>
                                                <span>{utilObj.formatDate(slide.date, data.lang)}</span>
                                                <button>Read More</button>
                                            </div>
                                        </li>
                                    )
                        )
                    }
                </ul>
            </div>
        )
    )
}
