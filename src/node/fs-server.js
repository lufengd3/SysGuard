"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var http = require("http");
var path = require("path");
var os = require("os");
var finalhandler = require("finalhandler");
var serveStatic = require("serve-static");
var serveIndex = require("serve-index");
var folder_reader_1 = require("./folder-reader");
var FsServer = /** @class */ (function () {
    function FsServer() {
        var _this = this;
        this._reqHanlder = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data, e_1, indexPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(req.url == '/')) return [3 /*break*/, 5];
                        data = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._renderIndexPage()];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        res.writeHead(502, { 'Content-Type': 'text/plain' });
                        res.write('Internal server error');
                        res.end();
                        return [2 /*return*/];
                    case 4:
                        console.log(data);
                        indexPage = '<html><body style="color:red;">fqo</body></html>';
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write(indexPage);
                        res.end();
                        return [3 /*break*/, 6];
                    case 5:
                        this.fsService(req, res, finalhandler(req, res));
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this._renderIndexPage = function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.folderReader.read()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        var homedir = os.homedir();
        this.publicPath = path.join(homedir, 'Downloads');
        this.folderReader = new folder_reader_1["default"](this.publicPath);
        this.fsService = serveStatic(this.publicPath);
        this.serveIndex = serveIndex(this.publicPath, { 'icons': true });
    }
    FsServer.prototype.start = function () {
        this.server = this._createServer();
        this.server.listen(3000);
    };
    FsServer.prototype.stop = function () {
        this.server.close(function () {
            console.log('We closed!');
            process.exit();
        });
    };
    FsServer.prototype._createServer = function () {
        var _this = this;
        // return http.createServer(this._reqHanlder);
        return http.createServer(function (req, res) {
            var done = finalhandler(req, res);
            _this.fsService(req, res, function (err) {
                if (err)
                    return done(err);
                _this.serveIndex(req, res, done);
            });
        });
    };
    return FsServer;
}());
exports["default"] = FsServer;
new FsServer().start();
