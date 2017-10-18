import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';
import Header from './Header';
import InvestmentForm from './investments/InvestmentForm';
import Portfolio from './Portfolio';
import Landing from './Landing';

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
              <Route path="/investments/new" component={InvestmentForm} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
