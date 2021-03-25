import React, { useState } from 'react';
import './LightBox.css';

export default function LightBox({url, slideGallery }) {
    
    const [urlSlide,setUrlSlide] = useState(url);
    const findInitialIndex = slideGallery.findIndex((x)=>x===url);

    let [counter,setCounter] = useState(findInitialIndex);

    const shiftSlideRight = () =>{
        (counter<slideGallery.length-1) ? setCounter(counter+1) : setCounter(0);
        setUrlSlide(slideGallery[counter]);
    }

    const shiftSlideLeft = () =>{
        (counter>0) ? setCounter(counter-1) : setCounter(slideGallery.length-1);
        setUrlSlide(slideGallery[counter]);
    }

    return (
            <div className="dst_lightbox">
                <a><i className="fa fa-times fa-2x"></i></a>
                <img src={urlSlide}></img>
                <div className="dst_lightbox_nav">
                    <button className="dst_lightbox_nav_prev" onClick={shiftSlideLeft}><i className="fa fa-angle-left fa-2x"></i></button>
                    <button className="dst_lightbox_nav_next"onClick={shiftSlideRight}><i className="fa fa-angle-right fa-2x"></i></button>
                </div> 
            </div>
    )
}
