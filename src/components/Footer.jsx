import React from 'react';

const Footer = () => {
  return <div>
      <footer className='container msm:grid msm:gap-4 justify-evenly flex text-zinc-500  mt-16'>
        <div>
        <picture className="msm:hidden">
                 <source srcSet="./src/img/logofooter.avif" type="image/avif" />
                 <source srcSet="./src/img/logofooter.webp" type="image/webp" />
                 <img src="./src/img/logofooter.jpg" className='msm:mx-auto  mt-2' alt="logo" /> 
              </picture>
         
        </div>
        <div className='sm:hidden text-center mx-6 text-zinc-400 '>
          <p>El Curso está orientado para iniciados y avanzados ya sea como hobby o de manera profesional. No se necesita ningún tipo de conocimiento previo.</p>
        </div>
      
        <div className='msm:hidden'>
        <p className='ftp'>Escuela de Magia</p>
        <p className='my-2'>Clases Presenciales</p>
        <a href= 'https://www.aprendermagia.com.ar/planes'><p>Clases Online</p></a>
        </div>
        <div className='msm:hidden'>
        <p className='ftp'>Tienda de Magia</p>
        <a href= 'https://www.TrucosyMagia.com'> <p className='my-2'>Productos</p></a>
        <a href= 'https://www.udemy.com/course/aprende-magia-e-ilusionismo-curso-completo/'><p>Curso en Videos</p></a>
        </div>
        <div className='msm:hidden'>
        <p className='ftp'>Contactate</p>
        <p className='my-2'>Whats App</p>
        <p>E-Mail</p>
        </div>
        <div className='msm:text-center'>
        <p className='msm:text-zinc-200 tracking-widest font-medium ftp'>Redes Sociales</p>
        <a href= 'https://www.facebook.com/escuelademagia'aria-label="Facebook"> <i className="fab fa-facebook mx-[0.4rem] my-3 text-white text-xl" ></i></a>
        <a href= 'https://www.instagram.com/escuelademagia'aria-label="Instagram"><i className="fab fa-instagram mx-[0.4rem] text-white text-xl" ></i></a>
        <a href= 'https://www.youtube.com/user/trucosymagia'aria-label="YouTube"><i className="fab fa-youtube mx-[0.4rem] text-white text-xl" ></i></a>
        <a href= 'https://www.twitter.com/trucosymagia'aria-label="Twitter"><i className="fab fa-twitter mx-[0.4rem] text-white text-xl" ></i></a>
        <a href= 'https://www.tiktok.com/@escuelademagia'aria-label="Tik Tok"><i className="fab fa-tiktok mx-[0.4rem] text-white text-xl" ></i></a>
       
       
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
