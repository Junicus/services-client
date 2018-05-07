import React from 'react';
import { StyledSection, StyledSectionTitle } from './styles';

const DashboardSection = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {
        children
      }
    </StyledSection>
  );
}

export default DashboardSection;