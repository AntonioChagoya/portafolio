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
      <h1 className="responsive-headline">¡Bienvenido!<br></br>¿Quién es Antonio Chagoya?</h1>
      <h3>
        Soy un programador web<span> front-end</span>,{" "}
        <span>creativo</span> y <span>apasionado</span>. Ayudo a las personas y empresas
        con soluciones web para llevar su marca al Top de empresas mexicanas.{" "}
        <a className="smoothscroll" href="#about">
          Explora mi portafolio{" "}
        </a>
        y aprende más{" "}
        <a className="smoothscroll" href="#about">
          sobre mi trabajo
        </a>
        . 
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/antonio.chagoya.1/">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-google-plus" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-skype" />
          </a>
        </li>
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