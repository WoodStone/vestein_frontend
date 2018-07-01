import React, {Component} from 'react';
import {Divider, Grid, Header, Loader, Segment} from "semantic-ui-react";
import axios from "axios/index";
import {BLOG} from "../../config";

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    axios.get(BLOG)
      .then(response => {
        this.setState({posts: response.data});

        console.log(this.state);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { posts } = this.state;
    return (
        <Grid container centered columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Segment basic>
                <Header as={"h1"} style={{fontSize: "4em"}}>Blog</Header>
                <span>Loremium ipsium</span>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>

              {posts ? posts.map(p => (<BlogPost bp={p} key={p.header}/>)) : <Loader/>}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }

}

const BlogPost = ({bp}) => (
  <Segment basic>
    <Header as={"h2"}>{bp.header}</Header>
    <span>{bp.timestamp} by {bp.user}</span>
    <Divider hidden/>
    {bp.content}
  </Segment>
);

export default Blog
