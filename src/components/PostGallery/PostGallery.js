import React from 'react';
import './PostGallery.css';
import UtilityObj from '../../utils/UtilityObj';
import {Spinner} from '../../components';
import { Link } from "react-router-dom";

export default function PostGallery({data,posts,spinner}) {
    const utilObj = new UtilityObj();
    return (
        <div className="dst_post">
            <div className="container">
                { (spinner) 
                    ? (<Spinner/>)
                    :(
                        posts.map(
                            (post)=>(
                                        <article key={post.id}>
                                            <Link to={`/post/${post.slug}`}>
                                                <h1>{utilObj.stripHtml(post.title.rendered)}</h1>
                                                <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="shinobi-post"/>
                                                <div>{utilObj.trimString(utilObj.stripHtml(post.excerpt.rendered),250)}{"..."}</div>
                                                <button>{data.postgallery[0].label_btn_read}</button>
                                            </Link>
                                        </article>
                                    )
                        )
                    )
                }
            </div>
        </div>
    )
}

