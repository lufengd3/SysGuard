import * as http from 'http';
import * as path from 'path';
import * as os from 'os';
import * as finalhandler from 'finalhandler';
import * as serveStatic from 'serve-static';
import * as serveIndex from 'serve-index';
import FolderReader from './folder-reader';

const HOME_DIR = os.homedir();

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

  constructor(rootPath = HOME_DIR) {
    this.publicPath = path.join(rootPath, 'Downloads');
    this.fsService = serveStatic(this.publicPath);
    this.serveIndex = serveIndex(this.publicPath, {'icons': true})
    this.folderReader = new FolderReader(this.publicPath);
  }

  public start() {
    this.server = this._createServer();
    this.server.listen(3000);
  }

  public stop() {
    this.server.close(function() {
      console.log('We closed!');
      process.exit();
    });
  }

  private _createServer() {
    // return http.createServer(this._reqHanlder);
    return http.createServer((req, res) => {
      const done = finalhandler(req, res);

      this.fsService(req, res, (err) => {
        if (err) return done(err)
        this.serveIndex(req, res, done)
      })
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

      console.log(data);
      const indexPage = '<html><body style="color:red;">fs</body></html>';

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(indexPage);
      res.end();
    } else {
      this.fsService(req, res, finalhandler(req, res))
    }
  }

  private _renderIndexPage = async (): Promise<any> => {
    return await this.folderReader.read();
  }

}

export default FsServer;
