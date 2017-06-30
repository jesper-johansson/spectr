import DeviceNetwork from '../../native/DeviceNetwork';

class Network {
  static async fetchIp() {
    DeviceNetwork.getIp()
      .then((ip) => {
        const strPositions = {
          start: 0,
          end: ip.lastIndexOf('.') + 1,
        };

        const range = ip.substr(strPositions.start, strPositions.end);
        console.log(range);
      });
  }
}

export default Network;
