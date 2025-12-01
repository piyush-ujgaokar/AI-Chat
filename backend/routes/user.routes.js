import { Router } from "express";
import *as userController from "../controllers/userController.js";
import {body} from 'express-validator'
import *as authMiddleware from "../middleware/auth.middleware.js"

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

router.get('/profile',authMiddleware.authUser, userController.profileController)

router.get('/logout',authMiddleware.authUser,userController.logOutController)


export default router