import * as http from 'http';
import * as path from 'path';
import * as os from 'os';
import * as finalhandler from 'finalhandler';
import * as serveStatic from 'serve-static';

interface IFsServer {
  start(): void;
}

class FsServer implements IFsServer {
  publicPath;
  fsService;
  server;

  constructor() {
    const homedir = os.homedir();
    this.publicPath = path.join(homedir, 'Downloads');
    this.fsService = serveStatic(this.publicPath, {'index': ['index.html', 'index.htm']});
    this.server = http.createServer((req: any, res: any): void => {
      this.fsService(req, res, finalhandler(req, res))
    });
  }

  public start() {
    this.server.listen(3000);
  }
}

export default FsServer;
