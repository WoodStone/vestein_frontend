import React, {Component} from 'react';
import {BLOG, BLOGPOST, GET_CHECK, GET_LOGOUT, POST_LOGIN} from "../../config";
import {Button, Header, Segment} from "semantic-ui-react";
import axios from "axios/index";

class Debug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      response: null,
      responseColor: "grey"
    }
  }
  render() {
    const { responseColor, url, response } = this.state;
    return (
        <div>
          <Header as={"h1"}>Debug Page for debugging api requests</Header>
          <ButtonPost that={this} url={POST_LOGIN} label={"Login"} data={{user: "vestein", pass: "123"}}/>
          <ButtonGet that={this} url={GET_CHECK} label={"Test Auth"}/>
          <ButtonGet that={this} url={GET_LOGOUT} label={"Logout"}/>

          <ButtonGet that={this} url={BLOG} label={"get posts"}/>
          <ButtonPost that={this} url={BLOG} label={"Add post"} data={{user: "potato", header: "hei", content: "ewfawefawefawefawofpkawpk"}}/>

          <Segment.Group size={"huge"} style={{width: "40%"}}>
            <Segment color={"blue"} attached>{url}</Segment>

            <Segment color={responseColor}attached>{response}</Segment>
          </Segment.Group>
        </div>
    )
  }
}

const ButtonGet = ({that, url, label}) => (
    <Button onClick={() => {
      that.setState({url: url, response: "Waiting...", responseColor: "orange"});
      axios.get(url)
          .then(response => {
            that.setState({response: JSON.stringify(response.data), responseColor: "green"})
          })
          .catch(error => {
            that.setState({response: error.response.data, responseColor: "red"})
          })
    }}>{label}</Button>
);

const ButtonPost = ({that, url, data, label}) => (
    <Button onClick={() => {
      that.setState({url: url, response: "Waiting...", responseColor: "orange"});
      axios.post(url, data)
          .then(response => {
            that.setState({response: JSON.stringify(response.data), responseColor: "green"})
          })
          .catch(error => {
            that.setState({response: error.response.data, responseColor: "red"})
          })
    }}>{label}</Button>
);


export default Debug
