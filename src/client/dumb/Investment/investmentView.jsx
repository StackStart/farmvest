import React from 'react';

import CheckFarm from './checkFarm';
import InvestModal from './investModal';
import InvestmentData from './investmentData';

const investmentView = ({ open, handleClickOpen, handleClose, handleChange, amount}) => (
  <React.Fragment>
    <CheckFarm 
      handleClickOpen={handleClickOpen}
    />
    <InvestModal
      open={open}
      handleClose={handleClose}
      handleChange={handleChange}
      amount={amount}
    />
    <br/>
    <br/>
    <InvestmentData />
  </React.Fragment>
);

export default investmentView;