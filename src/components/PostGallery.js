import React from 'react';

import UtilityObj from './../utils/UtilityObj';

export default function PostGallery({posts,...restProps}) {
    const utilObj = new UtilityObj();
    return (
        <div className="dst_post container" {...restProps}>
            {posts.map((post)=>(
                <article key={post.id}>
                    <a href={post.link} target='_blank'>
                        <h1>{post.title.rendered}</h1>
                        <img src={post._embedded['wp:featuredmedia']['0'].source_url}/>
                        <div>{utilObj.stripHtml(post.excerpt.rendered)}</div>
                        <button>Read More</button>
                    </a>
                </article>
            ))}
        </div>
    )
}

