import React from 'react';
import InvestmentList from './investments/InvestmentList';
import InvestmentStatsBar from './investments/InvestmentStatsBar';

const Portfolio = () => {
  return(
    <div>
      <InvestmentStatsBar />
      <h4>Portfolio</h4>
      <InvestmentList />
    </div>
  )
}

export default Portfolio;
