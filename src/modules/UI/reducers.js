import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
  SET_MODULE_INFO
} from './actionTypes';

const initialUIstate = {
  showSidebar: false
}

const initialLinksState = {
  home: {
    to: '/',
    title: 'Switchboard'
  },
  module: null,
  modules: [
    {
      to: '/speedofservice',
      title: 'Speed of Service',
    }
  ]
}

export const ui = (state = initialUIstate, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return { ...state, showSidebar: true }
    case HIDE_SIDEBAR:
      return { ...state, showSidebar: false }
    case TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar }
    default:
      return state;
  }
}

export const links = (state = initialLinksState, action) => {
  switch (action.type) {
    case SET_MODULE_INFO:
      return {
        ...state,
        module: action.payload
      }
    default:
      return state;
  }
}