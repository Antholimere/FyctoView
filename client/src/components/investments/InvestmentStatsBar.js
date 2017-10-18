import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import moment from 'moment'

class InvestmentStatsBar extends Component {

  calculateTotalInvestedDollars (investments) {
    let total = 0
    investments.map(i => {
      total += (i.units * i.dollarValue)
    })
    return total
  }

  kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
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

  calculateTotalInvestedTime (investments) {
    const earliest = new Date(Math.min.apply(null, investments.map(function(e) {
      return new Date(e.date);
    })));

    return moment(earliest).fromNow(true)
  }

  calculateTotalProfitPercent (investments) {
    let total = 0;

    investments.map(i => {
      const currentPriceOne = parseInt(this.getCurrentPrice(i.currency), 10)
      const currentPriceUnits = currentPriceOne * i.units
      const pastPriceUnits = i.units * parseInt(i.dollarValue, 10)
      const percentProfit = parseInt((currentPriceUnits / pastPriceUnits) * 100, 10) - 100
      total += percentProfit;
    })
    return total;
  }

  calculateTotalBalance (investments) {
    let total = 0;

    investments.map(i => {
      const currentPriceOne = parseInt(this.getCurrentPrice(i.currency), 10)
      const currentPriceUnits = currentPriceOne * i.units
      total += currentPriceUnits;
    })
    return total;
  }

  renderContent() {
    return(
      <Typography type="subheading" align="center" gutterBottom>
        <span> <i className="material-icons">account_balance_wallet</i> {this.kFormatter(this.calculateTotalInvestedDollars(this.props.investments))}$ </span>
        |
        <span style={{color: '#26A69A'}}> <i style={{ color: 'black' }} className="material-icons">swap_vert</i> +{this.calculateTotalProfitPercent(this.props.investments)}% </span>
        |
        <span style={{color: '#26A69A'}}> <i style={{ color: 'black' }} className="material-icons">account_balance</i> +{this.kFormatter(this.calculateTotalBalance(this.props.investments))}$ </span>
        |
        <span> <i className="material-icons">alarm</i> {this.calculateTotalInvestedTime(this.props.investments)}</span>
      </Typography>
    )
  }

  render() {
    return(
      <div>
        {(this.props.investments && this.props.crypto) && this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ investments, crypto }) {
  return { investments, crypto }
}

export default connect(mapStateToProps)(InvestmentStatsBar);
