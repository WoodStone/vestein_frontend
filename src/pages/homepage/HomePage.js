import React, {Component} from 'react';
import './HomePage.css'
import About from "./About";
import Card from "./Card";
import Contact from "./Contact";
import Navbar from "./Navbar";

class HomePage extends Component {

  render() {
    return (
        <div className="vd_container_sub">
          <div className="home_page">
            <Card/>
            <hr/>
            <Navbar/>
            <hr/>
            <About/>
            <Contact/>
          </div>
        </div>
    )
  }

}

export default HomePage
