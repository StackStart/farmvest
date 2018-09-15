import React from 'react';
import { inject, observer } from 'mobx-react';

class Homepage extends React.Component {

  render() {
    const { uiStore } = this.props;
    return (
      <div>
        {uiStore.message}
      </div>
    );
  }
}

export default inject('uiStore')(observer(Homepage));
