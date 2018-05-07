import ModulesMenu from '../../components/ModulesMenu';
import SpeedOfServiceMenu from '../../modules/SpeedOfService/components/SpeedOfServiceMenu';

export default [{
  path: '/',
  component: ModulesMenu,
  exact: false
}, {
  path: '/speedofservice',
  component: SpeedOfServiceMenu,
  exact: false
}];