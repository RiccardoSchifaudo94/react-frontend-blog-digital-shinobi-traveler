import logo from './digital-shinobi-traveler.png';
import React,{useState} from 'react';
import { Header, Footer, Spinner, PostGallery } from "./components";

import './App.css';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [spinner,setSpinner] = useState(true);
 
 

  const get_posts = async()=>{
    const res = await fetch(window.env.API_URL);
    await res.json().then((data)=>{
      setPosts(data);
      setSpinner(false);
    });
  }

  get_posts();
 

  return (
   <>
    <Header logo={logo}/>
    {(spinner) ? ( <Spinner/>) : (<PostGallery posts={posts}/>)}
    <Footer/>
   </>
  );

}

export default App;
