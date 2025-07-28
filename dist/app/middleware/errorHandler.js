"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const mongoose_1 = require("mongoose");
const errorHandler = (err, req, res, next) => {
    if (err instanceof mongoose_1.Error.ValidationError) {
        return res.status(404).json({
            success: false,
            message: "Validation failed",
            error: {
                name: err.name,
                errors: err.errors,
            },
        });
    }
    return res.status(404).json({
        success: false,
        message: err.message || "Something went wrong",
        error: {
            name: err.name || "Error",
            errors: err.errors || {},
        },
    });
};
exports.errorHandler = errorHandler;
