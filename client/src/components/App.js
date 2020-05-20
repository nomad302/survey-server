import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import styled from "styled-components";
import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Landing from "./Landing";

const AppLayout = styled.div`
  margin: 10px 20px;
  font-family: Helvetica, Arial, sans-serif;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <AppLayout>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </AppLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
