import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Payments from "./Payments";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #66bb6a;
  color: #fff;
`;

const ListElem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0 15px;
  margin: 5px;
  a {
    text-decoration: none;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <ListElem>
            <a href="/auth/google"> Login</a>
          </ListElem>
        );

      default:
        return [
          <ListElem key="1">
            <Payments />
          </ListElem>,
          <ListElem key="3">Credits : {this.props.auth.credits}</ListElem>,
          <ListElem key="2">
            <a href="/api/logout">Logout</a>
          </ListElem>,
        ];
    }
  }

  render() {
    return (
      <Navbar>
        <Link to={this.props.auth ? "/surveys" : "/"}>SurveyBox</Link>
        <List>{this.renderContent()}</List>
      </Navbar>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
