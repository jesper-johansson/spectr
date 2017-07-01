import { sites } from '../';
import DeviceNetwork from '../../native/DeviceNetwork';

class Network {
  static progressActive = false;
  static progressPercent = 0;
  static limit = 255;

  static getBaseFromIp(ip) {
    const strPositions = {
      start: 0,
      end: ip.lastIndexOf('.') + 1,
    };

    return ip.substr(strPositions.start, strPositions.end);
  }

  static sendRequest(requestProperties) {
    return new Promise((resolve, reject) => {
      fetch(requestProperties.url)
        .then(() => resolve(requestProperties.ip))
        .catch(() => reject());

      setTimeout(() => reject(), requestProperties.timeout);
    });
  }

  static fetchIps(dispatch) {
    console.log('fetching ips');
    const activeIps = [];

    DeviceNetwork.getIp()
      .then((deviceIp) => {
        const base = Network.getBaseFromIp(deviceIp);

        for (let i = 0; i < Network.limit; i += 1) {
          const requestProperties = {
            url: `http://${base}${i}:3000/__browser_sync__?method=notify`,
            ip: `${base}${i}`,
            timeout: 500,
          };

          const request = Network.sendRequest(requestProperties);
          Network.dispatchActions(request, dispatch);
        }
      });

    return activeIps;
  }

  static dispatchActions(request, dispatch) {
    request.then((foundIp) => {
      Network.updateProgress();
      dispatch(sites.insertSite(undefined, foundIp));
      dispatch(sites.updateSitesFetchProgress(Network.progressActive, Network.progressPercent));
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
