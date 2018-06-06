import React, {Component} from 'react';
import { nextToken } from './scanner';

class MarkdownRenderer extends Component {

  constructor(props) {
    super(props)
  }

  constructMD(md) {
    let list = md.split("\n");

  }

  render() {
    const {md} = this.props;
    //let result = nextToken(md, 0);
    return (
        <pre>
         {md}
        </pre>
    )
  }

}

const symbolTable = {
  "#": "#",
  "\n": "NEWLINE",
};

export default MarkdownRenderer
