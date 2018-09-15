import React from 'react';
import Button from '@material-ui/core/Button';
import Seeder from './Seeder';

class SeederComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
  }

  seedOwner() {
    const seeder = new Seeder();
    seeder.seedOwners();
  }

  seedFarm() {
    const seeder = new Seeder();
    seeder.seedFarms();
  }

  render() {
    return (
      <div>
        <Button onClick={this.seedOwner}>Seed Owner</Button><br />
        <Button onClick={this.seedFarm}>Seed Farm</Button><br />
      </div>
    );
  }
}

export default SeederComponent;