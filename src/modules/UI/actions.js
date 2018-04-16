import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
  SET_MODULE_INFO
} from './actionTypes';

export const showSidebar = () => ({
  type: SHOW_SIDEBAR
});

export const hideSidebar = () => ({
  type: HIDE_SIDEBAR
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});

export const setModuleInfo = (payload) => ({
  type: SET_MODULE_INFO,
  payload
});

