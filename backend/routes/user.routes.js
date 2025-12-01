import { Router } from "express";
import *as userController from "../controllers/userController.js";
import {body} from 'express-validator'


const router=Router()

router.post('/register',
    body('email').isEmail().withMessage("Email Must Be Valid"),
    body('password').isLength({min:6}).withMessage("Password Must Be Valid"),
    userController.createUserController
);

router.post('/login',
    body('email').isEmail().withMessage("Email Must Be Valid"),
    body('password').isLength({min:6}).withMessage("Password Must Be Valid"),
    userController.createLoginController
)


export default router