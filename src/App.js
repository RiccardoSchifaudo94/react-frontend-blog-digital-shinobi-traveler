import React,{useState,useEffect} from 'react';
import { Header,NotFound, Footer, Page, Post , PostGallery, Pagination, Search, Intro } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import UtilityObj from './utils/UtilityObj';

import data_it from './data_mocks/localizations/it-mock.json';
import data_en from './data_mocks/localizations/en-mock.json';

import posts_carousel_it from './data_mocks/carousel_mock/it-mock.json';
import posts_carousel_en from './data_mocks/carousel_mock/en-mock.json';

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

  const localize_carousel_intro = () =>{
    
    let carousel_temp;
    
    if(localStorage.getItem('lang')===null){
      (utilityOBJ.detectLang()==='it-IT') ? carousel_temp = posts_carousel_it : carousel_temp = posts_carousel_en;
    }else{
      (localStorage.getItem('lang')==='it') ? carousel_temp = posts_carousel_it : carousel_temp = posts_carousel_en;
    }
      return carousel_temp;
  }

  let [data,setData] = useState(localize_site()); 
  let [postsCarousel, setPostsCarousel] = useState(localize_carousel_intro());
  
  const selectLang = (selected_lang = 'it') =>{
    (selected_lang === 'it') ? data = data_it : data = data_en;
    (selected_lang === 'it') ? setPostsCarousel(posts_carousel_it) : setPostsCarousel(posts_carousel_en);
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
  });
  
  return (
    <Router>
      <Header data={data} selectLang={selectLang} isMobile={statusSidebar}/>
        <Switch>
          <Route exact path="/">
            <Intro data={data} postsCarousel={postsCarousel}/>
          </Route>
          <Route path="/blog">
            <PostGallery data={data} posts={posts} spinner={spinner}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage} spinner={spinner}/>
          </Route>
          <Route path="/page/:slug">
            <Page data={data}/>
          </Route>
          <Route path="/post/:slug">
            <Post data={data} totalPosts={totalPosts}/>
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
