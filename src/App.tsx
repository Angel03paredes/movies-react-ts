import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MoviePage from './pages/Movie/MoviePage';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen max-h-full w-screen ">
      <div className='flex justify-content-between items-center px-5 md:px-20' style={{height:"80px"}} >
        <Link to="/" className='text-gray-300' > Movies </Link>
      </div>
      
      <div className='px-5 md:px-20' >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
