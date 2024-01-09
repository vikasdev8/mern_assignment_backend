"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const const_1 = require("./const");
require("./db");
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json({ type: 'application/*+json' }));
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}));
app.use('/', index_1.default);
process.on('uncaughtException', (err) => console.log(err));
process.on('unhandledRejection', (err) => console.log(err));
app.listen(const_1.PORT, () => console.log('server running on 80'));
//# sourceMappingURL=index.js.map