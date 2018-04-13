import React from 'react';

const SummariesTable = (props) => {
  if (props) {
    const { isLoading, data, error } = props;
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{JSON.stringify(error)}</div>
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