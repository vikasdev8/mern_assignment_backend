"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_route_1 = __importDefault(require("./user.route"));
const notes_route_1 = __importDefault(require("./notes.route"));
router.use('/', user_route_1.default);
router.use('/', notes_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map