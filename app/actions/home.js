import CONSTANTS from '../constants';

const homeLoad = loaded => ({
  type: CONSTANTS.HOME_LOAD,
  loaded,
});

export default { homeLoad };
