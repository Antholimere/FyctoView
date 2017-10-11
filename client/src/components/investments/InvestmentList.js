import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInvestments } from '../../actions';

class InvestmentList extends Component {
  componentDidMount() {
    this.props.fetchInvestments();
  }

  renderInvestments() {
    return this.props.investments.reverse().map(investment => {
      return (
        <div key={investment._id}>
          <h4>doc:</h4>
          <p>{ investment.date }</p>
          <p>{ investment.units }</p>
          <p>{ investment.currency }</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        investment List
        {this.renderInvestments()}
      </div>
    )
  }
}

function mapStateToProps({ investments }) {
  return { investments }
}

export default connect(mapStateToProps, { fetchInvestments })(InvestmentList);
