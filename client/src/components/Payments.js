import React, { Component } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

const PaymentButton = styled.button`
  color: "#FFF";
  background: "#FF0266";
  padding: 5px;
`;

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="SurveyBox"
        description="$5 For 5 Email Credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <PaymentButton>Add Credits</PaymentButton>
      </StripeCheckout>
    );
  }
}
export default connect(null, { handleToken })(Payments);
