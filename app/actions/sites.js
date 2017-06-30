// import axios from 'axios';
import Network from './methods/Network';
import CONSTANTS from '../constants';

const defaults = {
  getSites: {
    paths: [],
    ip: [],
  },
};

const getSites = (
  paths = defaults.getSites.paths,
  ip = defaults.getSites.ip,
) => ({
  type: CONSTANTS.GET_SITES,
  paths,
  ip,
});

const fetchSites = () => (
  (dispatch) => {
    const ip = Network.fetchIp();
    console.log(ip);
    return dispatch(getSites());
  }
);

export default { getSites, fetchSites };
export { getSites, fetchSites };
