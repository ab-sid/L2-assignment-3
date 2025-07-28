"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./app/controller/book.controller");
const borrow_controller_1 = require("./app/controller/borrow.controller");
const errorHandler_1 = require("./app/middleware/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/books', book_controller_1.bookRouter);
app.use('/api/borrow', borrow_controller_1.borrowRouter);
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Library Management System!' });
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
