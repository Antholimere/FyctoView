import React from 'react';
import InvestmentList from './investments/InvestmentList';
import InvestmentStatsBar from './investments/InvestmentStatsBar';
import InvestmentForm from './investments/InvestmentForm';

const Portfolio = () => {
  return(
    <div>
    <br/>
      <InvestmentStatsBar />
      <InvestmentForm />
      <h4>Portfolio</h4>
      <InvestmentList />
    </div>
  )
}

export default Portfolio;
