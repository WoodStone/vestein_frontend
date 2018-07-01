import React, {Component} from 'react';
import {Card, Icon, Image} from "semantic-ui-react";

class Project extends Component {

  render() {
    const { header, meta, description, glink, imagelink } = this.props;
    return (
        <Card>
          <Image src={imagelink}/>
          <Card.Content>
            <Card.Header>{header}</Card.Header>
            <Card.Meta>{meta}</Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={glink}><Icon size={"large"} name="github"/></a>
          </Card.Content>
        </Card>
    )
  }

}

export default Project
