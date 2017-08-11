import io from 'socket.io-client';

class Socket {
  static getPath(fromIp, timeout = 2000) {
    return new Promise((resolve, reject) => {
      let options;
      const socket = io(`http://${fromIp}/browser-sync-cp`, {
        path: '/browser-sync/socket.io',
        transports: ['websocket'],
      });

      socket.emit('ui:get:options');

      // Browsersync socket event for retrieving url history
      socket.on('ui:history:update', (paths) => {
        socket.on('ui:receive:options', ({ bs }) => {
          options = bs;
          const latestPath = paths[0] ? paths[0].path : '/';
          const fullPath = options.proxy ? `${options.proxy.target}${latestPath}` : `${options.scheme}://localhost:${options.port}${latestPath}`;
          return resolve({ absolutePath: fullPath, path: latestPath, mode: options.mode });
        });
      });

      setTimeout(() => reject('Could not connect to socket'), timeout);
    });
  }
}

export default Socket;
