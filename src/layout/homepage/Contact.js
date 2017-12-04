import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
        <div className="home_page__contact">
          <a href="mailto:vesteindahl@gmail.com" title="Send me an email"><i className="fa fa-envelope">Email</i></a>
          <a href="https://github.com/WoodStone" title="Check out my Github Account!"><i className="fa fa-github">Github</i></a>
          <a href="https://twitter.com/vesteindahl" title="My Twitter account"><i className="fa fa-twitter">Twitter</i></a>
          <a href="/" title="My LinkedIn profile"><i className="fa fa-linkedin">LinkedIn</i></a>
        </div>
    )
  }

}

export default Contact
