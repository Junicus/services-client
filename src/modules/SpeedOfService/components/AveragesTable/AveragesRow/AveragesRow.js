import React from 'react';
import moment from 'moment';

const AveragesRow = ({ record }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{moment(Number(record.date)).format('l')}</td>
        <td>{record.daypart}</td>
        <td>{record.average}</td>
      </tr>
    </React.Fragment>
  );
}

export default AveragesRow;