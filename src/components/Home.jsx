import React from 'react';
import './home.css'
import codingImg from '../assets/coding-img-removebg-preview.png'
const Home = () => {
    return (
        <div style={{width: '100%'}}>
            <div className='container-home' id='home'>
                <div className='div-description__home'>
                    <div className='div-title__home'>
                        <h1 className='sub-title__home'>Soy</h1>
                        <h1 className='title-home' >Emilio Garcia</h1>
                    </div>
                    <h3 id='texto' className='h3-description' >Front-end developer.</h3>
                    <p className='p-description'>
                        Soy dedicado y creativo, buscando constantemente mejorar personal y profesionalmente. 
                        Me motiva el aprendizaje constante,
                        actualmente me gusta trabajar con React.
                    </p>
                    <div className='social'>
                        <a className='circulo-uno' href="https://www.linkedin.com/in/emiliogarciagiaquinta/"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a className='circulo-uno' href="https://github.com/andressggarcia"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <a className='a-home' href="#contact"><button className='button-description' >Contacto</button></a>
                </div>
                <div className='div-img__coding'>
                    <img className='img-coding' src={codingImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;