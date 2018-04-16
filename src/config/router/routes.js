import HomeScreen from '../../modules/Home/screens/HomeScreen';
import SpeedOfServiceScreen from '../../modules/SpeedOfService/screens/SpeedOfServiceScreen';
import LoginScreen from '../../modules/Auth/screens/LoginScreen';

export const routes = [{
  title: 'Home',
  path: '/',
  exact: true,
  component: HomeScreen,
  private: false,
}, {
  title: 'Speed of Service',
  path: '/speedofservice',
  exact: false,
  component: SpeedOfServiceScreen,
  private: false,
}, {
  title: 'Login',
  path: '/login',
  exact: true,
  component: LoginScreen,
  private: false,
}];