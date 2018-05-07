import React from 'react';
import { Input } from 'reactstrap';
import DashboardSection from '../DashboardSection/DashboardSection';

const BusinessDateSelector = ({ value, onChange }) => {
  return (
    <DashboardSection title='Select Business Date'>
      <Input type='date' id='businessDate' value={value}
        onChange={onChange} />
    </DashboardSection>
  );
}

export default BusinessDateSelector;