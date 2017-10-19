import React from 'react';
import InvestmentList from './portfolio/InvestmentList';
import InvestmentStatsBar from './portfolio/InvestmentStatsBar';
import InvestmentForm from './portfolio/InvestmentForm';

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
