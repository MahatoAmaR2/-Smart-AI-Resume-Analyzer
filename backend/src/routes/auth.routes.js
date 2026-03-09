import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  getMe,
} from "../controllers/auth.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", registerUser);

/**
 * @route POST /api/auth/login
 * @desc Login user with email and password
 * @access Public
 */
authRouter.post("/login", loginUser);

/**
 * @route GET /api/auth/logout
 * @desc Logout user by clearing the token cookie and add token to blacklist
 * @access Public
 */
authRouter.get("/logout", logoutUser);

/**
 * @route GET /api/auth/get-me
 * @desc get the current logged in user
 * @access Private
 */

authRouter.get("/get-me", authUser, getMe);

export default authRouter;
