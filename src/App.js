
import './App.css';
import NavBar from './components/NavBar';
import Productslist from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Success from './components/Success';
import Cancel from './components/Cancel';
import CartProvider from './CartContext'
import { useState } from 'react';
import Homepage from './components/Hompage';
import About from './components/About';
import Footer from './components/Footer';
import Admin from './components/Admin';


function App() {

  

  return (
   
      <CartProvider   > 
      <Container>
  <NavBar    />

       <Routes>
       
        <Route path ='/' element = {<Homepage/>}  />
        <Route path ='/about' element = {<About/>}  />
        <Route path ='/store'element = {<Productslist/>} />
        <Route path="success" element = {<Success/>}/>
        <Route path="cancel" element = {<Cancel/>}/>
        <Route path = "/admin" element ={<Admin/>}/>
      </Routes>
      <Footer />
      </Container>
      </CartProvider>

  );
}

export default App;
