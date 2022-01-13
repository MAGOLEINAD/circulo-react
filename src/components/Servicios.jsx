const Servicios = () => {
    return (
        <div className="container text-center  grid lg:grid-cols-3 lg:divide-x-2  ">
            
                <div className="order-1  ">
                <i class="fas fa-magic mb-10 text-red-800 text-3xl "></i>
                <h2 className="text-white uppercase text-3xl mb-4">Donde Estamos? </h2> 
                <p className="text-white">Barrio de Caballito - Felipe Vallese 1387.
                <br /> WhatsApp al: 11-5263-8510.
                <br /> Ver Mapa</p>
                </div>
                <div className=" px-3 order-2">
                <i class="fas fa-hat-wizard mb-10 text-red-800 text-3xl"></i>
                <h2 className="text-white uppercase text-3xl mb-4">Aprender Magia </h2> 
                <p className="text-white">Las clases de ilusionismo son dictadas por<br /> 
                Campeones Latinoamericanos especializados en<br />
                una rama de la magia particular y con un estilo diferente.</p>
                </div>
                <div  className="order-3">
                <i class="fas fa-door-closed mb-10 text-red-800 text-3xl"></i>
                <h2 className="text-white uppercase text-3xl mb-4">Botones </h2> 
                <p className="text-white">Barrio de Caballito - Felipe Vallese 1387.
                <br /> WhatsApp al: 11-5263-8510.
                <br /> Ver Mapa</p>
                </div>
            
        </div>

    )
}

export default Servicios
