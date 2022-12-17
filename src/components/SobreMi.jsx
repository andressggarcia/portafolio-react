import React from 'react';
import './sobreMi.css'
import myImg from '../assets/foto-mia-removebg-preview.png'
import CV from '../assets/CV Emilio Garcia.pdf'

const SobreMi = () => {
    return (
        <div className='div-sobremi' id='about-me'>
            <div className='div-img__sobremi'>
                <img className='img-sobremi' src={myImg} alt="" />
            </div>
            <div className='info-sobremi'>
                <h2 className='h2-info__sobremi'>Hola , me llamo Emilio Garcia</h2>
                <p className='p-info__sobremi' >
                Soy una persona autodidacta, proactiva, eficaz, que ama la tecnología. 
                Actualmente, dedico mi tiempo a estudiar y desarrollar aplicaciones web. <br /> Me encantan los desafíos.
                Me encantaría ser parte de tu equipo, si tienes alguna duda o quieres saber más de mi, 
                puedes contactarme a través de mis redes sociales o por un mensaje a traves del formulario de contacto.
                </p>
                <p className='p-info__sobremi'><b>Nombre:</b> Emilio Garcia</p>
                <p className='p-info__sobremi'><b>Edad:</b> 23</p>
                <p className='p-info__sobremi'><b>Teléfono:</b> +54 2622 438532</p>
                <p className='p-info__sobremi'><b>Correo:</b> andressggarcia2@gmail.com</p>
                <button className='button-sobremi'><a href={CV} download={'CV Emilio Garcia'}>Descargar CV</a></button>
                
            </div>
        </div>
    );
};

export default SobreMi;