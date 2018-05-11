import React from 'react';
import styled from 'styled-components';

const StyledDashboardSection = styled.div`
`;

const StyledDashboardSectionTitle = styled.span`
`;

const StyledDashboardSectionContent = styled.div`
`;

const DashboardSection = ({ title, children }) => {
  return (
    <StyledDashboardSection>
      <StyledDashboardSectionTitle>{title}</StyledDashboardSectionTitle>
      <StyledDashboardSectionContent>
        {
          children
        }
      </StyledDashboardSectionContent>
    </StyledDashboardSection>
  );
}

export default DashboardSection;