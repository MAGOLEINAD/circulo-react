export const Header = () => {
    return (

        <div className="msm:flex container justify-center place-items-end flex  ">
           
           <h1 className="text-gray-100 text-3xl sm:text-5xl  antialiased text-shadow-xl  uppercase font-semibold absolute mb-10 text-center msm:text-4xl ">Circulo Magico 
           <div className="text-2xl sm:text-4xl  antialiased uppercase italic mt-3  text-red-800 msm:text-lg msm:font-medium msm:tracking-normal">Escuela de Magia e Ilusionismo</div></h1>
               <picture className="msm:hidden">
                 <source srcSet="./src/img/slides/cartas.avif" type="image/avif" />
                 <source srcSet="./src/img/slides/cartas.webp" type="image/webp" />
                 <img src="./src/img/slides/cartas.jpg" alt="Escuela de Magia e Ilusionismo"  />
              </picture>
              <picture className="  sm:hidden ">
                <source srcSet="./src/img/slides/cartas_mobile.avif" type="image/avif" />
                 <source srcSet="./src/img/slides/cartas_mobile.webp" type="image/webp" />
                 <img src="./src/img/slides/cartas_mobile.jpg" alt="Escuela de Magia e Ilusionismo"  />
              </picture>
            </div>
       
    )
}



export default Header


