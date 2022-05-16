"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transactions_controller_js_1 = require("../controllers/transactions_controller.js");
const router = express_1.default.Router();
router
    .post('/transactions', transactions_controller_js_1.newTransaction)
    .get('/transactions', transactions_controller_js_1.getAllTransactions)
    .delete('/transactions', transactions_controller_js_1.deleteTransaction);
router.get('/labels', transactions_controller_js_1.getLabels);
exports.default = router;
//# sourceMappingURL=transactions_routes.js.map