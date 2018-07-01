import React, {Component} from 'react';

class MarkdownRenderer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {md} = this.props;
    // console.log(md);

    return md.isMarkdown ?
      <Markdown1 {...md}/>
      :
      <NotMarkdown {...md}/>
  }

}

const NotMarkdown = (o) => (
  o.formatted ?
    <pre>{JSON.stringify(o.data, null, 2)}</pre>
    :
    <div>{JSON.stringify(o.data)}</div>
);

const Markdown1 = (o) => (
  <div>{o.data}</div>
);

export default MarkdownRenderer
