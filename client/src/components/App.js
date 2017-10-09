import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';
import Header from './Header';

const Landing   = () => <h2>Landing</h2>
const Portfolio   = () => <h2>Portfolio</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="content">
              <Route exact path="/" component={Landing} />
              <Route path="/portfolio" component={Portfolio} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
