import CONSTANTS from '../constants';

const defaultState = {
  paths: [],
  ips: [],
};

const sites = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_SITES:
      return {
        ...state,
        paths: action.paths,
        ips: action.ips,
      };

    case CONSTANTS.INSERT_SITE:
      return {
        ...state,
        paths: [
          ...state.paths,
          ...action.path,
        ],
        ips: [
          ...state.ips,
          ...action.ip,
        ],
      };

    default:
      return state;
  }
};

export default sites;
