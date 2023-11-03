import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/home.css';


const Home = () => {
  return (
    <Carousel data-bs-theme="dark" className='carousel'>
       <Carousel.Item>
         <img className='d-block w-100 picture-slide' src='/imgs/img1.jpg' alt='first model' />
          <Carousel.Caption>
             <h5 className='text-slide mt-4'> <span className='span-slide me-2'> Florentina </span> <span className='span2-slide'> Petrea Nails </span>  </h5>
             {/* <p className='paragraph-slide'> Unghii, unghiute sau modele, cu drag eu ma ocup de ele! </p> * */}
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
          <img className='d-block w-100 picture-slide' src='/imgs/img2.jpg' alt='second model'/> 
          <Carousel.Caption>
             <h5 className='text-slide'> <span className='span-slide me-2'> Florentina </span> <span className='span2-slide'> Petrea Nails </span>  </h5>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
          <img className='d-block w-100 picture-slide' src='/imgs/img3.jpg' alt='third model' />
          <Carousel.Caption>
          <h5 className='text-slide'> <span className='span-slide me-2'> Florentina </span> <span className='span2-slide'> Petrea Nails </span>  </h5>
          </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item>
         <img className='d-block w-100 picture-slide' src='/imgs/img4.jpg' alt='fourth model'/> 
         <Carousel.Caption>
         <h5 className='text-slide'> <span className='span-slide me-2'> Florentina </span> <span className='span2-slide'> Petrea Nails </span>  </h5>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className='d-block w-100 picture-slide' src='/imgs/img5.jpg' alt='fifth model'/> 
         <Carousel.Caption>
         <h5 className='text-slide'> <span className='span-slide me-2'> Florentina </span> <span className='span2-slide'> Petrea Nails </span>  </h5>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img className='d-block w-100 picture-slide' src='/imgs/img6.jpg' alt='sixth model'/> 
         <Carousel.Caption>
         <h5 className='text-slide'> <span className='span-slide me-2'> Florentina </span> <span className='span2-slide'> Petrea Nails </span>  </h5>
         </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;