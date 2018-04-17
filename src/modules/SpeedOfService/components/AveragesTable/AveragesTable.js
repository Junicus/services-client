import React from 'react';
import { Alert } from 'reactstrap';

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
    <div>Averages Table with data</div>
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