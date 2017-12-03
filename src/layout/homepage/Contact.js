import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
        <div className="home_page__contact">
          <a href="" title="Send me an email"><i className="fa fa-envelope">Email</i></a>
          <a href="https://github.com/WoodStone" title="Check out my Github Account!"><i className="fa fa-github">Github</i></a>
          <i className="fa fa-linkedin">LinkedIn</i>
          <i className="fa fa-twitter">Twitter</i>
        </div>
    )
  }

}

export default Contact
