export const Header = () => {
    return (

        <div className="container relative justify-center place-items-end flex  ">
           
           <h1 className="text-gray-100 antialiased text-shadow-xl text-5xl uppercase font-semibold absolute mb-10 text-center  ">CIRCULO MAGICO 
           <div className="text-4xl antialiased uppercase italic mt-3 tracking-widest text-red-800">Escuela de Magia e Ilusionismo</div></h1>
               <picture className="">
                 <source srcSet="src/img/slides/cartas.avif" type="image/avif" />
                 <source srcSet="src/img/slides/cartas.webp" type="image/webp" />
                 <img loading="lazy" src="src/img/slides/cartas.jpg" alt="Escuela de Magia e Ilusionismo"  />
              </picture>
            </div>
       
    )
}



export default Header


