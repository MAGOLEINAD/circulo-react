
const Ilusionismo = () => {
    return (
        <div className="container rounded-md my-14 grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 gap-x-6 justify-items-center imagenback " >
            <picture className="sinimagenback">
                 <source srcSet="./src/img/headertop.png" type="image/avif" />
                 <source srcSet="./src/img/headertop.png" type="image/webp" />
                 <img loading="lazy" src="./src/img/headertop.png" alt="Curso de Magia"  />
            </picture>
            <div className="  p-20 md:p-10 text-gray-600 " >
            <h3 className="  font-thin  text-5xl">Magia e Ilusionismo</h3>
            <p className=" mt-12 text-xl ">Desarrollá tu <b>comunicación.</b> Trabajarás tu capacidad de expresarte, tu vocabulario, gestualidad y aprenderás conceptos de psicología.</p>
            <p className=" mt-4 text-xl  ">Al ejercitar la coordinación de todos estos elementos conjuntamente, tu comunicación y oratoria mejorarán mientras te diviertes y entretienes al público.</p>
            </div>
            <div>
            
            {/* <picture className="sm:hidden">
                 <source srcSet="./img/header1-m.png" type="image/avif" />
                 <source srcSet="./img/header1-m.png" type="image/webp" />
                 <img loading="lazy" src="./img/header1-m.png" alt="Curso de Magia"  />
            </picture>
            <picture className="sm:hidden">
                 <source srcSet="./img/headtop.png" type="image/avif" />
                 <source srcSet="./img/headtop.png" type="image/webp" />
                 <img loading="lazy" src="./img/header1-m.png" alt="Curso de Magia"  />
            </picture> */}
       
        
           
        
              </div>
            
        </div>
      
    )
}

export default Ilusionismo
