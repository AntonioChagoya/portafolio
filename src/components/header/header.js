import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
      Show navigation
    </a>
    <a className="mobile-btn" href="#" title="Hide navigation">
      Hide navigation
    </a>
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Inicio
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          Sobre mi
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          Resumen
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          Portafolio
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#testimonials">
          Testimonios
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#contact">
          Contacto
        </a>
      </li>
    </ul>{" "}
    {/* end #nav */}
  </nav>{" "}
  {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">¡Bienvenido!<br></br>¿Listo para estrenar página web?</h1>
      <h3>
        ¡Hola! Soy Antonio Chagoya, un programador web front-end,{" "}
        creativo y ágil. Me dedico a ayudar a las personas y empresas
        con soluciones web. Desde el mantenimiento y admnistración de tu sitio hasta el desarrollo completo de una página{" "}
        <a className="smoothscroll" href="#contact">
         informativa o ecommerce.{" "}
        </a>
        <a className="smoothscroll" href="#portfolio">
        ¡Descubre más de mi trabajo!
        </a>
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="https://www.linkedin.com/in/antonio-rodriguez-5212481a7/" target="_blank">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/antonio.chagoya.1/" target="_blank">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AntonioRChagoya">
            <i className="fa fa-twitter" />
          </a>
        </li> 
        {/* 
        <li>
          <a href="#">
            <i className="fa fa-whatsapp" />
          </a>
        </li> */}

        <li>
          <a href="https://www.instagram.com/antoniolmlchagoya/" target="_blank">
            <i className="fa fa-instagram" />
          </a>
        </li> 
{/*     Tampoco tengo
        <li>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
        </li> */}
{/*     Esto ya ni sirve 
        <li>
          <a href="#">
            <i className="fa fa-skype" />
          </a>
        </li> */}

      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about">
      <i className="icon-down-circle" />
    </a>
  </p>
</header>

    )
  }
}