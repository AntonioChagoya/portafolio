import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
      <h1>Algo de mi trabajo</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt src="images/portfolio/panel-solar.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Bomba solar</h5>
                  <p>E-commerce</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt src="images/portfolio/metal.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>IME Puebla</h5>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt src="images/portfolio/abasto.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Abasto Deli</h5>
                  <p>E-commerce</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt src="images/portfolio/seguridad.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Serpico seguridad</h5>
                  <p>Diseño y desarrollo web</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt src="images/portfolio/dentista.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Mh Kids</h5>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt src="images/portfolio/equipo.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Gazele</h5>
                  <p>Desarrollo web</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt src="images/portfolio/abarrote.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Abarrote de diseño</h5>
                  <p>E-commerce</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt src="images/portfolio/retrocam.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Retrocam</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>{" "}
        {/* item end */}
      </div>{" "}
      {/* portfolio-wrapper end */}
    </div>{" "}
    {/* twelve columns end */}
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-panel-solar1.jpg"
        alt
      />
      <div className="description-box">
        <h4>Bomba solar</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Desarrollo web, E-commerce
        </span>
      </div>
      <div className="link-box">
        <a href="https://bombasolar.com.mx/">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-metal.jpg"
        alt
      />
      <div className="description-box">
        <h4>IME Puebla</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Página informativa
        </span>
      </div>
      <div className="link-box">
        <a href="https://www.imepuebla.com/" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-abasto.jpg"
        alt
      />
      <div className="description-box">
        <h4>Abasto Deli</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Desarrollo web, E-commerce
        </span>
      </div>
      <div className="link-box">
        <a href="https://www.abastodeli.com/" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-seguridad.jpg"
        alt
      />
      <div className="description-box">
        <h4>Serpico seguridad</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Página informativa, Google Ads
        </span>
      </div>
      <div className="link-box">
        <a href="https://seguridadserpico.com.mx/" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-dentista.jpg"
        alt
      />
      <div className="description-box">
        <h4>MH Kids</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Página informativa
        </span>
      </div>
      <div className="link-box">
        <a href="https://mhkids.com.mx/" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-equipo.jpg"
        alt
      />
      <div className="description-box">
        <h4>Gazele</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Página informativa, Catálogo
        </span>
      </div>
      <div className="link-box">
        <a href="https://gazele.com.mx/" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-abarrote.jpg"
        alt
      />
      <div className="description-box">
        <h4>Abarrote de diseño</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Desarrollo web, E-commerce
        </span>
      </div>
      <div className="link-box">
        <a href="https://abarrotedediseno.mx/" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img
        className="scale-with-grid"
        src="images/portfolio/modals/m-retrocam.jpg"
        alt
      />
      <div className="description-box">
        <h4>Retrocam</h4>
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
          sem nibh id elit.
        </p>
        <span className="categories">
          <i className="fa fa-tag" />
          Webdesign, Photography
        </span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net" target="_blank">Ver</a>
        <a className="popup-modal-dismiss">Cerrar</a>
      </div>
    </div>
    {/* modal-01 End */}
  </div>{" "}
  {/* row End */}
</section>

    )
  }
}