import React from 'react';
import Farm from '../dumb/farmView/farmView';
import Users from '../database/users';

class FarmView extends React.Component {
  constructor(props) {
    super(props);
    this.rows = [
      this.createData(this.getFullName(Users[0]), 159, 6.0),
      this.createData(this.getFullName(Users[1]), 237, 9.0),
      this.createData(this.getFullName(Users[2]), 262, 16.0),
      this.createData(this.getFullName(Users[3]), 305, 3.7),
      this.createData(this.getFullName(Users[4]), 356, 16.0),
      this.createData(this.getFullName(Users[5]), 159, 6.0),
      this.createData(this.getFullName(Users[6]), 237, 9.0),
    ];

    this.expenseRows = [
      this.createData('Fertilizer', 159, 6.0),
      this.createData('Cultivation', 237, 9.0),
      this.createData('Seeds', 262, 16.0),
      this.createData('Caretaker Salary', 305, 3.7),
    ];
  }

  getFullName(user) {
    return `${user.firstName} ${user.middleName} ${user.lastName}`;
  }
  
  createData(name, amount, percentage) {
    return { name, amount, percentage };
  }

  getData() {
    return this.rows;
  }

  render() {
    return (
      <Farm rows={this.getData()} expenseRows={this.expenseRows} />
    );
  }
}

export default FarmView;