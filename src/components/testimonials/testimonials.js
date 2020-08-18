import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <section id="testimonials">
  <div className="text-container">
    <div className="row">
      <div className="two columns header-col">
        <h1>
          <span>Testimonios</span>
        </h1>
      </div>
      <div className="ten columns flex-container">
        <div className="flexslider">
          <ul className="slides">
            <li>
              <blockquote>
                <p>
                  Nunca lo he visto triste o con mala actitud, es proactivo y siempre muy sonriente por eso es agradable trabajar con el, se contagia.
                </p>
                <cite>Akza - Conektica</cite>
              </blockquote>
            </li>{" "}
            {/* slide ends */}
            <li>
              <blockquote>
                <p>
                  Mi página quedó increible, Antonio siempre fue muy amable y hasta la fecha sigo trabajando con el en distintos proyectos.
                </p>
                <cite>Mr. Adobe</cite>
              </blockquote>
            </li>{" "}
            {/* slide ends */}
          </ul>
        </div>{" "}
        {/* div.flexslider ends */}
      </div>{" "}
      {/* div.flex-container ends */}
    </div>{" "}
    {/* row ends */}
  </div>{" "}
  {/* text-container ends */}
</section>

    )
  }
}