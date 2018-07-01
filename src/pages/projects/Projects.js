import React, {Component} from 'react';
import axios from "axios/index";
import {PROJECTS} from "../../config";
import Project from "./Project";

class Projects extends Component {

  componentDidMount() {
    this.getProjects()
  }

  constructor(props) {
    super(props);

    this.state = {
      projects: null
    }
  }

  getProjects() {
    axios.get(PROJECTS)
      .then(response => {
        this.setState({projects: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const {projects} = this.state;

    if (projects != null) {
      return (
        <div>
          {projects.map(p => <Project key={p.header} header={p.header} meta={"Scala"} description={p.description} glink={p.glink} imagelink={p.imagelink}/>)}
        </div>
      )
    } else {
      return (
        <div>Waiting...</div>
      )
    }
  }

}

export default Projects
