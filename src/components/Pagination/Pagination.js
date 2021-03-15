import React from 'react';
import './Pagination.css';
import UtilityObj from './../../utils/UtilityObj';

export default function Pagination({postsPerPage,totalPosts, paginate, currentPage}) {
    
    
    
    const pageNumbers =  [];
    
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ){
        pageNumbers.push(i);
    }
    
    const utilObj = new UtilityObj();

    return (
        <div className="container">
            <nav>
                <ul className="dst_pagination">
                    {pageNumbers.map((number)=>(
                        <li key={number}  onClick={()=>{paginate(number); utilObj.scrollToTop();}} className={`dst_page_item ${currentPage===number ? "dst_page_active":""}`}>
                            <a  className="dst_page_link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
