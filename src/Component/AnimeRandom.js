import { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";



function AnimeRandom() {
  const [display,setDisplay] = useState('false');
  function handleApiCall(){
    axios.get("https://animechan.xyz/api/random").then
    ((data) =>{
      console.log(data)
      setAnimeName(data.data.anime)
      setQuote(data.data.quote)
      setCharacter(data.data.character)
      setDisplay("true")
    }
  
 
  )
  }
 
const [animeName,setAnimeName] = useState();
const [quote,setQuote] = useState();
const [character,setCharacter] = useState();

    

    
    

    return (
      <div>
           <NavBar/> 
         <div className="grid place-items-center " style={{width:"100%",height:"927px"}} >
         
      
         <div className="bg-violet-500 rounded-3xl text-white font-bold font-serif grid grid-cols-6 gap-4 text-center p-2 overflow-auto" style={{width:"800px",height:"400px"}}>
         
         <div className="text-2xl pt-6 col-start-2 col-span-4">{animeName}</div>
         <div className="text-3xl col-start-1 col-end-7">{quote}</div>
         <div className="text-2xl col-end-7 col-span-2" >{display==='true'?<span>-</span>:''} {character}</div>
         
         <button className="col-start-3 col-end-5 rounded-full bg-violet-300 text-violet-800" style={{height:"40px"}}  onClick={handleApiCall}>Generate</button> 
         </div>
         </div>
         
      </div> 
    );
  }
  
  export default AnimeRandom;

  