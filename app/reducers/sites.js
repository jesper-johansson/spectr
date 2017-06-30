import CONSTANTS from '../constants';

const defaultState = {
  paths: [],
  ip: [],
};

const sites = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_SITES:
      return {
        ...state,
        paths: action.paths,
        ip: action.ip,
      };

    default:
      return state;
  }
};

export default sites;
