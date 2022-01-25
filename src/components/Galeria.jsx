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
                <img loading="lazy" src="./images/escuelamagia1.jpg" class="img-fluid d-md-block d-sm-none" alt="clases de magia"/>
            </picture>
            
            <div class="slide-content">
              <h2>Guardians Of The Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge
                the universe.</p>
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
              <h2>Justice League</h2>
              <p>Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with
                Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching
                threat
                of catastrophic proportions.</p>
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
              <h2>Spider-Man: Far from Home</h2>
              <p>Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a
                world that has changed forever.</p>
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
              <h2>The Suicide Squad</h2>
              <p>Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve
                prison
                join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused
                island of Corto Maltese.</p>
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
              <h2>Thor: Ragnarok</h2>
              <p>Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök,
                the
                destruction of his world, at the hands of the powerful and ruthless villain Hela.</p>
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


