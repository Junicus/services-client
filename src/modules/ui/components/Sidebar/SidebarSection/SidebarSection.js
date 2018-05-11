import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const StyledSidebarSectionContainer = styled.div`
`;

const StyledSidebarSectionTitle = styled.div`
`;

const SidebarSection = ({ children, title, links }) => {
  const renderLinks = links => {
    if (links && links.length) {
      return links.map(link =>
        <NavItem key={link.to}>
          <Link to={link.to}>{link.title}</Link>
        </NavItem>
      );
    }
  }

  return (
    <StyledSidebarSectionContainer>
      <StyledSidebarSectionTitle>{title}</StyledSidebarSectionTitle>
      <Nav vertical>
        {renderLinks(links)}
        {children}
      </Nav>
    </StyledSidebarSectionContainer>
  );
}

export default SidebarSection;