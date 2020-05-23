import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Payments from "./Payments";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #fff;
  border-bottom: 1px solid #333;
`;

const ListElem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0 15px;
  margin: 5px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <ListElem>
            <button class="ui google plus button">
              <i class="google plus icon"></i>
              <a href="/auth/google"> Login</a>
            </button>
          </ListElem>
        );

      default:
        return [
          <ListElem key="1">
            <Payments />
          </ListElem>,
          <ListElem key="3">
            <div class="ui labeled button" tabindex="0">
              <div class="ui green button">
                <i class="envelope icon"></i> Credits
              </div>
              <a href="/" class="ui basic green left pointing label">
                {this.props.auth.credits}
              </a>
            </div>
          </ListElem>,
          <ListElem key="2">
            <button class="ui primary button">
              <a href="/api/logout">Logout</a>
            </button>
          </ListElem>,
        ];
    }
  }

  render() {
    return (
      <Navbar>
        <CustomLink to={this.props.auth ? "/surveys" : "/"}>
          <h2>SurveyBox</h2>
        </CustomLink>
        <List>{this.renderContent()}</List>
      </Navbar>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
