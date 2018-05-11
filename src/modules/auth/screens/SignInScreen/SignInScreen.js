import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

class SignInScreen extends Component {
  componentDidMount() {
    const { auth } = this.props;
    if (!auth.isSigningIn) {
      this.props.SignIn();
    }
  }

  render() {
    console.log(this.props);
    const { auth } = this.props;
    if (!auth.user && auth.isSigningIn) {
      return <div>Signing In...</div>
    } else {
      if (auth.isSigningInErr) {
        return <div>Error</div>
      } else {
        const { location } = this.props;
        return <Redirect to={location.state.from} />
      }
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  SignIn: () => dispatch(signIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);