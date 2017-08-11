import Network from './methods/Network';
import CONSTANTS from '../constants';

const defaults = {
  updateSitesFetchProgress: {
    progressActive: false,
    progressPercent: 0,
  },
  getSites: {
    items: [],
  },
  insertSite: {
    key: '',
    absolutePath: '',
    path: '',
    ip: '',
    mode: '',
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
  items = defaults.getSites.items,
) => ({
  type: CONSTANTS.GET_SITES,
  items,
});

const fetchSites = () => (
  async dispatch => Network.fetchIps(dispatch)
);

const insertSite = (
  key = defaults.insertSite.key,
  absolutePath = defaults.insertSite.absolutePath,
  path = defaults.insertSite.path,
  ip = defaults.insertSite.ip,
  mode = defaults.insertSite.mode,
) => ({
  type: CONSTANTS.INSERT_SITE,
  key,
  absolutePath,
  path,
  ip,
  mode,
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
