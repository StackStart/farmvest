import React from 'react';

import CheckFarm from './checkFarm';
import InvestModal from './investModal';
import UnionBank from '../../../unionbank/Unionbank';

const unionBank = new UnionBank();

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
      handleInvest={async () => {
        window.localStorage.setItem('action', 'invest');
        window.localStorage.setItem('amount', amount);
        window.localStorage.setItem('recipient', '108265487572');
        await unionBank.login('transfers');
      }}
    />
  </React.Fragment>
);

export default investmentView;