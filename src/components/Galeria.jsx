export const Galeria = () => {
  return (

      <>
          <h3 className="text-white text-center text-3xl  uppercase my-10">
              Fotos - escuela y tienda
          </h3>
          <div id="app">
  {/* <!-- Carousel slider --> */}
  <div class="carousel-slider">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          {/* <!-- elements with  "carousel-slider-animate-opacity" class will have animated opacity --> */}
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia1.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia1.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia1.jpg"  alt="clases de magia"/>
            </picture>
            
            <div class="slide-content">
              <h2>Curso de Magia</h2>
              <p>Nunca repitas un juego en la misma sesión.</p>
            </div>
          </div>

        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia2.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia2.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia2.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Levitación de Alumno</h2>
              <p>Y así mantengo, mi capacidad de asombro...</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia3.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia3.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia3.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Magia de cerca</h2>
              <p>En Close Up las manos trabajan a centímetros de distancia.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia4.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia4.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia4.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Sombras</h2>
              <p>Clase de Sombras Chinas y Bola Zombie</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia5.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia5.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia5.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Magia y Ritmo</h2>
              <p>Aprendiendo a manejar el ritmo en la magia.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia6.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia6.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia6.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Entrega de Diplomas</h2>
              <p>Un gran profesor no debe solo enseñar, sino motivar.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia7.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia7.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia7.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Divirtiéndonos en Clase</h2>
              <p>Tu éxito como Mago depende de tu Personalidad.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia8.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia8.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia5.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Conferencia de Roberto</h2>
              <p>Ensayo para conseguir que una ilusión parezca realidad.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia9.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia9.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia9.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Evento de Cierre de Año</h2>
              <p>"Estaba tan cerca de mí, como yo de ti y no vi como lo hizo"</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia10.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia10.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia10.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Gala de Fin de Año.</h2>
              <p>Gala de Alumnos del Círculo Mágico.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia11.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia11.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia11.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Manipulación</h2>
              <p>Practica día a día. Practica delante del espejo, te verás a ti mismo como te ve el público.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia12.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia12.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia12.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2 className="uppercase">Minimagos</h2>
              <p>Alumno Lucio, realizando un efecto de riesgo en vivo.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia13.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia13.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia13.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Jugando con Fuego</h2>
              <p>Alumnos soprendiéndose entre ellos antes de la clase.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia14.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia14.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia14.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Atención Personalizada</h2>
              <p>Atendiendo los pedidos mágicos en la tienda</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia15.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia15.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia15.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Mágiko del Castillo</h2>
              <p>Magia y Humor en Círculo Mágico...</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia16.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia16.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia16.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>LEINAD</h2>
              <p>Bienvenido al Círculo Mágico, no vas a querer salir...  </p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia17.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia176.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia17.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Entrega de Diplomas</h2>
              <p>Un gran profesor no debe solo enseñar, sino motivar.</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="carousel-slider-animate-opacity">
          <picture>
                <source srcset="./images/escuelamagia18.jpg" type="image/avif"/>
                <source srcset="./images/escuelamagia18.jpg" type="image/webp"/>
                <img loading="lazy" src="./images/escuelamagia18.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            <div class="slide-content">
              <h2>Entrega de Diplomas</h2>
              <p>Un gran profesor no debe solo enseñar, sino motivar.</p>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
  </div>
</div>


      </>
     
  )
}



export default Galeria


