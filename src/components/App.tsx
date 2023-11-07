import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Prices from './Prices';
import Contact from './Contact';


const App = () => {
  return (
    <Container>
        <Header />
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/prices' element={<Prices />} /> 
              <Route path='/contact' element={<Contact />} /> 
           </Routes>
    </Container>
  );
}

export default App;
