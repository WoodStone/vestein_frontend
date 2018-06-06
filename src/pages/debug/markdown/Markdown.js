import React, {Component} from 'react';
import MarkdownInput from "./MarkdownInput";
import MarkdownRenderer from "./MarkdownRenderer";
import { Grid } from "semantic-ui-react";
import {nextToken, tokens} from "./scanner";

class Markdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: null
    }
  }

  updateInput = (input) => {
    let result = tokens(input);
    this.setState({input: JSON.stringify(result, null, 2)});
    //this.setState({input: JSON.stringify(result)});
    //this.setState({input: JSON.stringify(result[0])});
  };

  render() {
    const { input } = this.state;
    return (
        <Grid divided={"vertically"} style={{flexGrow: 1, margin: 0}}>
          <Grid.Row columns={2} style={{padding: 0}}>
            <Grid.Column stretched style={{padding: 0, margin: 0}}>
              <MarkdownInput update={this.updateInput}/>
            </Grid.Column>
            <Grid.Column style={{padding: 0, margin: 0, overflow: "auto"}}>
              <MarkdownRenderer md={input}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }

}

export default Markdown
