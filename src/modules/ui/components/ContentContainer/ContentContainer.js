import React from 'react';
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  width: calc(100vw - 200px);
  padding: 5px;
`;

const ContentContainer = ({ children }) => {
  return (
    <StyledContentContainer>{children}</StyledContentContainer>
  );
}

export default ContentContainer;