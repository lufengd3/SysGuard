import * as os from 'os';

const ifs = os.networkInterfaces();

function getIpList(): string[] {
  const ipList = [];

  for (let key in ifs) {
    const netIf = ifs[key];

    for (let i = netIf.length; i--;) {
      const item = netIf[i];
      if (item.address && item.family === 'IPv4' && item.address !== '127.0.0.1') {
        ipList.push(item.address);
      }
    }

    // netIf.map((item, index) => {
    //   if (item.address && item.family === 'IPv4' && item.address !== '127.0.0.1') {
    //     ipList.push(item.address);
    //   }
    // });
  }

  if (!ipList.length) {
    ipList.push('127.0.0.1');
  }

  return ipList;
}

export {
  getIpList
}
