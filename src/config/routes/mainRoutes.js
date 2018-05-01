import SpeedOfServiceScreen from '../../modules/SpeedOfService/screens/SpeedOfServiceScreen';
import LoginScreen from '../../modules/Auth/screens/LoginScreen';

export default [{
  title: 'Speed of Service',
  path: '/speedofservice',
  exact: false,
  component: SpeedOfServiceScreen,
  private: true
}, {
  title: 'Login',
  path: '/login',
  exact: true,
  component: LoginScreen,
  private: false,
}];