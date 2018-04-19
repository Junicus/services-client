import React from 'react';
import { Alert, Table } from 'reactstrap';
import SummariesRow from './SummariesRow';

const SummariesTable = ({ isLoading, keys, data, error }) => {
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

  console.log(data);
  if (data.length) {
    return (
      <Table>
        <thead>
          <tr>
            <th>Daypart</th>
            {
              Object.keys(keys).map(key => <th key={key}>{keys[key]}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map(record => <SummariesRow key={`${record.date}_${record.daypart}`} record={record} />)
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

export default SummariesTable;