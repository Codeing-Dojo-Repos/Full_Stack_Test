import React, {useEffect} from 'react'
import axios from 'axios'
import './App.css';
import AllMovies from './components/AllMovies';
import NewMovie from './components/NewMovie';
import OneMovie from './components/OneMovie';
import EditMovie from './components/EditMovie';
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
          <Route path='/movie/edit/:id' element={<EditMovie/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
