import React,{useEffect, useState} from 'react';
import { Spinner } from '..';
import UtilityObj from '../../utils/UtilityObj'
import './Slider.css';

export default function Slider({slides,data, spinner}) {

    const utilObj = new UtilityObj();

    const [items] = useState(slides.length);

    const detectWidth = () =>{
        let get_width = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;
        return get_width;
    }

    const [shift] = useState(detectWidth());
    
    function resizeSlider(){
        /*future implementation
        
            let new_width = detectWidth();
            setShift(new_width);
            initSlider(new_width);
        */    
        let slider = document.querySelector(".dst_slider_container");     
        console.log("you are in resize slider = ");
        console.log(slider);

        (shift===detectWidth()) 
        ? slider.style.display = 'block' 
        : slider.style.display = 'none';
        
    }
   
    function initSlider(shift){
        let slider = document.querySelector(".dst_slider_container");
        let i = 0;
        setInterval(function(){
            if(i<items){
                slider.style.left = -(i*shift)+"px";
                i++;
            }else{
                i=0;
            } 
        },2000);
    }

    useEffect(()=>{
        window.addEventListener("resize",detectWidth);
        window.addEventListener("load",initSlider(detectWidth()));
        window.addEventListener("resize",resizeSlider);
    },[]);
    
    return (
        (spinner)
        ?(<Spinner/>)
        :(
            (slides.length>0)
                &&(
                    <div className="dst_slider" style={{maxWidth:`${detectWidth()}px`}}>
                        <ul className="dst_slider_container" style={{width:`${detectWidth()}px`}}>
                            {
                                slides.map((slide,key)=>(
                                        
                                                <li className="dst_slider_item" key={key} style={{width:`${detectWidth()}px`,backgroundImage:`url(${slide.images.large})`}}>
                                                    <div className="dst_slider_item_info_box">
                                                        <h1>{utilObj.stripHtml(slide.title.rendered)}</h1>
                                                        <span>{utilObj.formatDate(slide.date, data.lang)}</span>
                                                        <a href={`/post/${slide.slug}`}><button>Read More</button></a>
                                                    </div>
                                                </li>
                                            
                                            )
                                )
                            }
                        </ul>
                    </div>
                )
        )
    )
}
