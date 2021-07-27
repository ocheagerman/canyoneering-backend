"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("../routes"));
// this module is supposed to be close for modification
// please dont modify, route modules is totally reliant on this module
// modifying this will results on routes not working
function handler(app) {
    for (var key in routes_1.default) {
        app.use(routes_1.default[key].url, routes_1.default[key].route);
    }
    app.use(express_1.default.static(path_1.default.resolve('public')));
}
module.exports = handler;
