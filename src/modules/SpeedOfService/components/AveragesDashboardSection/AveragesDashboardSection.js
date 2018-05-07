import React from 'react';
import DashboardSection from '../DashboardSection/DashboardSection';
import AveragesTable from './AveragesTable';

const AveragesDashboardSection = ({ averages }) => {
  return (
    <DashboardSection title='Averages'>
      <AveragesTable {...averages} />
    </DashboardSection>
  );
}

export default AveragesDashboardSection;