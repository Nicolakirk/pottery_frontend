
import './App.css';
import NavBar from './components/NavBar';
import Productslist from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Success from './components/Success';
import Cancel from './components/Cancel';


function App() {
  return (
    <div className="App">
      <Container>
  <NavBar/>
       <Routes>
       
        <Route path ='/' element = {<Productslist/>} />
        <Route path="success" element = {<Success/>}/>
        <Route path="cancel" element = {<Cancel/>}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;
