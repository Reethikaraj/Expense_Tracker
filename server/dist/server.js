"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const categories_routes_js_1 = __importDefault(require("./routes/categories_routes.js"));
const transactions_routes_js_1 = __importDefault(require("./routes/transactions_routes.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// ErrorHandling for Uncaught exceptions (like undefined eg.console.log(abc))
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err}`);
    console.log('Shutting down the server due to UNCAUGHT EXCEPTIONS');
    process.exit(1);
});
// Connecting mongoDB
const uri = process.env.MONGODB_URI;
mongoose_1.default
    .connect(uri)
    .then(() => {
    console.log('Connection succesful');
    const server = app.listen(process.env.PORT || 5000, () => console.log(`App running on port ${process.env.PORT}`));
})
    .catch(() => {
    console.log('Connection failed');
});
// routes
app.use('/api', categories_routes_js_1.default);
app.use('/api', transactions_routes_js_1.default);
//# sourceMappingURL=server.js.map