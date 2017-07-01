import { sites } from '../';
import DeviceNetwork from '../../native/DeviceNetwork';

class Network {
  static getBaseFromIp(ip) {
    const strPositions = {
      start: 0,
      end: ip.lastIndexOf('.') + 1,
    };

    return ip.substr(strPositions.start, strPositions.end);
  }

  static sendRequest(url, ip, timeout) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((resp) => {
          if (resp && resp.status === 200) resolve(ip);
        })
        .catch(() => reject());

      setTimeout(() => reject(), timeout);
    });
  }

  static fetchIps(dispatch) {
    const activeIps = [];

    DeviceNetwork.getIp()
      .then((deviceIp) => {
        const base = Network.getBaseFromIp(deviceIp);

        for (let i = 8; i < 10; i += 1) {
          const request = Network.sendRequest(`http://${base}${i}:3000/__browser_sync__?method=notify`, `${base}${i}`, 500);
          request.then(foundIp => dispatch(sites.insertSite(undefined, foundIp)))
          .catch(() => null); // DO NOT TRY THIS AT HOME
        }
      });

    return activeIps;
  }
}

export default Network;
