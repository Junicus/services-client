import React from 'react';

const AveragesTable = (props) => {
  if (props) {
    console.log(props);
    const { isLoading, data, error } = props;
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{JSON.stringify(error)}</div>
    }
    return (
      <div>Averages Table</div>
    );
  } else {
    return <div>nothing</div>
  }
}

export default AveragesTable;