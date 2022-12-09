import React from 'react';
import './habilidades.css'
const Habilidades = () => {
    return (
        <div className='container-habilidades'>
            <div className='title-habilidades'>
                <h2 className='h2-habilidades__title'>Mis</h2>
                <h2 className='h2-habilidades__subtitle'>Habilidades</h2>
            </div>
            <p className='p-habilidades'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className='div-habilidades'>
                <div className='habilidades html'>
                    <span><i class="fa-brands fa-html5"></i></span>
                    <h3>HTML</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                        elit. Placeat vero perferendis dolor. Assumenda 
                        nemo eum, veniam eos illum explicabo hic sit quas, 
                        quia, blanditiis vel officia nisi obcaecati commodi 
                        iste.
                    </p>
                </div>
                <div className='habilidades css'>
                    <span><i class="fa-brands fa-css3-alt"></i></span>
                    <h3>CSS</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Placeat vero perferendis dolor. Assumenda nemo eum, veniam 
                        eos illum explicabo hic sit quas, quia, blanditiis vel
                         officia nisi obcaecati commodi iste.
                    </p>
                </div>
                <div className='habilidades react'>
                    <span><i class="fa-brands fa-react"></i></span>
                    <h3>REACT JS</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Placeat vero perferendis dolor. Assumenda nemo eum, 
                        veniam eos illum explicabo hic sit quas, quia, blanditiis 
                        vel officia nisi obcaecati commodi iste.
                    </p>
                </div>
                <div className='habilidades javascript'>
                    <span><i class="fa-brands fa-square-js"></i></span>
                    <h3>JAVASCRIPT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Placeat vero perferendis dolor. Assumenda nemo eum, veniam 
                        eos illum explicabo hic sit quas, quia, blanditiis vel 
                        officia nisi obcaecati commodi iste.
                    </p>
                </div>
                <div className='habilidades node'>
                    <span><i class="fa-brands fa-node-js"></i></span>
                    <h3>NODE JS (proximamente)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Placeat vero perferendis dolor. Assumenda nemo eum, veniam eos 
                        illum explicabo hic sit quas, quia, blanditiis vel officia 
                        nisi obcaecati commodi iste.
                    </p>
                </div>
                <div className='habilidades bootstrap'>
                    <span><i class="fa-brands fa-bootstrap"></i></span>
                    <h3>BOOTSTRAP</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Placeat vero perferendis dolor. Assumenda nemo eum, veniam 
                        eos illum explicabo hic sit quas, quia, blanditiis vel 
                        officia nisi obcaecati commodi iste.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Habilidades;