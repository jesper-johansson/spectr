import { sites } from '../';
import DeviceNetwork from '../../native/DeviceNetwork';
import Socket from './Socket';

class Network {
  static progressActive = false;
  static progressPercent = 0;
  static limit = 255;

  // Remove the last IP range for use in loop
  static getBaseFromIp(ip) {
    const strPositions = {
      start: 0,
      end: ip.lastIndexOf('.') + 1,
    };

    return ip.substr(strPositions.start, strPositions.end);
  }

  // Promise fetch with timeout
  static sendRequest(requestProperties) {
    return new Promise((resolve, reject) => {
      fetch(requestProperties.url)
        .then(() => resolve(requestProperties.ip))
        .catch(() => reject());

      setTimeout(() => reject(), requestProperties.timeout);
    });
  }

  // Main entry to fetch device IP and loop through range
  static fetchIps(dispatch) {
    const activeIps = [];

    DeviceNetwork.getIp()
      .then((deviceIp) => {
        const base = Network.getBaseFromIp(deviceIp);

        for (let i = 0; i < Network.limit; i += 1) {
          const requestProperties = {
            url: `http://${base}${i}:3000/__browser_sync__?method=notify`,
            ip: `${base}${i}`,
            timeout: 1000,
          };

          const request = Network.sendRequest(requestProperties);
          Network.dispatchActions(request, dispatch);
        }
      });

    return activeIps;
  }

  // Dispatch actions inside promise resolve/reject
  static dispatchActions(request, dispatch) {
    request.then((foundIp) => {
      Network.updateProgress();
      dispatch(sites.updateSitesFetchProgress(Network.progressActive, Network.progressPercent));
      Socket.getPath(foundIp)
        .then((path) => {
          dispatch(sites.insertSite(foundIp, path, foundIp));
        });
    })
    .catch(() => {
      Network.updateProgress();
      dispatch(sites.updateSitesFetchProgress(Network.progressActive, Network.progressPercent));
    });
  }

  static updateProgress() {
    Network.progressPercent = Network.progressPercent < Network.limit ? Network.progressPercent += 1 : 0;
    Network.progressActive = Network.progressPercent > 0 && Network.progressPercent < Network.limit;
  }
}

export default Network;
