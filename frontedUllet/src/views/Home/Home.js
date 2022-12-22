import React from 'react';
import Button from '../../components/forms/Button';

import "./Home.css"
import heroImage from "./hero_image.png"



function Home() {
    return ( 
        <section className = "home ">
            <div className = "container grid">
                <div className='headline'>
                <p className='title'><b>Tus pagos ...</b></p>
                <p className='content'><b>RÁPIDOS Y EFECTIVOS</b></p>
                <p className='support'>Manejar tu plata nunca habia sido tan fácil como en Ullet</p>
                <Button>Quiero mi Cuenta</Button>
                </div>
                <div className='hero-image'>
                    <img src= {heroImage}></img>
                </div>
            </div>
        </section>
     );
}

export default Home;