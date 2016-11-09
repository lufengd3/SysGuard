import React, { Component } from 'react';
import { Label } from 'react-desktop/macOs';
import os from 'os';

const ifs = os.networkInterfaces();

export default class extends Component {
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