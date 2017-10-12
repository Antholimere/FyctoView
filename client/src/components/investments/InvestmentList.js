import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInvestments } from '../../actions';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import '../App.css';

import axios from 'axios';

class InvestmentList extends Component {
  componentDidMount() {
    this.props.fetchInvestments();
  }

  renderInvestments() {
    return this.props.investments.reverse().map(investment => {
      return (
        <Grid item xs={4} key={investment._id}>
          <Card>
            <CardContent>
            <div id="wrapper">
              <Typography type="headline" component="h2" id="first-div">
                <div>BTC</div>
                <div>${investment.dollarValue}</div>
              </Typography>
              <Typography type="subheading" align="right" id="third-div">
                <div>BTC {investment.units * 12,34}$</div>
                <div>BTC {investment.units * 12,34}$</div>
                <div>BTC {investment.units * 12,34}$</div>
              </Typography>
            </div>
              <Typography type="body1">
                <small>{investment.units} {investment.currency}s</small>
              </Typography>
              <Typography type="body1">
                {new Date(investment.date).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    })
  }

  render() {
    return (
      <div>
        <Grid container>
          {this.renderInvestments()}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ investments }) {
  return { investments }
}

export default connect(mapStateToProps, { fetchInvestments })(InvestmentList);
