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
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                      Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                      aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
                      mollis pretium.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Escuela de la vida</h3>
                    <p className="info">
                      Conocimiento autodidacta <span>•</span>{" "}
                      <em className="date">Mayo 1998</em>
                    </p>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
                      velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                      auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                      Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                      Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                      ornare odio. Sed non mauris vitae erat
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
                      <em className="date">Enero 2020 - Presente</em>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                      Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                      aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
                      mollis pretium.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Experiencia Freelance</h3>
                    <p className="info">
                      Diseño y desarrollo <span>•</span>{" "}
                      <em className="date">Enero 2020 - Presente</em>
                    </p>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
                      velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                      auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                      Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                      Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                      ornare odio. Sed non mauris vitae erat
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
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