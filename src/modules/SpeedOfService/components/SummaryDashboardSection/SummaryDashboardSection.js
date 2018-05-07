import React from 'react';
import DashboardSection from '../DashboardSection/DashboardSection';
import SummariesTable from './SummariesTable';

const SummaryDashboardSection = ({ summaries }) => {
  return (
    <DashboardSection title='Summaries'>
      <SummariesTable {...summaries} />
    </DashboardSection>
  );
}

export default SummaryDashboardSection;