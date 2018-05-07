import React from 'react';
import { StyledContentWrapper } from './styles';

const ContentWrapper = ({ children }) => {
  return (
    <StyledContentWrapper>
      {
        children
      }
    </StyledContentWrapper>
  );
}

export default ContentWrapper;