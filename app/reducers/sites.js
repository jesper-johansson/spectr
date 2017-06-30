const sites = (state = { sites: [] }, action) => {
  switch (action.type) {
    case 'GET_SITES':
      return {
        ...state,
        sites: action.sites,
      };

    default:
      return state;
  }
};

export default sites;
