import { sites } from '../';
import DeviceNetwork from '../../native/DeviceNetwork';
import Socket from './Socket';

class Network {
  static progressActive = false;
  static progress = 0;
  static limit = 255;
  static portLimit = 3;
  static progressLimit = Network.limit * Network.portLimit;

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
        console.log('IP: ', deviceIp);
        const base = Network.getBaseFromIp(deviceIp);

        for (let i = 0; i < Network.limit; i += 1) {
          for (let p = 0; p < Network.portLimit; p += 1) {
            const requestProperties = {
              url: `http://${base}${i}:300${p}/__browser_sync__?method=notify`,
              ip: `${base}${i}:300${p}`,
              timeout: 2000,
            };

            const request = Network.sendRequest(requestProperties);
            Network.dispatchActions(request, dispatch);
          }
        }
      });

    return activeIps;
  }

  // Dispatch actions inside promise resolve/reject
  static dispatchActions(request, dispatch) {
    request.then((foundIp) => {
      Socket.getPath(foundIp)
        .then((session) => {
          dispatch(sites.insertSite(foundIp, session.path, foundIp, session.mode));
          Network.updateProgress(dispatch);
        })
        .catch(() => null);
    })
    .catch(() => Network.updateProgress(dispatch));
  }

  static updateProgress(dispatch) {
    Network.progress += 1;
    Network.progressActive = Network.progress < Network.progressLimit;
    dispatch(sites.updateSitesFetchProgress(Network.progressActive, Network.progress));
    if (Network.progress >= Network.progressLimit) Network.progress = 0;
  }
}

export default Network;
