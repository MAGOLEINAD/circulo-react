
const TresCajasGrid = () => {
    return (
        <div className="2xl:hidden">
                <div className="container py-10 bg-[url('/img/blocks_background.jpg')] gap-40 bg-center text-center grid grid-cols-3 divide-x border-2 border-cyan-400">
            
            <div className="order-1 outline-2 bg-white py-10 ml-12 rounded-sm">
            <h2 className="text-black uppercase text-3xl mb-4">Clases de Magia </h2> 
            <p className="text-black">Crearás experiencias inolvidables. Las clases se dictan 
            <br />  una vez por semana. Enseñanza  personalizada y eficiente. 
            <br /> Estudiá los secretos de la magia.</p>
            </div>
            <div className="order-2 bg-white py-10 border-8 rounded-sm">
            <h2 className="text-black uppercase text-3xl mb-4">Escuela de Magia </h2> 
            <p className="text-black">Aprenderás magia de cerca, de salón y escena,  <br /> cartomagia, presentación mágica, psicología, 
           <br /> magia humorística, mentalismo y manipulación. </p>
            </div>
            <div  className="order-3 bg-white mr-12 py-10 rounded-sm ">
            <h2 className="text-black uppercase text-3xl mb-4 ">Curso de Magia </h2> 
            <p className="text-black">Se divide en 5 Niveles, cada nivel dura un Cuatrimestre.  
            <br /> Brindamos apuntes de las clases al aprender magia.
            <br /> Conferencias para magos avanzados.</p>
            </div>
        
    </div>
        </div>
    )
}

export default TresCajasGrid
