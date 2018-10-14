import * as electron from 'electron';
// import * as fs from 'fs';
// import * as os from 'os';
// import * as path from 'path';
import * as Store from 'electron-store';

const {app, remote} = electron;
const DOWNLOAD_FOLDER_NAME = 'downloads';
const DEFAULT_SERVE_PATH = (app && app.getPath(DOWNLOAD_FOLDER_NAME)) || (remote && remote.app.getPath(DOWNLOAD_FOLDER_NAME));
const SERVE_KEY = 'serve_path';
const store = new Store();

function setItem(key, val) {
  store.set(key, val);
}

function getItem(key) {
  let val = store.get(key);
  if (key === SERVE_KEY && !val) {
    val = DEFAULT_SERVE_PATH;
  }

  return val;
}

export {
  getItem,
  setItem,
  SERVE_KEY
};