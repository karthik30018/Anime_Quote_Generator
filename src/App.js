
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import AnimeRandom from './Component/AnimeRandom';
// import NavBar from './Component/NavBar';
import Home from './Component/Home';
import AnimeTitle from './Component/AnimeTitle';

function App() {
  return (
    <div className='bg-no-repeat bg-cover bg-violet-300' style={{ width:"100%",height:"927px",
     
     
    }}> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AnimeRandom" element={<AnimeRandom/>}/>
      <Route path="/AnimeTitle" element={<AnimeTitle/>}/>
    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
