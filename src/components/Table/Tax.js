import React, { Component } from "react";

class Tax extends Component {
  state = {
    tax: [
      {
        title: '011016',
        category: '1,9'      
      },
      {
        title: '016011',
        category: '2,9'  
      },
      {
        title: '011017',
        category: '1,7'  
      },
      {
        title: '017011',
        category: '2,7'  
      },
      {
        title: '011018',
        category: '0,9'  
      },
      {
        title: '018011',
        category: '1,9'  
      }
    ]
  }

  renderList = () =>
    this.state.tax.map((tax, index) => {
      //console.log(ddd);
      return <DDDItem key={index} tax={tax} />;
    });
  render() {
    return (
      <div className="Tax">{this.state.tax && this.renderList()}</div>
    );
  }
}

export default Tax;
