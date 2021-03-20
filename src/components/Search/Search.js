import React,{useState,useEffect} from 'react';
import {Pagination,PostGallery,Spinner} from './../../components'

import './Search.css';

export default function Search({statusSearchBar, data}) {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [enableSearch, setEnabledSearch] = useState(false);
    const [searchSpinner, setSearchSpinner] = useState(false);
    const [postsPerPage,setPostsPerPage] = useState(10);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPosts,setTotalPosts] = useState(100);

   

    const searchPaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSearchSpinner(true);
        search_posts(pageNumber);
    }

    useEffect(()=>{
        setSearchQuery('');
        setEnabledSearch(false);
        setSearchedPosts([]);
    },[statusSearchBar]);
    
    const search_posts = async(id) => {
        let lang;
        
        (data.lang==='it') ? lang = 'it' : lang = 'en';

        const url_localized = process.env.REACT_APP_API_URL+`posts?search=${searchQuery}&_embed&lang=${lang}&per_page=${postsPerPage}&page=${id}`;
       
        const result = await fetch(url_localized);
        let totals = Number(result.headers.get('X-WP-Total'));
        setTotalPosts(totals);

        await result.json().then((data)=>{
            setSearchedPosts(data);
            setEnabledSearch(true);
            setSearchSpinner(false);
        }).catch((err)=>console.error(err));
    }

    const search = () =>{
        
        if(searchQuery.length>0){
            setSearchSpinner(true);
            setCurrentPage(1);
            search_posts(1);
        }    
        else
            alert("Fill the search input");
    }
    
    const disableSearch = () => setEnabledSearch(false);

    return (
        (statusSearchBar)&&(
        <div className="dst_search_bar">
            <div className="container">
                <h1>{data.searchbar[0].title}</h1>
                <input type="text" 
                       value={searchQuery} 
                       onChange={
                                    (e) =>  
                                            {
                                                setSearchQuery(e.target.value); 
                                                disableSearch(); 
                                            }
                                } 
                        onKeyPress={
                                    
                                    (e) =>  { 
                                                if(e.key==='Enter') 
                                                    search(); 
                                            }
                                    } 
                        placeholder={
                                        data.searchbar[0].placeholder
                                    }
                />
                <button style={{width:'90px'}} 
                        onClick={search}>
                    {data.searchbar[0].label_btn}
                </button>
            </div>
            <div className="container">
            {
               (searchSpinner) 
               ? (<Spinner/>)
               :( 
                    (searchedPosts.length===0) 
                    ?((enableSearch)&&(<div className="dst_strip_results"><h1 className="dst_strip_result_header"><strong>{data.searchbar[0].not_found}</strong></h1></div>))
                    :(
                        <div className="dst_strip_results">
                            { 
                                (enableSearch)&& 
                                (<h1 className="dst_strip_result_header"><strong>{totalPosts} {data.searchbar[0].alert_results} :</strong>{" "}{searchQuery}</h1>)
                            }
                            <PostGallery posts={searchedPosts} data={data}/>
                            <Pagination postsPerPage={10} totalPosts={totalPosts} paginate={searchPaginate} currentPage={currentPage}/>
                        </div>
                    )
                )
            }
            </div>
        </div>)      
    )
}
