import React, { Component } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { getPrices } from "../../components/Table/getPrices";
import Header from "../../components/Header";
import InfoText from "../../components/InfoText";
import Footer from "../../components/Footer";



class Home extends Component {
  state = {
    origin: "011",
    destination: "011",
    plan: "FaleMais30",
    time: 20,
    withPlan: null,
    withoutPlan: null
  };

  setOrigin = e => this.setState({ origin: e.target.value });
  setDestination = e => this.setState({ destination: e.target.value });
  setPlan = e => this.setState({ plan: e.target.value });
  setTime = e => this.setState({ time: e.target.value });

  onSubmit = () => {
    const { origin, destination, plan, time } = this.state;

    const response = getPrices(origin, destination, plan, time);

    this.setState({
      withPlan: response.withPlan,
      withoutPlan: response.withoutPlan
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center'}} >
        <Header />

        <InfoText />

        <Table
          setOrigin={this.setOrigin}
          setDestination={this.setDestination}
          setPlan={this.setPlan}
          setTime={this.setTime}
          withPlan={this.state.withPlan}
          withoutPlan={this.state.withoutPlan}
        />
        <Button color="primary" onSubmit={this.onSubmit} />

        <Footer />
      </div>
    );
  }
}

export default Home;
