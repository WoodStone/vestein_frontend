import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import './core/flex_layout.css';
import store from './redux/store';

import Blog from "./pages/blog/Blog";
import Card from "./pages/homepage/Card";
import HomePage from "./pages/homepage/HomePage";
import Projects from "./pages/projects/Projects";
import Admin from "./pages/debug/Admin";

class App extends Component {
  render() {
    return (

        <Provider store={store} style={{minHeight: "100%"}}>
          <Router>
            <div className="vd_container_main">
              <Route exact path="/" component={HomePage}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/about" component={Card}/>
              <Route path="/admin" component={Admin}/>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
