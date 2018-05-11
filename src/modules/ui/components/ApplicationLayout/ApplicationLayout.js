import React from 'react';
import styled from 'styled-components';

const StyledApplicationLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const ApplicationLayout = ({ children }) => {
  return (
    <StyledApplicationLayout>
      {
        children
      }
    </StyledApplicationLayout>
  )
}

export default ApplicationLayout;