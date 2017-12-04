import React, { Component } from 'react';
import './App.css';
import Page from "./layout/Page";
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from "./layout/homepage/Card";

class App extends Component {
  render() {
    return (

        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Page}/>
              <Route path="/projects" component={Card}/>
              <Route path="/blog" component={Card}/>
              <Route path="/about" component={Card}/>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
