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
exports.getLabels = exports.deleteTransaction = exports.getAllTransactions = exports.newTransaction = void 0;
const transactions_model_js_1 = __importDefault(require("../models/transactions_model.js"));
// transaction category
const newTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body)
        return res.status(400).json('Please enter data');
    let { name, type, amount } = req.body;
    const transaction = yield transactions_model_js_1.default.create({
        name,
        type,
        amount,
        date: new Date(),
    });
    transaction.save(function (err) {
        if (!err)
            return res.json(transaction);
        return res
            .status(400)
            .json({ message: `Error while creating transaction ${err}` });
    });
});
exports.newTransaction = newTransaction;
const getAllTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body)
        return res.status(400).json('Please enter data');
    let data = yield transactions_model_js_1.default.find({});
    return res.json(data);
});
exports.getAllTransactions = getAllTransactions;
const deleteTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body)
        res.status(400).json({ message: 'Please enter data' });
    yield transactions_model_js_1.default.deleteOne(req.body, function (err) {
        if (!err)
            res.json('Transaction Deleted successfully!');
    })
        .clone()
        .catch(function (err) {
        res.json('Error while deleting Transaction Record');
    });
});
exports.deleteTransaction = deleteTransaction;
const getLabels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    transactions_model_js_1.default.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'type',
                foreignField: 'type',
                as: 'categories_info',
            },
        },
        {
            // $unwind: { path: '$categories_info', preserveNullAndEmptyArrays: true },
            $unwind: '$categories_info',
        },
    ])
        .then((result) => {
        let data = result.map((v) => Object.assign({}, {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info && v.categories_info['color'],
        }));
        res.json(data);
    })
        .catch((error) => {
        res.status(400).json(`Lookup Collection Error ${error}`);
    });
});
exports.getLabels = getLabels;
//# sourceMappingURL=transactions_controller.js.map