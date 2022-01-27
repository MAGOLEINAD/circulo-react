import React from 'react';

const Footer = () => {
  return <div>
      <footer className='container flex text-zinc-500 justify-around mt-16'>
        <div>
          <img src="../images/logofooter.png" className='mt-2' alt="logo" />
        </div>
        <div>
        <h4>Escuela de Magia</h4>
        <p className='my-2'>Clases Presenciales</p>
        <p>Clases Online</p>
        </div>
        <div>
        <h4>Tienda de Magia</h4>
        <p className='my-2'>Productos</p>
        <p>Curso en Videos</p>
        </div>
        <div>
        <h4>Contactate</h4>
        <p className='my-2'>Whats App</p>
        <p>E-Mail</p>
        </div>
        <div>
        <h4>Redes Sociales</h4>
        <i className="fab fa-facebook mx-1 my-3 text-white text-lg"></i>
        <i class="fab fa-instagram mx-1 text-white text-lg"></i>
        <i class="fab fa-youtube mx-1 text-white text-lg "></i>
        <i class="fab fa-twitter mx-1 text-white text-lg"></i>
        <i class="fab fa-tiktok mx-1 text-white text-lg"></i>
       
        </div>
    
      </footer>

      
      {/* <div className='container mt-10 flex justify-end items-center'>
        
      <i class="fab fa-expeditedssl mr-3 text-gray-500"></i>
      <p className='text-sm text-gray-500'>Asegurada con SSL - Todos los Derechos Reservados 2022</p>
      <br /> <br />
    
      </div> */}
       <br /> <br />

  </div>;
};

export default Footer;
