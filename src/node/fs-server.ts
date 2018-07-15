import * as http from 'http';
import * as path from 'path';
import * as os from 'os';
import * as finalhandler from 'finalhandler';
import * as serveStatic from 'serve-static';
import * as serveIndex from 'serve-index';
import FolderReader from './folder-reader';
import {getItem} from '../common/prefrence';

const projConf = require('../config.json');
const DEFAULT_PATH = getItem('servePath');

interface IFsServer {
  start(): void;
  stop(): void;
}

class FsServer implements IFsServer {
  publicPath;
  fsService;
  serveIndex;
  server;
  folderReader;

  constructor(rootPath = DEFAULT_PATH) {
    this.publicPath = rootPath;
    this.fsService = serveStatic(this.publicPath);
    this.folderReader = new FolderReader(this.publicPath);

    const serverIndexAssetsPath = path.join(__dirname, '../assets/server-index/');
    this.serveIndex = serveIndex(this.publicPath, {
      // icons: true,
      stylesheet: path.join(serverIndexAssetsPath, 'style.css'),
      template: path.join(serverIndexAssetsPath, 'directory.html')
    });
  }

  public start() {
    this.server = this._createServer();
    this.server.listen(projConf.HTTP_SERVER_PORT);
  }

  public stop() {
    this.server.close();
  }

  private _createServer() {
    // return http.createServer(this._reqHanlder);
    return http.createServer((req, res) => {
      const done = finalhandler(req, res);

      this.fsService(req, res, (err) => {
        if (err) {
          return done(err);
        }

        this.serveIndex(req, res, done)
      });
    });
  }

  private _reqHanlder = async (req: any, res: any) => {
    if (req.url == '/') {
      let data = [];
      try {
        data = await this._renderIndexPage();
      } catch (e) {
        console.log(e);
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.write('Internal server error');
        res.end();
        return;
      }

      const indexPage = '<html><body style="color:red;">fs</body></html>';

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(indexPage);
      res.end();
    } else {
      this.fsService(req, res, finalhandler(req, res));
    }
  }

  private _renderIndexPage = async (): Promise<any> => {
    return await this.folderReader.read();
  }

}

export default FsServer;