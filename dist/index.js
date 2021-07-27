"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var debug_1 = __importDefault(require("debug"));
var cluster_1 = __importDefault(require("cluster"));
var os_1 = __importDefault(require("os"));
var helmet_1 = __importDefault(require("helmet"));
var app = express_1.default();
var PORT = Number(process.env.PORT) || 5000;
var cpus = os_1.default.cpus().length;
var log = debug_1.default('http:server');
if (cluster_1.default.isMaster) {
    for (var i = 0; i < cpus; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('exit', function () {
        cluster_1.default.fork();
    });
}
else {
    var server = app.listen(PORT);
    server.headersTimeout = 7200000;
    server.keepAliveTimeout = 60000;
    app.disable('x-powered-by');
    app.use(helmet_1.default());
}
//# sourceMappingURL=index.js.map