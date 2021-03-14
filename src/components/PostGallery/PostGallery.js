import React from 'react';
import './PostGallery.css';
import UtilityObj from '../../utils/UtilityObj';

export default function PostGallery({posts,...restProps}) {
    const utilObj = new UtilityObj();
    return (
        <div className="dst_post container" {...restProps}>
            {posts.map((post)=>(
                <article key={post.id}>
                    <a href={post.link} target='_blank' rel="noreferrer">
                        <h1>{utilObj.stripHtml(post.title.rendered)}</h1>
                        <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="shinobi-post"/>
                        <div>{utilObj.stripHtml(post.excerpt.rendered)}</div>
                        <button>Read More</button>
                    </a>
                </article>
            ))}
        </div>
    )
}

