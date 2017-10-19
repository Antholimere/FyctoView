import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import './App.css';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Landing from './pages/Landing';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchCryptos();
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
