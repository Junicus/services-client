import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SummariesSection from './SummariesSection';
import AveragesSection from './AveragesSection';
import OptionsSection from './OptionsSection/OptionsSection';

import { getAcquireScopeToken } from '../../../auth/actions';

const SpeedOfServiceDashboardScreen = (props) => {
  const { auth } = props;
  const onGetToken = () => {
    const { auth } = props;
    console.log(auth);
    console.log(auth.user);
    props.acquireToken(process.env.REACT_APP_SERVICES_SCOPE);
  }

  const onCallApi = () => {
    const { auth } = props;
    console.log(auth.tokens);
    const accessToken = auth.tokens[process.env.REACT_APP_SERVICES_SCOPE].token;
    console.log(accessToken);
    fetch('http://localhost:3001/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error({ status: res.status, desc: res.statusText });
      }
    }).then(json => console.log(json))
      .catch(err => console.log(err));
  }

  return (
    <React.Fragment>
      <OptionsSection />
      <SummariesSection />
      <AveragesSection />
      {auth.user && <button onClick={onGetToken}>Get Token</button>}
      {auth.tokens[process.env.REACT_APP_SERVICES_SCOPE] && <button onClick={onCallApi}>Call API</button>}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  acquireToken: (scope) => dispatch(getAcquireScopeToken(scope))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeedOfServiceDashboardScreen);