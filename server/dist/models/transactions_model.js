"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
    name: { type: String, default: 'Anonymous' },
    type: { type: String, default: 'Investment' },
    amount: { type: Number },
    date: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.model('Transaction', transactionSchema);
//# sourceMappingURL=transactions_model.js.map