import React,{useState} from 'react';
import './Search.css';

export default function Search({statusSearchBar}) {


    const search = () =>{
        alert("run searching...");
    }
    return (
        (statusSearchBar)&&(
        <div className="dst_search_bar">
            <div className="container">
                <input type="text" placeholder="Cerca qui il post..."/>
                <button onClick={search}>Cerca</button>
            </div>
        </div>)      
    )
}
