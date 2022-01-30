

const Servicios = () => {
    return (
        <div className="  container text-center grid lg:grid-cols-3 lg:divide-x-2  ">
            
            
                <div className="msm:hidden order-1  ">
                <i className="fas fa-magic mb-5  text-red-800 text-3xl "></i>
                <h2 className="text-white uppercase text-3xl mb-4">Donde Estamos? </h2> 
                <p className="text-white">Barrio de Caballito - Felipe Vallese 1387.
                <br /> WhatsApp al: 11-5263-8510.
                <br /> Ver Mapa</p>
                </div>
                <div className=" msm:hidden px-3 order-2">
                <i className="fas fa-hat-wizard mb-5  mlg:mt-8 text-red-800 text-3xl"></i>
                <h2 className="text-white uppercase text-3xl mb-4">Aprender Magia </h2> 
                <p className="text-white">Las clases de ilusionismo son dictadas por<br /> 
                Campeones Latinoamericanos especializados en<br />
                una rama de la magia particular y con un estilo diferente.</p>
                </div>
                <div  className="order-3  ">
                <i className="msm:mt-0 fas fa-door-closed mb-5 text-red-800 mlg:mt-8 text-3xl"></i>
                <h2 className="text-white uppercase text-3xl mb-4">Curso de Magia </h2> 
                <button className="bg-red-800 uppercase mb-1 rounded text-center mlg:px-24 mxl:px-10 xl:px-24 py-3 font-medium tracking-widest text-white msm:px-20">Reserva tu Vacante</button><br />
                <p className="text-gray-500 mb-1 font-medium text-sm divide-y-2  ">Cupos Limitados</p> 
               
                <button className=" bg-transparent border px-[7.6rem] border-zinc-600 uppercase rounded text-center py-3 font-medium tracking-wider msm:px-[6.6rem] text-white mlg:px-[7.6rem] mxl:px-[4rem]">Que Aprenderé?</button>
                </div>
            
        </div>

    )
}

export default Servicios