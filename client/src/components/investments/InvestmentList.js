import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInvestments } from '../../actions';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import '../App.css';

class InvestmentList extends Component {
  componentDidMount() {
    this.props.fetchInvestments();
  }

  getSymbol(currency) {
    return this.props.crypto.map((c) => {
      if (c.id === currency) {
        return(
          c.symbol
        )
      }
    })
  }

  getCurrentPrice(currency) {
    const price = this.props.crypto.filter((c) => {
      if (c.id === currency) {
        return(
          c
        )
      }
    })
    return price[0].price_usd
  }

  kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
  }

  calculateProfitDollars(units, currentPrice, pastPrice) {
    const purchasePrice = units * parseInt(pastPrice, 10)
    const priceNow = units * parseInt(currentPrice, 10)
    const result = priceNow - purchasePrice
    return this.kFormatter(result)
  }

  calculateProfitPercentage(units, dollarValue, currentPrice) {
    const currentDollars = (parseInt(units, 10) * parseInt(currentPrice, 10))
    const pastWorth = units * dollarValue
    return parseInt((currentDollars / pastWorth) * 100, 10) - 100
  }

  renderInvestments() {
    return this.props.investments.map(investment => {
      return (
        <Grid item xs={4} key={investment._id}>
          <Card>
            <CardContent>
              <div id="wrapper">
                <Typography type="headline" component="h2" id="first-div">
                  <div style={{ marginBottom: -10 }}>{this.getSymbol(investment.currency)}<small>(x{investment.units})</small></div>
                </Typography>
                <Typography type="subheading" align="right" id="third-div">
                  <div>
                    profits: +{this.calculateProfitPercentage(investment.units, investment.dollarValue, this.getCurrentPrice(investment.currency))}%
                    |
                    {" +" + this.calculateProfitDollars(investment.units, this.getCurrentPrice(investment.currency), investment.dollarValue)}$
                  </div>
                </Typography>
              </div>
              <div>
                <Typography type="subheading" align="center" id="third-div">
                  <div style={{ paddingTop: 10 }}>{this.kFormatter(investment.dollarValue * investment.units)}$  =>
                  {this.kFormatter(this.getCurrentPrice((investment.currency), investment.dollarValue) * investment.units)}$</div>
                </Typography>
              </div>
              <Typography style={{ paddingTop: 24, marginBottom: -18 }} type="body1">
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
          {this.props.crypto && this.renderInvestments()}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ investments, crypto }) {
  return { investments, crypto }
}

export default connect(mapStateToProps, { fetchInvestments })(InvestmentList);
