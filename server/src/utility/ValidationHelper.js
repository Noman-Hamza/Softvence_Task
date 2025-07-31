import {body} from "express-validator";

export const registerValidation = [
    body('fullName')
        .notEmpty().withMessage('Full name is required')
        .trim().escape(),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email')
        .normalizeEmail(),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .trim()
];