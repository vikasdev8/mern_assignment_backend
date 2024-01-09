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
const response_1 = __importDefault(require("../helpers/response"));
const note_model_1 = __importDefault(require("../model/note.model"));
class Notes {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, user } = req.body;
                console.log(req.body);
                const note = new note_model_1.default({
                    title,
                    description,
                    createdBy: user._id
                });
                yield note.save();
                (0, response_1.default)(res, { message: "Notes created successfully", type: "SUCCESS" });
            }
            catch (error) {
                (0, response_1.default)(res, { message: error.message, type: "BAD_REQUEST" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                console.log(_id);
                const body = req.body;
                const note = yield note_model_1.default.findByIdAndUpdate(_id, body);
                (0, response_1.default)(res, { message: "Notes updated successfully", type: "SUCCESS" });
            }
            catch (error) {
                (0, response_1.default)(res, { message: error.message, type: "BAD_REQUEST" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                yield note_model_1.default.findByIdAndDelete(_id);
                (0, response_1.default)(res, { message: "Delete successfully", type: "SUCCESS" });
            }
            catch (error) {
                (0, response_1.default)(res, { message: error.message, type: "BAD_REQUEST" });
            }
        });
    }
    getAllNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body.user._id);
                const notes = yield note_model_1.default.find({ createdBy: req.body.user._id }).sort({ createAt: "desc" }).lean();
                (0, response_1.default)(res, { data: { notes }, type: "SUCCESS" });
            }
            catch (error) {
                (0, response_1.default)(res, { message: error.message, type: "BAD_REQUEST" });
            }
        });
    }
}
exports.default = new Notes();
//# sourceMappingURL=notes.controller.js.map