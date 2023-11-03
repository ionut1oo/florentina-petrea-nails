import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/prices.css';

const Prices = () => {
    return (
        <Container>
           <h3 className='text-center mb-5 mt-4 prices-text'> Manichiura </h3>
           <h4 className='mb-3 semipermanenta'> Manichiura semipermanenta </h4> 
           <div className='intretinere'>
            <h4 className='ms-5 prices-text'> Intretinere </h4>
            <h4> Marimi mai mici de 3 </h4> 
            <h4> Marimi mai mici de 3 </h4>  
            <h4 className='ms-5'> Slim </h4>
           </div>
           <div className='constructie'>
             <h4 className='prices-text'> Constructie </h4>
             <h4> Marimi mai mici de 3  </h4>
             <h4> Marimi mai mici de 3 </h4>
             <h4> Slim </h4>
           </div>
           <div className='prices-intretinere'> 
             <h4 className='prices-text mb-5'> 100 Ron</h4> 
             <h4 className='prices-text'> 120 Ron</h4> 
             <h4 className='prices-text'> 140 Ron</h4>
             <h4 className='prices-text'> 150 Ron</h4>  
           </div>
           <div className='prices-constructie'>
             <h4 className='prices-text'> 150 Ron</h4> 
             <h4 className='prices-text'> 170 Ron</h4> 
             <h4 className='prices-text'> 200 Ron</h4> 
           </div>
                <h4 className='prices-text advertisement'> Orice model este inclus in pret</h4>
        </Container>
    )
}

export default Prices;