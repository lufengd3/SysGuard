import * as fs from 'fs';

class FolderReader {
  rootPath: string;

  constructor(rootPath: string) {
    this.rootPath = rootPath;
  }


  public read(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(this.rootPath) || !fs.lstatSync(this.rootPath).isDirectory()) {
        throw new Error(`${this.rootPath} is not a directory.`);
      }

      fs.readdir(this.rootPath, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

}

export default FolderReader;

// const files = new FolderReader('/d/Coding/github/').read();