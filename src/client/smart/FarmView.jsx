import React from 'react';

import Farm from '../dumb/farmView/farmView';

class FarmView extends React.Component {
  constructor(props) {
    super(props);

    this.rows = [
      this.createData('Frozen yoghurt', 159, 6.0),
      this.createData('Ice cream sandwich', 237, 9.0),
      this.createData('Eclair', 262, 16.0),
      this.createData('Cupcake', 305, 3.7),
      this.createData('Gingerbread', 356, 16.0),
      this.createData('Frozen yoghurt', 159, 6.0),
      this.createData('Ice cream sandwich', 237, 9.0),
      this.createData('Eclair', 262, 16.0),
      this.createData('Cupcake', 305, 3.7),
      this.createData('Gingerbread', 356, 16.0),
    ];
  }
  createData(name, amount, percentage) {
    return { name, amount, percentage };
  }

  getData() {
    return this.rows;
  }

  render() {
    return (
      <Farm rows={this.getData()}/>
    );
  }
}

export default FarmView;