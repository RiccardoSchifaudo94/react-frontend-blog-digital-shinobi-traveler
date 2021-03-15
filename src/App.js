import React,{useState,useEffect} from 'react';
import { Header, Footer, PostGallery, Pagination } from "./components";

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

  let data; 
  const utilityOBJ = new UtilityObj();

  const get_posts = async(id)=>{
  
    const res = await fetch(window.env.API_URL+"&per_page="+postsPerPage+"&page="+id);
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
   <>
    <Header data={data}/>
      <PostGallery posts={posts} spinner={spinner}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage}/>
      <Footer data={data}/>
   </>
  );

}

export default App;
