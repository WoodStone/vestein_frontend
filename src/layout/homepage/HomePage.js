import React, {Component} from 'react';
import './HomePage.css'
import Contact from "./Contact";
import Card from "./Card";
import Navbar from "./Navbar";
import About from "./About";

class HomePage extends Component {

  render() {
    return (
        <div className="home_page">
          <Card/>
          <hr/>
          <Navbar/>
          <hr/>
          <About/>
          <Contact/>
        </div>
    )
  }

}

export default HomePage
