import React, { Component } from 'react'
export default class header extends Component {
  render() {
    return (
        <footer>
  <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/antonio.chagoya.1/">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AntonioRChagoya">
            <i className="fa fa-twitter" />
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="fa fa-google-plus" />
          </a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/antonio-rodriguez-5212481a7/">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/antoniolmlchagoya/">
            <i className="fa fa-instagram" />
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
        </li> */}
        {/* <li>
          <a href="#">
            <i className="fa fa-skype" />
          </a>
        </li> */}
      </ul>
      <ul className="copyright">
        <li>© Copyright 2014 CeeVee</li>
        <li>
          Design by{" "}
          <a title="Styleshout" href="#home">
            Antonio Chagoya
          </a>
        </li>
      </ul>
    </div>
    <div id="go-top">
      <a className="smoothscroll" title="Back to Top" href="#home">
        <i className="icon-up-open" />
      </a>
    </div>
  </div>
</footer>
    )
  }
}