import {app, BrowserWindow, Tray, ipcMain} from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as ip from 'ip';
import FsServer from './node/fs-server';
import {FILE_SREVER_RELOAD} from './common/ipc-channel';

const projConf = require('./config.json');
const assetsDirectory = path.join(__dirname, '../assets');

const DEBUG_MODE = process.argv.indexOf('--debug') > 1;
const INDEX_CONFIG = DEBUG_MODE ? {
  pathname: `//127.0.0.1:${projConf.DEV_STATIC_SERVER_PORT}/index.html`,
  protocol: 'http:',
} : {
  pathname: path.join(__dirname, '../index.html'),
  protocol: 'file:',
}

let win: Electron.BrowserWindow;
let tray;
const fsServer = new FsServer();

const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    ...INDEX_CONFIG,
    slashes: true
  }))

  if (DEBUG_MODE) {
    win.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

const toggleWindow = () => {
  if (win.isVisible()) {
    win.hide()
  } else {
    win.show()
    win.focus()
  }
}

const startNodeService = () => {
  fsServer.start();
}

const bindListener = () => {
  ipcMain.on(FILE_SREVER_RELOAD, () => {
    fsServer.reload();
  });
}

app.on('ready', () => {
  createWindow();
  startNodeService();
  bindListener();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    fsServer.stop();
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('quit', () => {
  fsServer.stop();
})
