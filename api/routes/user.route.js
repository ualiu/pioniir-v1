import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/test")

router.delete("/:id", verifyToken, deleteUser);
// router.get("/:id", getUser);

export default router;