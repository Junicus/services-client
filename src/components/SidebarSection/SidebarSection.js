import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  StyledSidebarSection,
  StyledSidebarSectionTitle
} from './styles';

const SidebarSection = ({ title, links, children }) => {
  const renderLinks = () => {
    if (links && links.length) {
      return links.map(link =>
        <NavItem key={link.to}>
          <Link to={link.to}>{link.title}</Link>
        </NavItem>
      );
    } else {
      return null;
    }
  }

  return (
    <StyledSidebarSection>
      <StyledSidebarSectionTitle>{title}</StyledSidebarSectionTitle>
      <Nav vertical>
        {
          renderLinks()
        }
        {
          children
        }
      </Nav>
    </StyledSidebarSection>
  );
}

export default SidebarSection;