import HomeScreen from '../../modules/Home/screens/HomeScreen';
import SpeedOfServiceScreen from '../../modules/SpeedOfService/screens/SpeedOfServiceScreen';
import LoginScreen from '../../modules/Auth/screens/LoginScreen';

export const routes = [{
  title: 'Home',
  pathname: '/',
  private: false,
  component: HomeScreen
}, {
  title: 'Speed of Service',
  pathname: '/speedofservice',
  private: true,
  component: SpeedOfServiceScreen,
  isService: true,
  icon: 'SOS'
}, {
  title: 'Login',
  pathname: '/login',
  private: false,
  component: LoginScreen,
}];

export const getServiceRoutes = () => {
  return routes.filter(route => route.isService);
}