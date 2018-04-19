import React from 'react';

const AveragesRow = ({ record }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{record.daypart}</td>
        <td>{record.average}</td>
      </tr>
    </React.Fragment>
  );
}

export default AveragesRow;