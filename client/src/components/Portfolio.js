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
      <br/>
      <InvestmentList />
    </div>
  )
}

export default Portfolio;
