import React,{useState,useEffect} from 'react';
import {PostGallery,Spinner} from './../../components'

import './Search.css';

export default function Search({statusSearchBar, data}) {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedPosts, setSearchedPosts] = useState([]);
    const [enableSearch, setEnabledSearch] = useState(false);
    const [searchSpinner, setSearchSpinner] = useState(false);

    useEffect(()=>{
        setSearchQuery('');
        setEnabledSearch(false);
        setSearchedPosts([]);
    },[statusSearchBar]);
    
    const search_posts = async() => {
        let lang;
        
        (data.lang==='it') ? lang = 'it' : lang = 'en';

        const url_localized = process.env.REACT_APP_API_URL+`posts?search=${searchQuery}&_embed&lang=${lang}&per_page=25`;

        const result = await fetch(url_localized);
        
        await result.json().then((data)=>{
            setSearchedPosts(data);
            setEnabledSearch(true);
            setSearchSpinner(false);
        }).catch((err)=>console.error(err));
    }

    const search = () =>{
        
        if(searchQuery.length>0){
            setSearchSpinner(true);
            search_posts();
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
                    ?((enableSearch)&&(<div className="dst_strip_results"><h1 className="dst_strip_result_header"><strong>Not results found!</strong></h1></div>))
                    :(
                        <div className="dst_strip_results">
                            { 
                                (enableSearch)&& 
                                (<h1 className="dst_strip_result_header"><strong>{searchedPosts.length} Risultati per parola :</strong>{" "}{searchQuery}</h1>)
                            }
                            <PostGallery posts={searchedPosts}/>
                        </div>
                    )
                )
            }
            </div>
        </div>)      
    )
}
