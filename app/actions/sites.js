import Network from './methods/Network';
import CONSTANTS from '../constants';

const defaults = {
  getSites: {
    paths: [],
    ips: [],
  },
  insertSite: {
    path: '',
    ip: '',
  },
};

const getSites = (
  paths = defaults.getSites.paths,
  ips = defaults.getSites.ip,
) => ({
  type: CONSTANTS.GET_SITES,
  paths,
  ips,
});

const fetchSites = () => (
  async dispatch => Network.fetchIps(dispatch)
);

const insertSite = (
  path = defaults.insertSite.path,
  ip = defaults.insertSite.ip,
) => ({
  type: CONSTANTS.INSERT_SITE,
  path,
  ip,
});

export default { getSites, fetchSites, insertSite };
export { getSites, fetchSites, insertSite };
