"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const notes_controller_1 = __importDefault(require("../controller/notes.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
router.post('/note', auth_middleware_1.default, notes_controller_1.default.create);
router.put('/note/:_id', auth_middleware_1.default, notes_controller_1.default.update);
router.delete('/note/:_id', auth_middleware_1.default, notes_controller_1.default.delete);
router.get('/note', auth_middleware_1.default, notes_controller_1.default.getAllNotes);
exports.default = router;
//# sourceMappingURL=notes.route.js.map