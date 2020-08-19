import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
          <section id="resume">
            {/* Education
          ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1>
                  <span>Educación</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Instituto de Educación Universitaria (IEU)</h3>
                    <p className="info">
                      Ingeniería en software<span>•</span>{" "}
                      <em className="date">Enero 2020</em>
                    </p>
                    <p>
                    Me apasiona mucho la programación desde que la conozco, por eso decidí convertirme en un profesional de esta área estudiando una ingeniería en software, pero eso es solo el comienzo...
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Internet</h3>
                    <p className="info">
                      Conocimiento autodidacta <span>•</span>{" "}
                      <em className="date">Siempre</em>
                    </p>
                    <p>
                    El mundo de la programación es demasiado complejo y cambiante, por esta razón la educación universitaria no es suficiente, una de las habilidades más importantes que debe tener un programador es el deseo de aprender y aceptar el cambio.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
            {/* End Education */}
            {/* Work
          ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Trabajo</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Conektica</h3>
                    <p className="info">
                      Desarrollador web Junior <span>•</span>{" "}
                      <em className="date">Presente</em>
                    </p>
                    <p>
                    ¡Un gran lugar para empezar! Conektica es una agencia creativa orgullosamente poblana con servicios que van desde la producción audio-visual hasta el desarrollo web y marketing digital.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Experiencia Freelance</h3>
                    <p className="info">
                      Diseño y desarrollo <span>•</span>{" "}
                      <em className="date">Presente</em>
                    </p>
                    <p>
                    También he concluido con éxito proyectos para clientes que me contratan de manera freelance, esto supone una gran ventaja para mis clientes ya que pueden acceder a páginas web profesionales con costos más bajos que los de una agencia y con una calidad equiparable.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
            {/* End Work */}
            {/* Skills
          ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1>
                  <span>Habilidades</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <p>
                A pesar de que mi fuerte son los CMS (Sistemas de Manejo de Contenido) como WordPress, se necesitan conocimientos múltiples para crear un proyecto solido y que cumpla con las metas planteadas. 
                </p>
                <div className="bars">
                  <ul className="skills">
                    <li>
                      <span className="bar-expand photoshop" />
                      <em>Javascript</em>
                    </li>
                    <li>
                      <span className="bar-expand illustrator" />
                      <em>React</em>
                    </li>
                    <li>
                      <span className="bar-expand wordpress" />
                      <em>Wordpress</em>
                    </li>
                    <li>
                      <span className="bar-expand css" />
                      <em>CSS3</em>
                    </li>
                    <li>
                      <span className="bar-expand html5" />
                      <em>HTML5</em>
                    </li>
                    <li>
                      <span className="bar-expand jquery" />
                      <em>Adobe XD</em>
                    </li>
                  </ul>
                </div>
                {/* end skill-bars */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
            {/* End skills */}
          </section>
          
    )
  }
}