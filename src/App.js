import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contact';
import Footer from './components/footer/footer';
import HubspotForm from 'react-hubspot-form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
        {/* <HubspotForm 
        portalId='8274838'
        formId='ef87ada1-440f-401c-8ba1-a869dedda1c7'
        /> */}
      </div>
    );
  }
}
export default App;