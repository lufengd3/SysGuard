import * as os from 'os';

const ifs = os.networkInterfaces();

function getIpList(): string[] {
  const ipList = [];

  const tmpList = [];
  for (let key in ifs) {
    const netIf = ifs[key];
    netIf.map((item, index) => {
      if (item.address && item.family === 'IPv4' && item.address !== '127.0.0.1') {
        tmpList.push(item.address);
      }
    });
  }

  for (let i = tmpList.length; i--;) {
    const item = tmpList[i];

    ipList.push(item);
  }

  if (!ipList.length) {
    ipList.push('127.0.0.1');
  }

  return ipList;
}

export {
  getIpList
}
