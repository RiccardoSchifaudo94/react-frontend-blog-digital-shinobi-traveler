import React from 'react';
import './Pagination.css';

export default function Pagination({postsPerPage,totalPosts, paginate, currentPage}) {
    const pageNumbers =  [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ){
        pageNumbers.push(i);
    }
    return (
        <div className="container">
            <nav>
                <ul className="dst_pagination">
                    {pageNumbers.map((number)=>(
                        <li key={number} className={`dst_page_item ${currentPage===number ? "dst_page_active":""}`}>
                            <a  className="dst_page_link" 
                                href="!#"
                                onClick={()=>paginate(number)}
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
