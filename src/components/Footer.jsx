import React from 'react';

const Footer = () => {
  return <div>
      <footer className='container msm:grid msm:gap-4 justify-evenly flex text-zinc-500  mt-16'>
        <div>
          <img src="./src/img/logofooter.avif" className='msm:mx-auto  mt-2' alt="logo" />
        </div>
        <div className='sm:hidden text-center mx-6 text-zinc-400 '>
          <p>El Curso está orientado para iniciados y avanzados ya sea como hobby o de manera profesional. No se necesita ningún tipo de conocimiento previo.</p>
        </div>
      
        <div className='msm:hidden'>
        <h4>Escuela de Magia</h4>
        <p className='my-2'>Clases Presenciales</p>
        <p>Clases Online</p>
        </div>
        <div className='msm:hidden'>
        <h4>Tienda de Magia</h4>
        <p className='my-2'>Productos</p>
        <p>Curso en Videos</p>
        </div>
        <div className='msm:hidden'>
        <h4>Contactate</h4>
        <p className='my-2'>Whats App</p>
        <p>E-Mail</p>
        </div>
        <div className='msm:text-center'>
        <h4 className='msm:text-zinc-500 font-medium'>Redes Sociales</h4>
        <i className="fab fa-facebook mx-1 my-3 text-white text-lg"></i>
        <i className="fab fa-instagram mx-1 text-white text-lg"></i>
        <i className="fab fa-youtube mx-1 text-white text-lg "></i>
        <i className="fab fa-twitter mx-1 text-white text-lg"></i>
        <i className="fab fa-tiktok mx-1 text-white text-lg"></i>
       
       
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
