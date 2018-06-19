import {app, BrowserWindow, Tray} from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as ip from 'ip';
import FsServer from './node/fs-server';

const assetsDirectory = path.join(__dirname, '../assets');

let win: Electron.BrowserWindow;
let tray;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    // pathname: path.join(__dirname, '../index.html'),
    // protocol: 'file:',
    pathname: '//localhost:9000/index.html',
    protocol: 'http:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

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
  const fsServer = new FsServer();
  fsServer.start();
}

app.on('ready', () => {
  createWindow();
  startNodeService();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
