import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const HOME_DIR = os.homedir();
const CONFIG_FILE = path.join(HOME_DIR, '.sysguard.json');

function setItem(key) {
  const conf = {
  };
}

function getItem(key) {
  const conf = {
    servePath: path.join(HOME_DIR, 'Downloads')
  };

  if (!conf[key]) {
    throw new Error('No such setting');
  }

  return conf[key];
}

export {
  getItem,
  setItem
};