import React,{useState} from 'react';
import { Header, Footer, Spinner, PostGallery } from "./components";

import './App.css';

import UtilityObj from './utils/UtilityObj';

import data_it from './data_mocks/localizations/it-mock.json';
import data_en from './data_mocks/localizations/en-mock.json';


function App() {
  
  const [posts, setPosts] = useState([]);
  const [spinner,setSpinner] = useState(true);

  let data; 
  const utilityOBJ = new UtilityObj();
  
  const localize_site = () =>{
    let find_lang = utilityOBJ.detectLang();
    (find_lang==='it-IT') ? data = data_it : data = data_en;
    console.log(data);
  }
  
  localize_site();

  const get_posts = async()=>{
    const res = await fetch(window.env.API_URL);
    await res.json().then((data)=>{
      setPosts(data);
      setSpinner(false);
      
    });
  }
  
  if(spinner===true){ get_posts();}
  

  return (
   <>
    <Header data={data}/>
    {(spinner) ? ( <Spinner/>) : (<PostGallery posts={posts}/>)}
    <Footer data={data}/>
   </>
  );

}

export default App;
