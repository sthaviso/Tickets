/**
 * Created by sthavisomboon on 7/3/17.
 */
import React from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
export default class Menu extends React.Component
{
  render()
  {
    return(
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem><Glyphicon glyph="home"/> Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/user-setting">
          <NavItem>
            <Glyphicon glyph="user"/> User
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
