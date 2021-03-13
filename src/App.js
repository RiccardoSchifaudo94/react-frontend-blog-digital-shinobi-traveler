import logo from './digital-shinobi-traveler.png';
import React,{useState} from 'react';
import Header from "./components/Header/Header";
import PostGallery from "./components/PostGallery";


import './App.css';

function App() {
  
  const [posts, setPosts] = useState([]);
 
 

  const get_posts = async()=>{
    const res = await fetch("https://www.the-shinobi-arts-of-eccentricity.com/blog/wp-json/wp/v2/posts?_embed&lang=it");
    const result = await res.json().then((data)=>{
      setPosts(data);
    });

  }

  get_posts();
 

  return (
   <>
    <Header logo={logo}>
    </Header>
    <PostGallery posts={posts}></PostGallery>
   </>
  );

}

export default App;
