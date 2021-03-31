import React, { useState } from 'react';
import { Link } from "react-router-dom";

import UtilityObj from '../../utils/UtilityObj';
import { Spinner } from '../../components';
import './PostGallery.css';

export default function PostGallery({data,posts,spinner}) {

    const utilObj = new UtilityObj();

    useState(()=>{
        utilObj.scrollToTop();
    },[]);
    
    return (
        <div className="dst_post">
                { (spinner) 
                    ?(<Spinner/>)
                    :( <div>
                        <div className="container">
                        {
                            posts.map(
                                (post)=>(
                                            <article key={post.id}>
                                                <Link to={`/post/${post.slug}`}>
                                                    <h1>{utilObj.stripHtml(post.title.rendered)}</h1>
                                                    <div className="dst_post_image_box" style={{backgroundImage:`url(${post._embedded['wp:featuredmedia']['0'].source_url})`}}></div>
                                                    <div className="dst_post_text">{utilObj.trimString(utilObj.stripHtml(post.excerpt.rendered),250)}{"..."}</div>
                                                    <button>{data.postgallery[0].label_btn_read}</button>
                                                </Link>
                                            </article>
                                        )
                            )
                        }
                        </div>   
                        </div>
                    )
                }
            </div>
    )
}

