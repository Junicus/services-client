import React from 'react';
import styled from 'styled-components';
import SummariesSection from './SummariesSection';
import AveragesSection from './AveragesSection';
import OptionsSection from './OptionsSection/OptionsSection';

const SpeedOfServiceDashboardScreen = () => {
  return (
    <React.Fragment>
      <OptionsSection />
      <SummariesSection />
      <AveragesSection />
    </React.Fragment>
  );
}

export default SpeedOfServiceDashboardScreen;