import React from 'react';
import './proyectos.css'
import ecommerce from '../assets/Captura de pantalla (3).png'
import pokedex from '../assets/Captura de pantalla (5).png'
import rickAndMorty from '../assets/Captura de pantalla (7).png'
import tiempo from '../assets/Captura de pantalla (8).png'
const Proyectos = () => {
    return (
        <div className='container-proyectos'>
            <div className='container-title__proyectos' id='proyects'>
                <h2 className='h2-proyectos__mis'>Mis</h2>
                <h2 className='h2-proyectos'>Proyectos</h2>
            </div>
           <div className='div-proyectos'>
           <a className='a-img' href="https://ecommerce-emilio.netlify.app/">
                <img src={ecommerce} alt="" />
                <div className='hover-proyecto'>
                    <h4><b>Ecommerce</b></h4>
                    <span>React | Redux | React Router | Loader | API REST | Axios</span>
                </div>
            </a>
            <a className='a-img' href="https://deft-baklava-15783e.netlify.app/">
                <img src={pokedex} alt="" />
                <div className='hover-proyecto'>
                    <h4><b>Pokedex</b></h4>
                    <span>React | Hooks | React Router | Consumo de API | Axios | Paginacion</span>
                </div>
            </a>
            <a className='a-img' href="https://rick-andmorty.netlify.app/">
                <img src={rickAndMorty} alt="" />
                <div className='hover-proyecto'>
                    <h4><b>Rick and Morty Wiki</b></h4>
                    <span>React | Hooks | Consumo de API | Axios</span>
                </div>
            </a>
            <a className='a-img' href="https://entregable-2-emilio-garcia.netlify.app/">
                <img src={tiempo} alt="" />
                <div className='hover-proyecto'>
                    <h4><b>Clima</b></h4>
                    <span>React | Hooks | Consumo de API |Axios</span>
                </div>
            </a>
           </div>
        </div>
    );
};

export default Proyectos;