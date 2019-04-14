import React, { Component } from "react";

const styles = {
  margin: "auto"
}

class Table extends Component {

  getPlanOptions = () =>
    ["FaleMais30", "FaleMais60", "FaleMais120"].map(plan => (
      <option key={plan} value={plan}>
        {plan}
      </option>
    ));

  getDDDOptions = () =>
    ["011", "016", "017", "018"].map(ddd => (
      <option key={ddd} value={ddd}>
        {ddd}
      </option>
    ));

  render() {
    return (
      <table style={styles}>
        <thead>
          <tr>
            <th>DDD Origem</th>
            <th>DDD Destino</th>
            <th>Plano FaleMais</th>
            <th>Tempo em minutos</th>
            <th>Valor sem FaleMais</th>
            <th>Valor com FaleMais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select name="origin" onChange={this.props.setOrigin}>
                {this.getDDDOptions()}
              </select>
            </td>
            <td>
              <select name="destination" onChange={this.props.setDestination}>
                {this.getDDDOptions()}
              </select>
            </td>
            <td>
              <select name="plan" onChange={this.props.setPlan}>
                {this.getPlanOptions()}
              </select>
            </td>
            <td>
              <input type="number"  min="1"  onChange={this.props.setTime} onKeyDown={(e) => e.keyCode === 189 && e.preventDefault()} />
            </td>
            <td>{this.props.withoutPlan}</td>
            <td>{this.props.withPlan}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
