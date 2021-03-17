import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound({data}) {
    return (
        <div className="container">
            <div className="dst_not_found">
                <h1>{data.not_found[0].title}</h1>
                <p>{data.not_found[0].description}</p>
                <button><Link to="/"><i className="fa fa-arrow-left"></i>{" "+data.not_found[0].label_url}</Link></button>
            </div>            
        </div>
    )
}
