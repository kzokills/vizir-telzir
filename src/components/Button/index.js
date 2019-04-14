import React, { Component } from "react";
import MuiButton from '@material-ui/core/Button';

const styles = {
  margin: "auto"
  
}


class Button extends Component {
  render() {
      return (
        <MuiButton style={styles} variant="contained" color="primary"  onClick={this.props.onSubmit}>
          Calcular Oferta
        </MuiButton>
    );
  }
}

export default Button;