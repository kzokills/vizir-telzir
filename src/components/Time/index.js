import React, { Component } from 'react';

class Time extends Component {
  render() {
    console.log(this.props);
    return (
      <input className="DDDItem" type = "number" min="1" />
        
    );
  }
}

export default Time;