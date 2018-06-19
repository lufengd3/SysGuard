import * as React from 'react';
import * as os from 'os';

const {Label} = require('react-desktop/macOs');

const ifs = os.networkInterfaces();

export default class extends React.Component {
  getIp() {
    let ip;

    for (let key in ifs) {
      const netIf = ifs[key];

      netIf.map((item) => {
        if (item.family === 'IPv4' && item.address !== '127.0.0.1') {
          ip = item.address;
        }
      });
    }

    return ip;
  }

  render() {
    const ip = this.getIp();

    return (
      <Label color='#0061c4'>{ip}</Label>
    );
  }
}