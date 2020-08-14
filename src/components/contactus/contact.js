import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <section id="contact">
  <div className="row section-head">
    <div className="two columns header-col">
      <h1>
        <span>Get In Touch.</span>
      </h1>
    </div>
    <div className="ten columns">
      <p className="lead">
        Puedes ponerte en contacto conmigo para obtener una cotización o agendar una cita. <b>Debido al COVID solamente estoy agendando citas por Zoom</b>. Si llenas el siguiente formulario me pondré en contácto contigo lo más pronto posible para resolver tus dudas. 
      </p>
    </div>
  </div>
  <div className="row">
    <div className="eight columns">
      {/* form */}
      {/* 
      <form action method="post" id="contactForm" name="contactForm">
        <fieldset>
          <div>
            <label htmlFor="contactName">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue
              size={35}
              id="contactName"
              name="contactName"
            />
          </div>
          <div>
            <label htmlFor="contactEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue
              size={35}
              id="contactEmail"
              name="contactEmail"
            />
          </div>
          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input
              type="text"
              defaultValue
              size={35}
              id="contactSubject"
              name="contactSubject"
            />
          </div>
          <div>
            <label htmlFor="contactMessage">
              Message <span className="required">*</span>
            </label>
            <textarea
              cols={50}
              rows={15}
              id="contactMessage"
              name="contactMessage"
              defaultValue={""}
            />
          </div>
          <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img alt src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form>{" "} */}

      {/* Formulario de Hubspot */}
      <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
      <script>
      hbspt.forms.create({`
	    portalId: "8274838",
      formId: "ef87ada1-440f-401c-8ba1-a869dedda1c7"
        `});
      </script>
      {/* Termina formulario Hubspot*/}



      {/* Form End */}
      {/* contact-warning */}
      <div id="message-warning"> Error boy</div>
      {/* contact-success */}
      <div id="message-success">
        <i className="fa fa-check" />
        Your message was sent, thank you!
        <br />
      </div>
    </div>
    <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4>Información de contacto</h4>
        <p className="address">
          Jonathan Doe
          <br />
          Antonio Rodríguez Chagoya
          <br />Puebla, Pue 72310 MX
          antonio.chagoya.compras@hotmail.com
          <br />
          <span>(222)739-0912</span>
        </p>
      </div>
      <div className="widget widget_tweets">
        <h4 className="widget-title">Latest Tweets</h4>
        <ul id="twitter">
          <li>
            <span>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum
              <a href="#">http://t.co/CGIrdxIlI3</a>
            </span>
            <b>
              <a href="#">2 Days Ago</a>
            </b>
          </li>
          <li>
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi
              <a href="#">http://t.co/CGIrdxIlI3</a>
            </span>
            <b>
              <a href="#">3 Days Ago</a>
            </b>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section>

    )
  }
}