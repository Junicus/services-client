import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSwitchboardCard = styled.div`
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const StyledSwitchboardCardLink = styled(Link) `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSwitchboardCardIcon = styled.div`
  height: 64px;
  width: 64px;
  border: 1px solid black;
`;

const StyledSwitchboardTitle = styled.span`
  text-align: center;
`;

const SwitchboardCard = ({ to, title }) => {
  return (
    <StyledSwitchboardCard>
      <StyledSwitchboardCardLink to={to}>
        <StyledSwitchboardCardIcon />
        <StyledSwitchboardTitle>{title}</StyledSwitchboardTitle>
      </StyledSwitchboardCardLink>
    </StyledSwitchboardCard>
  );
}

export default SwitchboardCard;