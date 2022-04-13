import React from 'react';
import Home from './componentes/homepage';
import Header from './componentes/header';
import SubNav from './componentes/subnavbar';
import Footer from './componentes/Footer';
import Carousel from './componentes/carousel';


export default function App(){
    return(
        <div>
        <Header/>
        
        <SubNav/>

        <Home/>

        <Footer/>

        </div>
    );
}