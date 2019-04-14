import React, { Component } from "react";
import PlanItem from "./PlanItem";

class Plans extends Component {
  state = {
    plans: [
      {
        title: 'FaleMais 30',
        category: 'form 30'
      },
      {
        title: 'FaleMais 60',
        category: 'form 60'
      },
      {
        title: 'FaleMais 120',
        category: 'form 120'
      },
    ]
  }

  renderList = () =>
    this.state.plans.map((plans, index) => {
      //console.log(plans);
      return <PlanItem key={index} plans={plans} />;
    });
  render() {
    return (
      <div className="Plans">{this.state.plans && this.renderList()}</div>
    );
  }
}

export default Plans;
