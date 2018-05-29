import React, {Component} from 'react';

class MarkdownRenderer extends Component {

  constructor(props) {
    super(props)
  }

  constructMD(md) {
    let list = md.split("\n");

  }

  render() {
    const {md} = this.props;
    return (
        <div>
          <h1>TODO: mardown parsing</h1>

        </div>
    )
  }

}

export default MarkdownRenderer
