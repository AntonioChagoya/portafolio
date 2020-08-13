import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/perfil.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>Sobre mi</h2>
      <p>
        Soy un emprendedor de corazón y mi objetivo es ayudarte a digitalizar tu negocio, ganar presencia en internet, 
         vender más productos o conseguir más clientes, y sobre todo ser tu soporte en cuanto a servicios digitales se refiere. 
         He diseñado páginas web para clientes de diversos sectores y estoy seguro que puedo ayudarte a construir tu marca 
         en linea.
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Detalles de contacto</h2>
          <p className="address">
            <span>Antonio Rodríguez Chagoya</span>
            {/* <br /> */}
            <span>
              {/* 1600 Amphitheatre Parkway */}
              <br />
              Puebla, Pue. México
            </span>
            <br />
            <span>(222) 739 0912</span>
            <br />
            <span>antonio.chagoya.compras@hotmail.com</span>
          </p>
        </div>
        <br></br>
        <div className="columns download">
          <p>
            <a href="/portafolio/src/AntonioRodriguezChagoyaCV.pdf" className="button" download="AntonioRodriguezChagoyaCV.pdf">
              <i className="fa fa-download" />
              Descargar CV
            </a>
          </p>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end .main-col */}
  </div>
</section>

    )
  }
}