import React, { Suspense } from 'react';


import MenuPrincipal from "./components/MenuPrincipal"
import Header from './components/Header'
const Servicios = React.lazy (()=> import ('./components/Servicios'))
const TresCajasGrid = React.lazy (()=> import ('./components/TresCajasGrid'))
const Ilusionismo = React.lazy (()=> import ('./components/Ilusionismo'))
const Google = React.lazy (()=> import ('./components/Google'))
const Footer = React.lazy (()=> import ('./components/Footer'))
import Galeria from './components/Galeria'




function App() {

  return (
    <>
    <Suspense fallback= {<p><i className="fas fa-spinner flex justify-center container mt-10 text-5xl"></i></p>}> 
    <MenuPrincipal />
    <Header />
    <Servicios />
    <Ilusionismo />
    <TresCajasGrid />
    <Google />
    <Galeria />
    <Footer />
    </Suspense>
  
    
   
    </>
  )
}

export default App



