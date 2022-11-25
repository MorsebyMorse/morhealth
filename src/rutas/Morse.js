import React from 'react';
import Mision from './../assets/img/mision.jpg'
import Vision from './../assets/img/vision.jpg'
import Filosofia from './../assets/img/filosofia.jpg'

import './estilos/morse.css'

function Morse() {
  return (
    <div className='about'>
      <div className='row'>
        <div className='image'>
          <img src={Mision} alt="Mision"/>
        </div>
        <div className='content'>
          <h3>Mision</h3>
          <p>Mejorar, crear y promover el desarrollo de software y los servicios de optimización de datos dentro del CECyT9 y otras empresas medianas o grandes de México, a través de series de ideas e implementación de sistemas de información, siempre satisfaciendo las necesidades requeridas del mercado actual y buscando el bienestar tanto del consumidor como de los miembros de la empresa.
</p>
        </div>
      </div>
      <div className='row'>
        <div className='content'>
          <h3>Visión</h3>
          <p>Ser una empresa preferida por el público y distintas empresas medianas y grandes, gracias a nuestra calidad en el desarrollo de software y optimización de datos a nivel nacional, distinguido por ser rápido, eficiente, seguro y fácil de utilizar, así como adaptable a los cambios del mercado y a las demandas de los clientes.</p>
        </div>
        <div className='image'>
          <img src={Vision} alt="Mision"/>
        </div>
      </div>
      <div className='row'>
        <div className='image'>
          <img src={Filosofia} alt="Mision"/>
        </div>
        <div className='content'>
          <h3>Filosofía</h3>
          <p>Ofrecer en todo momento a nuestros clientes un servicio con el cual se puedan sentir en un ambiente totalmente seguro y confiable en cualquier ámbito. Aumentando de esta forma nuestra productividad como empresa y fomentando el trabajo en equipo entre los colaboradores.</p>
        </div>
      </div>
    </div>
  )
}

export default Morse