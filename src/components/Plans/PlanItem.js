import React, { Component } from 'react';

class PlanItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="PlanItem">
        {this.props.plans.title}; {this.props.plans.category}
      </li>
    );
  }
}

export default PlanItem;