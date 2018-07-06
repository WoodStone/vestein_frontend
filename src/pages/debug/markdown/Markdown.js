import React, {Component} from 'react';
import MarkdownInput from "./MarkdownInput";
import MarkdownRenderer from "./MarkdownRenderer";
import {Button, Grid, Menu} from "semantic-ui-react";
import Scanner from "../../../core/markdown/scanner";
import Parser from "../../../core/markdown/parser";
import axios from "axios/index";
import {BLOG} from "../../../config";

class Markdown extends Component {

  constructor(props) {
    super(props);

    // this.scanner = new Scanner();
    this.parser = new Parser();

    this.state = {
      data: null,
      rawData: "",
      formatted: false,
      isTokens: true,
      isSyntax: false,
      isMarkdown: false
    };
  }

  changeOutput(v) {
    const o = {
      isTokens: false,
      isSyntax: false,
      isMarkdown: false
    };

    this.setState({
      ...o,
      [v]: true
    });

    this.processInput(this.state.rawData, {...o, [v]: true});
  }

  processInput(input, is) {
    const { isTokens, isSyntax, isMarkdown } = is;

    this.setState({data: this.format(input, isTokens, isSyntax, isMarkdown)})
  }

  changeFormat() {
    this.setState({
      formatted: !this.state.formatted
    })
  }

  format(input, isTokens, isSyntax, isMarkdown) {
    if (isTokens) {
      return Scanner.generateTokens(input);
    } else if (isSyntax) {
      return this.parser.generate(Scanner.generateTokens(input));
    } else if (isMarkdown) {
      return "potato";
    }
  }

  updateInput = (input) => {
    this.setState({rawData: input});
    this.processInput(input, this.state);
  };

  render() {
    const { rawData, formatted, isTokens, isSyntax, isMarkdown } = this.state;

    return (
        <Grid style={{flexGrow: 1, display: "flex", flexDirection: "column", flexWrap: "nowrap", margin: 0}}>
          <Menu secondary color={"yellow"} style={{marginBottom: 0}}>
            <Menu.Item>
              <Button.Group>
                <Button toggle primary active={isTokens} onClick={() => this.changeOutput("isTokens")}>Tokens</Button>
                <Button toggle primary active={isSyntax} onClick={() => this.changeOutput("isSyntax")}>Syntax</Button>
                <Button toggle primary active={isMarkdown} onClick={() => this.changeOutput("isMarkdown")}>Markdown</Button>
                <Button toggle primary active={formatted} disabled={isMarkdown} onClick={this.changeFormat.bind(this)}>Formatted</Button>
              </Button.Group>
            </Menu.Item>
            <Menu.Item>
              <ButtonPost url={BLOG} label={"Post"} data={{user: "vestein", header: "Random tittel", content: rawData}}/>
            </Menu.Item>
            <Menu.Item position={"right"}><Button color={"green"}>Save</Button></Menu.Item>
          </Menu>

          <Grid.Row columns={2} style={{flexGrow: 1, padding: 0}}>
            <Grid.Column stretched style={{padding: 0, margin: 0}}>
              <MarkdownInput update={this.updateInput}/>
            </Grid.Column>
            <Grid.Column style={{padding: 0, margin: 0, overflow: "auto"}}>
              <MarkdownRenderer md={this.state}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }

}

const ButtonPost = ({url, data, label}) => (
  <Button onClick={() => {
    axios.post(url, data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }}>{label}</Button>
);

export default Markdown
