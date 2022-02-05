import React, { Suspense } from 'react';
import MenuPrincipal from "./components/MenuPrincipal"
const Servicios = React.lazy (()=> import ('./components/Servicios'))
const TresCajasGrid = React.lazy (()=> import ('./components/TresCajasGrid'))
const Ilusionismo = React.lazy (()=> import ('./components/Ilusionismo'))
const Google = React.lazy (()=> import ('./components/Google'))
const Footer = React.lazy (()=> import ('./components/Footer'))
import Galeria from './components/Galeria'
import Header2 from './components/Header2';
import Video from './components/Video';
import Whatsapp from './components/Whatsapp';





function App() {

  return (
    <>
    <Suspense fallback= {<p><i className="fas fa-spinner animate-spin flex justify-center container mt-10 text-5xl"></i></p>}> 
    <MenuPrincipal />
    <Header2 />
    <Servicios />
    <Ilusionismo />
    <TresCajasGrid />
    <Video />
    <Google />
    <Galeria />
    <Footer />
    <Whatsapp/>
    </Suspense>
    
    
   
    </>
  )
}

export default App



