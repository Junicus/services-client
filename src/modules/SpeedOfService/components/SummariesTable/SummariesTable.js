import React from 'react';
import { Alert } from 'reactstrap';

const SummariesTable = (props) => {
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
      <div>Summaries Table</div>
    );
  } else {
    return (
      <div>Nothing</div>
    )
  }
}

export default SummariesTable;