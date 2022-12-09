import React from 'react';
import './contacto.css'
const Contacto = () => {
    return (
        <div className='container-contacto' id="contact">
            <div className='title-habilidades'>
                <h2 className='h2-habilidades__title'>Mi</h2>
                <h2 className='h2-habilidades__subtitle'>Contacto</h2>
            </div>
            <div className='div-container__contacto'>
                <div className='div-contacto'>
                    <i class="fa-solid fa-envelope"></i>
                    <p>andressggarcia2@gmail.com</p>
                </div>
                <div className='div-contacto'>
                    <i class="fa-solid fa-mobile"></i>
                    <p>+54-2622-438532</p>
                </div>
            </div>
            <div className='social-dos'>
                <a className='circulo-dos' href="https://www.linkedin.com/in/emiliogarciagiaquinta/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a className='circulo-dos' href="https://github.com/andressggarcia"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    );
};

export default Contacto;