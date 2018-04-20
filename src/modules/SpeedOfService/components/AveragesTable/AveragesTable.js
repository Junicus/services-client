import React from 'react';
import { Alert, Table } from 'reactstrap';
import AveragesRow from './AveragesRow';

const AveragesTable = ({ isLoading, data, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Alert style={{ width: 400 }} color='danger'>
          <h4>{error.status}</h4>
          <p>{error.description}</p>
        </Alert>
      </div>
    );
  }

  if (data.length) {
    return (
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Daypart</th>
            <th>Average TT (m)</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(record => <AveragesRow key={`${record.date}_${record.daypart}`} record={record} />)
          }
        </tbody>
      </Table>
    );
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Alert style={{ width: 400 }} color='success'>
        <p>No Data</p>
      </Alert>
    </div>
  );
}

export default AveragesTable;