import { routes } from '../../../config/router/routes';

export const getServiceLinks = () => {
  return routes.filter(route => route.isService).map(link => ({
    to: link.pathname,
    title: link.title,
    icon: link.icon
  }));
}

