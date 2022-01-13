
const Ilusionismo = () => {
    return (
        <div className="container rounded-md my-14 bg-white grid grid-rows-1 grid-cols-2 gap-x-6 justify-items-center ">
            <div>
            <h3 className="text-gray-600 px-20  font-thin pt-10 text-5xl">Magia e Ilusionismo</h3>
            <p className=" px-20  mt-12 text-xl text-gray-600">Desarrollá tu <b>comunicación.</b> Trabajarás tu capacidad de expresarte, tu vocabulario, gestualidad y aprenderás conceptos de psicología.</p>
            <p className="px-20 mt-4 text-xl text-gray-600 pb-10">Al ejercitar la coordinación de todos estos elementos conjuntamente, tu comunicación y oratoria mejorarán mientras te diviertes y entretienes al público.</p>
            </div>
            <div>
            <picture className="  ">
                 <source srcSet="src/img/header1.jpg" type="image/avif" />
                 <source srcSet="src/img/header1.jpg" type="image/webp" />
                 <img loading="lazy" src="src/img/header1.jpg" alt="Curso de Magia"  />
              </picture>
              </div>
            
        </div>
      
    )
}

export default Ilusionismo
