import logo from './digital-shinobi-traveler.png';
import React,{useState} from 'react';
import { Header, Footer, Spinner, PostGallery } from "./components";
import data from './data_mocks/localizations/it-mock.json';

import './App.css';
import UtilityObj from './utils/UtilityObj';

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
  
  if(spinner) get_posts();
  

  return (
   <>
    <Header logo={logo}/>
    {(spinner) ? ( <Spinner/>) : (<PostGallery posts={posts}/>)}
    <Footer data={data}/>
   </>
  );

}

export default App;
