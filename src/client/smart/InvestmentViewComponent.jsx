import React from 'react';

import InvestmentView from '../dumb/Investment/investmentView';

class InvestmentViewComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InvestmentView />
    );
  }
}

export default InvestmentViewComponent;