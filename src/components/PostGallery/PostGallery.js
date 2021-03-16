import React from 'react';
import './PostGallery.css';
import UtilityObj from '../../utils/UtilityObj';
import {Spinner} from '../../components';
import { Link } from "react-router-dom";

export default function PostGallery({posts,spinner,...restProps}) {
    const utilObj = new UtilityObj();
    return (
        <div className="dst_post container" {...restProps}>
            { (spinner) 
                ? (<Spinner/>)
                :(
                    posts.map(
                        (post)=>(
                                    <article key={post.id}>
                                        <Link to={`/post/${post.slug}`}>
                                            <h1>{utilObj.stripHtml(post.title.rendered)}</h1>
                                            <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="shinobi-post"/>
                                            <div>{utilObj.stripHtml(post.excerpt.rendered)}</div>
                                            <button>Read More</button>
                                        </Link>
                                    </article>
                                )
                    )
                )
            }
        </div>
    )
}

