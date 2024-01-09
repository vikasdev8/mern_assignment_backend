"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'title required']
    },
    description: {
        type: String,
        required: [true, 'description required']
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'user id required']
    },
    createAt: {
        type: Number,
        default: Date.now()
    }
});
exports.default = (0, mongoose_1.model)('note', schema);
//# sourceMappingURL=note.model.js.map