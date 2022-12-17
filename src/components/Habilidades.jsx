import React from 'react';
import './habilidades.css'
const Habilidades = () => {
    return (
        <div className='container-habilidades'>
            <div className='title-habilidades' id='habilities'>
                <h2 className='h2-habilidades__title'>Mis</h2>
                <h2 className='h2-habilidades__subtitle'>Habilidades</h2>
            </div>
            <p className='p-habilidades'>
                Algunas de mis habilidades como desarrollador web enfocado a cumplir tus necesidades de aplicaciones web.
            </p>
            <div className='div-habilidades'>
                <div className='habilidades html'>
                    <span><i class="fa-brands fa-html5"></i></span>
                    <h3>HTML</h3>
                    <p>
                            Basto conocimiento de como estructurar y desplegar tu sitio para que sea visible en la web..
                    </p>
                </div>
                <div className='habilidades css'>
                    <span><i class="fa-brands fa-css3-alt"></i></span>
                    <h3>CSS</h3>
                    <p>
                        Experiencia en estilar los componentes para tu sitio web, con increibles diseños completamente responsive y llenos de funciones.
                    </p>
                </div>
                <div className='habilidades react'>
                    <span><i class="fa-brands fa-react"></i></span>
                    <h3>REACT JS</h3>
                    <p>
                        Libreria en la que me especializo para maquetar estilar y agregar funcionalidades a tu sitio y asi poder ofrecerte la mejor calidad de proyectos.
                    </p>
                </div>
                <div className='habilidades javascript'>
                    <span><i class="fa-brands fa-square-js"></i></span>
                    <h3>JAVASCRIPT</h3>
                    <p>
                        Basto conocimiento en lo que es basicamente el motor de un sitio funcional para asi cubrir las necesidades de cada cliente.
                    </p>
                </div>
                <div className='habilidades node'>
                    <span><i class="fa-brands fa-node-js"></i></span>
                    <h3>NODE JS (proximamente)</h3>
                    <p className='p-node'>
                        Entorno en el que me especializo del lado del back-end para asi desarollar tu aplicacion fullstack.
                    </p>
                </div>
                <div className='habilidades bootstrap'>
                    <span><i class="fa-brands fa-bootstrap"></i></span>
                    <h3>BOOTSTRAP</h3>
                    <p>
                        Libreria para aplicar estilos que mas utilizo para facilitar animaciones y elementos complejos para asi poder llevar a cabo tu proyecto en la brevedad posible.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Habilidades;