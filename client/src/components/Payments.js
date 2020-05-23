import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

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
        <button class="ui primary button">Pay with Card</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, { handleToken })(Payments);
