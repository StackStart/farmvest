import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
  }


  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default Homepage;
