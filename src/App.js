import logo from './logo.svg';
import './App.css';
import Productslist from './components/ProductsList';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path ='/' element = {<Productslist/>} />
      </Routes>
   
    </div>
  );
}

export default App;
