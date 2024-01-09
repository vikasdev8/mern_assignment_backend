"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGODBURL = exports.SECRETKEY = void 0;
require('dotenv').config();
exports.SECRETKEY = process.env.SECRETKEY;
exports.MONGODBURL = process.env.MONGODBURL;
exports.PORT = process.env.PORT;
//# sourceMappingURL=const.js.map