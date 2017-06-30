// import axios from 'axios';
import { NetworkInfo } from 'react-native-network-info';
import CONSTANTS from '../constants';

const getSites = (sitesArray = []) => ({
  type: CONSTANTS.GET_SITES,
  sites: sitesArray,
});

const fetchSitesAction = () => ({
  type: CONSTANTS.FETCH_SITES,
});

const fetchSites = () => (
  (dispatch) => {
    dispatch(fetchSitesAction());
    return NetworkInfo.getIPAddress(ip => dispatch(getSites([ip])));
  }
);

export default { getSites, fetchSites };
export { getSites, fetchSites };
