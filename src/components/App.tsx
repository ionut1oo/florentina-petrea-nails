import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Prices from './Prices';


function App() {
  return (
    <Container>
        <Header />
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/prices' element={<Prices />} />
           </Routes>
    </Container>
  );
}

export default App;
