import React from 'react';
import { Alert } from 'reactstrap';

const AveragesTable = (props) => {
  if (props) {
    const { isLoading, data, error } = props;
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
      return (
        <Alert color='danger'>
          <h4>{error.status}</h4>
          <p>{error.description}</p>
        </Alert>
      );
    }
    return (
      <div>Averages Table</div>
    );
  } else {
    return <div>nothing</div>
  }
}

export default AveragesTable;