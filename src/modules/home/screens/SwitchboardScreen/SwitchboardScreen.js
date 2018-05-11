import React from 'react';
import styled from 'styled-components';

import SwitchboardCard from './SwitchboardCard';

const StyledSwitchboardScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledSwitchboardMessage = styled.div`
  height: 250px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinksSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchboardScreen = ({ message, links }) => {
  const renderLinks = links => {
    return links.map(link =>
      <SwitchboardCard key={`switchboard${link.to}`} {...link} />
    );
  }

  return (
    <StyledSwitchboardScreenContainer>
      <StyledSwitchboardMessage>{message}</StyledSwitchboardMessage>
      <StyledLinksSection>
        {
          renderLinks(links)
        }
      </StyledLinksSection>
    </StyledSwitchboardScreenContainer>
  );
}

export default SwitchboardScreen;