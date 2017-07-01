import io from 'socket.io-client';

class Socket {
  static getPath(fromIp, timeout = 1000) {
    return new Promise((resolve, reject) => {
      const socket = io(`http://${fromIp}:3000/browser-sync-cp`, {
        path: '/browser-sync/socket.io',
        transports: ['websocket'],
      });

      // Browsersync socket event for retrieving url history
      socket.on('ui:history:update', (paths) => {
        if (!paths[0] || (paths[0] && !paths[0].path)) return reject('Could not resolve site path.');
        return resolve(paths[0].path);
      });

      setTimeout(() => reject('Could not connect to socket.'), timeout);
    });
  }
}

export default Socket;
