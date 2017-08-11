import CONSTANTS from '../constants';

const defaultState = {
  items: [],
  progressActive: false,
  progressPercent: 0,
};

const sites = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_SITES:
      return {
        ...state,
        items: action.items,
      };

    case CONSTANTS.INSERT_SITE:
      return {
        ...state,
        items: [
          ...state.items,
          {
            key: action.key,
            ip: action.ip,
            absolutePath: action.absolutePath,
            path: action.path,
            mode: action.mode,
          },
        ],
      };

    case CONSTANTS.UPDATE_SITES_FETCH_PROGRESS:
      return {
        ...state,
        progressActive: action.progressActive,
        progressPercent: action.progressPercent,
      };

    default:
      return state;
  }
};

export default sites;
