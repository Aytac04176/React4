import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FavList from './pages/FavList/FavList';


import './reset.css';
import './main.css';

function App () {

    return (
      <div className="app">

       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/:id" element={<FavList />} />
      </Routes>
      </div>
    );
  
  }

export default App;
