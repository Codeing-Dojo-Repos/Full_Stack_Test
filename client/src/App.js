import React, {useEffect} from 'react'
import axios from 'axios'
import './App.css';
import AllMovies from './components/AllMovies';
import NewMovie from './components/NewMovie';
import OneMovie from './components/OneMovie';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  useEffect( ()=> {
    axios.get("http://localhost:8000/api/movies")
      .then( (res) => {
        console.log(res)
        console.log(res.data)
      })
  }, [])



  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<AllMovies/>}/>
          <Route path='/new' element={<NewMovie/>}/>
          <Route path='/movie/:id' element={<OneMovie/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>

  // <div className="App">
  //   <AllMovies/>
  //   <NewMovie/>
  //   <OneMovie/>
  // </div>
  );
}

export default App;
