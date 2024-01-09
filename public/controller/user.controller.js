"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../model/user.model"));
const response_1 = __importDefault(require("../helpers/response"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const const_1 = require("../const");
class User {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const user = new user_model_1.default(Object.assign({}, body));
                yield user.save();
                (0, response_1.default)(res, { data: user, message: "User created successfully", type: "SUCCESS" });
            }
            catch (error) {
                (0, response_1.default)(res, { message: error.message, type: "BAD_REQUEST" });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return (0, response_1.default)(res, { message: "Pls enter missing field", type: "BAD_REQUEST" });
                }
                const user = yield user_model_1.default.findOne({ email }).select('+password');
                if (!user) {
                    return (0, response_1.default)(res, { message: "User not access pls signup", type: "BAD_REQUEST" });
                }
                const checkPassword = bcrypt_1.default.compareSync(password, user.password);
                if (!checkPassword) {
                    return (0, response_1.default)(res, { message: "Enter data is incorrect try again", type: "BAD_REQUEST" });
                }
                const token = jsonwebtoken_1.default.sign({ user }, const_1.SECRETKEY, { expiresIn: '24h' });
                (0, response_1.default)(res, { data: { token }, message: "User Login successfully", type: "SUCCESS" });
            }
            catch (error) {
                (0, response_1.default)(res, { message: error.message, type: "BAD_REQUEST" });
            }
        });
    }
}
exports.default = new User();
//# sourceMappingURL=user.controller.js.map