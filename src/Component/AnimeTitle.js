import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useState } from 'react';



function AnimeTitle() {
  const [animeName,setAnimeName] = useState();
const [quote,setQuote] = useState();
const [character,setCharacter] = useState();
const [display,setDisplay] = useState('false');
const [title,setTitle] = useState('naruto')


function handleSubmit(){
  axios.get(`https://animechan.xyz/api/random/anime?title=${title}`).then(data =>{
  console.log(data)
  setAnimeName(data.data.anime)
      setQuote(data.data.quote)
      setCharacter(data.data.character)
      setDisplay("true")
      

})
}
  return (
    <div>
       <NavBar/>
       <NavBar/> 
         <div className="grid place-items-center " style={{width:"100%",height:"927px"}} >
         
      
         <div className="bg-violet-500 rounded-3xl text-white font-bold font-serif grid grid-cols-6 gap-4 text-center p-2 " style={{width:"800px",height:"400px"}}>
         
         <div className="pt-6 text-2xl col-start-1 col-end-3">{animeName}</div>
         <div className="pt-6 text-1xl col-end-7 col-span-3 text-gray-500"><input className='rounded-lg border-transparent' placeholder='Naruto' name='name'  style={{width:"200px",height:""}} onChange={(e)=>{
          console.log(e.target.value)
          setTitle(e.target.value);
         }}></input></div>
         <div className="text-3xl col-start-1 col-end-7">{quote}</div>
         <div className="text-2xl col-end-7 col-span-2" >{display==='true'?<span>-</span>:''} {character}</div>
         
         <button className="col-start-3 col-end-5 rounded-full bg-violet-300 text-violet-800" onClick={handleSubmit} style={{height:"40px"}}>Generate</button> 
         </div>
         </div>
    </div>
  )
}

export default AnimeTitle
