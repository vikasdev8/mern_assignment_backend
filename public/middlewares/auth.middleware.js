"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const const_1 = require("../const");
const response_1 = __importDefault(require("../helpers/response"));
exports.default = (req, res, next) => {
    const authorization = (req.headers['authorization'] && req.headers['authorization'].startsWith('Bearer')) ? req.headers['authorization'] : false;
    if (authorization) {
        const token = authorization.split(' ')[1];
        console.log(token);
        if (!token) {
            return (0, response_1.default)(res, { message: "token is not avaiable", type: "UNAUTHORIZED", });
        }
        const { user } = jsonwebtoken_1.default.verify(token, const_1.SECRETKEY);
        req.body = Object.assign(Object.assign({}, req.body), { user });
        return next(null);
    }
    return (0, response_1.default)(res, { message: "Token no avaiable", type: "UNAUTHORIZED" });
};
//# sourceMappingURL=auth.middleware.js.map