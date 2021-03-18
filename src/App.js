import React,{useState,useEffect} from 'react';
import { Header,NotFound, Footer, Page, Post , PostGallery, Pagination, Search } from "./components";
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
  const [statusSearchBar,setStatusSearchBar] = useState(true);
  let data; 
  const utilityOBJ = new UtilityObj();

  const get_posts = async(id)=>{

    const res = await fetch(process.env.REACT_APP_API_URL+"posts?_embed&lang=it&per_page="+postsPerPage+"&page="+id);
    let totals = Number(res.headers.get('X-WP-Total'));
    
    setTotalPosts(totals);
    
    await res.json().then((data)=>{
      setPosts(data);
    });
    
    setSpinner(false); 
  }
  
  useEffect(() => {
    get_posts(1);
  }, []);
  
  const localize_site = () =>{
    (utilityOBJ.detectLang()==='it-IT') ? data = data_it : data = data_en;
  }
  
  localize_site();
  
  const paginate = (pageNumber) => {
    setSpinner(true);
    setCurrentPage(pageNumber);
    get_posts(pageNumber);
  }

  return (
    <Router>
      <Header data={data}/>
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
          <Route path='/page/*'>
            <NotFound data={data}/>
          </Route>
        </Switch>  
     <Footer data={data}/>
    </Router>
  );

}

export default App;
