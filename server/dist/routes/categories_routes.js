"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_controller_js_1 = require("../controllers/categories_controller.js");
const router = express_1.default.Router();
router.post('/categories', categories_controller_js_1.newCategory).get('/categories', categories_controller_js_1.allCategories);
exports.default = router;
//# sourceMappingURL=categories_routes.js.map