import React,{useEffect} from 'react';
import Parser from 'html-react-parser';

import { GridContainer } from '../../containers';

import './Widget.css';

export default function Widget({data,lastPosts = []}) {
    
    let html = ``;

    const initFbSDK = (lang) =>{
        
        document.querySelectorAll(".fb_script").forEach(el => el.remove());
        
        const script = document.createElement('script');
        (lang == 'it')
        ? script.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v10.0"
        : script.src = "https://connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v10.0";
        
        script.async = true;
        script.defer = true;
        script.once = "nonce";
        script.crossOrigin = "anonymous";
        script.classList.add("fb_script");
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    }

    useEffect(()=>{
        initFbSDK(data.lang)
    },[]);

    return (
        <div className="dst_widget">
          <h2>{data.widget[0].shinobi_widget_label_1_title}</h2>
          <img src="/images/ricky-interrail.jpg" alt="Ricky Interrail"/>
          <h2>{data.widget[0].shinobi_widget_label_2_title}</h2>
          <p>{data.widget[0].shinobi_widget_label_2_text_1}</p>
          <p>{data.widget[0].shinobi_widget_label_2_text_2}</p>
          <p>{data.widget[0].shinobi_widget_label_2_text_3}</p>
          <div className="dst_widget_icon_socials">
                <a href={`${data.footer[0].social_urls[0].linkedin}`} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href={`${data.footer[0].social_urls[0].facebook}`} target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                <a href={`${data.footer[0].social_urls[0].instagram}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href={`${data.footer[0].social_urls[0].twitter}`} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
          <h2>{data.widget[0].shinobi_widget_label_3_title}</h2>
          <div className="fb-page" 
               data-href="https://www.facebook.com/DigitalShinobiTraveler/" 
               data-tabs="timeline" 
               data-width="" 
               data-height="" 
               data-small-header="false" 
               data-adapt-container-width="true" 
               data-hide-cover="false" 
               data-show-facepile="true">
                   <blockquote cite="https://www.facebook.com/DigitalShinobiTraveler/" 
                               className="fb-xfbml-parse-ignore">
                                    <a href="https://www.facebook.com/DigitalShinobiTraveler/">
                                        Digital Shinobi Traveler
                                    </a>
                   </blockquote>
           </div>
    
          {
            (lastPosts.length>0)
            &&(
                    <GridContainer.Container type="fullwidth">
                        <h2>{data.widget[0].shinobi_widget_label_4_title}</h2>
                        <ul>
                            {
                                lastPosts.map((post,key)=>(
                                                        <li key={key}>
                                                            <a href={`/post/${post.slug}`}>{post.title.rendered}</a>
                                                        </li>
                                                    )
                            )}
                        </ul>
                    </GridContainer.Container>
                )
            }
        </div>
    )
}
