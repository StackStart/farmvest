import React from 'react';

import CheckFarm from './checkFarm';
import InvestModal from './investModal';

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
  </React.Fragment>
);

export default investmentView;