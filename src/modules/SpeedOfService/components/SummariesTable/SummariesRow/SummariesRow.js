import React from 'react';
import moment from 'moment';

const SummariesRow = ({ record }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{moment(record.date).format('l')}</td>
        <td>{record.daypart}</td>
        {
          Object.keys(record.summaries).map(summaryKey => <td key={`${record.date}_${record.daypart}_${summaryKey}`}>{record.summaries[summaryKey]}</td>)
        }
      </tr>
    </React.Fragment>
  );
}

export default SummariesRow;