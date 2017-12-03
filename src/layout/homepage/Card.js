import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
        <div className="home_page__profile_card">
          <div className="profile_card debug">
            <div className="profile_card__portrait debug">
              <img id="portrait" src="portrait.jpg" alt="Vestein Dahl"/>
            </div>
            <div className="profile_card__info debug">
              <h1>Vestein Dahl</h1>
              <h2>Developer</h2>
            </div>
          </div>
        </div>
    )
  }

}

export default Card
