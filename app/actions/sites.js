import Network from './methods/Network';
import CONSTANTS from '../constants';

const defaults = {
  updateSitesFetchProgress: {
    progressActive: false,
    progressPercent: 0,
  },
  getSites: {
    paths: [],
    ips: [],
  },
  insertSite: {
    path: '',
    ip: '',
  },
};

const updateSitesFetchProgress = (
  progressActive = defaults.updateSitesFetchProgress.progressActive,
  progressPercent = defaults.updateSitesFetchProgress.progressPercent,
) => ({
  type: CONSTANTS.UPDATE_SITES_FETCH_PROGRESS,
  progressActive,
  progressPercent: Math.ceil((progressPercent / 255) * 100),
});

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

export default {
  getSites,
  fetchSites,
  insertSite,
  updateSitesFetchProgress,
};

export {
  getSites,
  fetchSites,
  insertSite,
  updateSitesFetchProgress,
};
