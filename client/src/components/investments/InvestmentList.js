import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInvestments } from '../../actions';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import '../App.css';
import jsPDF from 'jspdf'
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

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
        <Grid item xl={3} md={4} lg={3} xs={12} key={investment._id}>
          <Card>
            <CardContent>
              <div id="wrapper">
                <Typography type="headline" component="h2" id="first-div">
                  <div style={{ marginBottom: -10 }}>{this.getSymbol(investment.currency)}</div>
                </Typography>
                <Typography type="subheading" align="right" id="third-div" style={{color: '#26A69A'}}>
                    <i className="material-icons">trending_up</i>
                    +{this.calculateProfitPercentage(investment.units, investment.dollarValue, this.getCurrentPrice(investment.currency))}%

                    {" +" + this.calculateProfitDollars(investment.units, this.getCurrentPrice(investment.currency), investment.dollarValue)}$
                </Typography>
              </div>
              <div>
                <Typography type="body1">
                  {investment.units} {investment.currency}(s)
                </Typography>
                <Typography style={{ marginBottom: -10 }} type="body1">
                  {this.kFormatter(investment.dollarValue * investment.units)}$
                </Typography>
                <Typography type="headline" align="right">
                  <div style={{ paddingTop: 10 }}><i className="material-icons">account_balance</i>{this.kFormatter(this.getCurrentPrice((investment.currency), investment.dollarValue) * investment.units)}$</div>
                </Typography>
              </div>
              <Typography style={{ marginBottom: -18 }} type="body1">
                {new Date(investment.date).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    })
  }

  savePDF() {
    var doc = new jsPDF()

    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }

  render() {
    return (
      <div>
        <Grid container>
          {this.props.crypto && this.renderInvestments()}
          <div className="btn_download">
            <Button onClick={() => { this.savePDF() }} fab aria-label="edit">
              <i class="material-icons">file_download</i>
            </Button>
          </div>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ investments, crypto }) {
  return { investments, crypto }
}

export default connect(mapStateToProps, { fetchInvestments })(InvestmentList);
