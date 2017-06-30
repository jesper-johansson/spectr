const home = (state = { loaded: false }, action) => {
  switch (action.type) {
    case 'HOME_LOAD':
      return {
        ...state,
        loaded: true,
      };

    default:
      return state;
  }
};

export default home;
