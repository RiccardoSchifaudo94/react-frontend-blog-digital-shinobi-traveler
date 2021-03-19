import React,{useState,useEffect} from 'react';
import { Header,NotFound, Footer, Page, Post , PostGallery, Pagination, Search, Sidebar } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import UtilityObj from './utils/UtilityObj';

import data_it from './data_mocks/localizations/it-mock.json';
import data_en from './data_mocks/localizations/en-mock.json';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [spinner,setSpinner] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage]  = useState(10);
  const [totalPosts,setTotalPosts] = useState(1);
  const [statusSearchBar] = useState(true);
  const [statusSidebar] = useState(false);
  
 
  
  const utilityOBJ = new UtilityObj();

  const localize_site = () =>{
    
    let data_temp;
    
    if(localStorage.getItem('lang')===null){
      (utilityOBJ.detectLang()==='it-IT') ? data_temp = data_it : data_temp = data_en;
    }else{
      (localStorage.getItem('lang')==='it') ? data_temp = data_it : data_temp = data_en;
    }
      return data_temp;
  }

  let [data,setData] = useState(localize_site()); 

  const selectLang = (selected_lang = 'it') =>{
    (selected_lang === 'it') ? data = data_it : data = data_en;
    setData(data);
    setSpinner(true);
    get_posts(1);
    localStorage.setItem('lang',selected_lang);
  }

  const get_posts = async(id)=>{
    
    let lang;
    (data.lang==='it') ? lang = 'it' : lang = 'en';

    let url_localized = process.env.REACT_APP_API_URL+`posts?_embed&lang=${lang}&per_page=${postsPerPage}&page=${id}`;

    const res = await fetch(url_localized);
    let totals = Number(res.headers.get('X-WP-Total'));
    
    setTotalPosts(totals);

    await res.json().then((data)=>{
      setPosts(data);
    });
    
    setSpinner(false); 
  }
  
 
  
  
  
  //localize_site()
  
  const paginate = (pageNumber) => {
    setSpinner(true);
    setCurrentPage(pageNumber);
    get_posts(pageNumber);
  }

  useEffect(() => {
    get_posts(1);
  }, []);
  
  return (
    <Router>
      <Header data={data} selectLang={selectLang} isMobile={statusSidebar}/>
        <Switch>
          <Route exact path="/">
            <PostGallery posts={posts} spinner={spinner}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} spinner={spinner}/>
          </Route>
          <Route path="/page/:slug">
            <Page data={data}/>
          </Route>
          <Route path="/post/:slug">
            <Post data={data}/>
          </Route>
          <Route path='/search'>
            <Search statusSearchBar={statusSearchBar} data={data}/>
          </Route>
          <Route path='*'>
            <NotFound data={data}/>
          </Route>
        </Switch>  
     <Footer data={data}/>
    </Router>
  );

}

export default App;
