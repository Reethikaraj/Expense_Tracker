"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    type: { type: String, default: 'Investment' },
    color: { type: String, default: '#36AE7C' },
});
exports.default = mongoose_1.default.model('Category', categorySchema);
//# sourceMappingURL=categories_model.js.map