"use strict";
exports.__esModule = true;
var fs = require("fs");
var FolderReader = /** @class */ (function () {
    function FolderReader(rootPath) {
        this.rootPath = rootPath;
    }
    FolderReader.prototype.read = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!fs.existsSync(_this.rootPath) || !fs.lstatSync(_this.rootPath).isDirectory()) {
                throw new Error(_this.rootPath + " is not a directory.");
            }
            fs.readdir(_this.rootPath, function (error, data) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    return FolderReader;
}());
exports["default"] = FolderReader;
// const files = new FolderReader('/d/Coding/github/').read();
