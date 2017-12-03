import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
        <div className="home_page__navbar">
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/projects">Projects</a>
        </div>
    )
  }

}

export default Navbar
