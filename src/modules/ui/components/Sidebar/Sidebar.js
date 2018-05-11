import React from 'react';
import styled from 'styled-components';

const StyledSidebarContainer = styled.div`
  width: 200px;
  background: lightblue;
  padding: 5px;
`;

const SidebarContainer = ({ children }) => {
  return (
    <StyledSidebarContainer>
      {children}
    </StyledSidebarContainer>
  );
}

export default SidebarContainer;