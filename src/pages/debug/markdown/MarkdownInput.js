import React, {Component} from 'react';
import {Form, TextArea} from "semantic-ui-react";

class MarkdownInput extends Component {

  render() {
    const { update } = this.props;
    return (
        <TextInputArea update={update}/>
    )
  }

}

const TextInputArea = ({update}) => (
  <Form className="vd_container_main">
    <TextArea style={{flexGrow: 1, borderRadius: 0}} onChange={(e, {value}) => {
      update(value);
    }}/>
  </Form>
);

export default MarkdownInput
