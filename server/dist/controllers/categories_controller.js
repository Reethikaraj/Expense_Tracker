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
exports.allCategories = exports.newCategory = void 0;
const categories_model_js_1 = __importDefault(require("../models/categories_model.js"));
// Create category
const newCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield categories_model_js_1.default.create({
        type: 'Investment',
        color: '#36AE7C',
    });
    category.save(function (err) {
        if (!err)
            return res.json(category);
        return res
            .status(400)
            .json({ message: `Error while creating categories ${err}` });
    });
});
exports.newCategory = newCategory;
// Get all categories
const allCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield categories_model_js_1.default.find({});
    let filter = data.map((v) => Object.assign({}, { type: v.type, color: v.color }));
    return res.json(filter);
});
exports.allCategories = allCategories;
//# sourceMappingURL=categories_controller.js.map