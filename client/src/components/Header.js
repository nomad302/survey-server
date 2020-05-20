import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  a {
    text-decoration: none;
  }
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
        return (
          <ListElem>
            <a href="/api/logout">Logout</a>
          </ListElem>
        );
    }
  }

  render() {
    return (
      <Navbar>
        <Link to={this.props.auth ? "/surveys" : "/"}>SurveyBox</Link>
        <ul>{this.renderContent()}</ul>
      </Navbar>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
