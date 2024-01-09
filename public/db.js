"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const const_1 = require("./const");
mongoose_1.default.connect(const_1.MONGODBURL)
    .then(() => {
    console.log('DB connected');
})
    .catch((error) => {
    console.log('DB Error: ', error.message, " ", error.stack);
});
//# sourceMappingURL=db.js.map