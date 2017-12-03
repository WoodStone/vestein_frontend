import React, {Component} from 'react';

class NavItem extends Component {

  render() {
    const { link, value } = this.props;
    return (
        <a href={link}><h2>{value}</h2></a>
    )
  }

}

export default NavItem
