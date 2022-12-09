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
                    Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Expedita dolore recusandae, dignissimos 
                    deleniti ex dolores voluptatibus asperiores,
                     unde, ad cumque at ipsam id neque inventore 
                     corrupti sed doloremque ipsum molestiae.
                     Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Officia repellendus in, fuga neque suscipit 
                      consequatur reprehenderit! Quisquam quod,
                       consectetur vero unde dolores molestiae 
                       laboriosam ipsam nemo debitis reprehenderit 
                       necessitatibus voluptates.
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