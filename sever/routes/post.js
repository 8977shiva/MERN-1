import express from "express";

import { createPost, getPosts, updatePost } from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/creates", createPost);
router.patch("/:id", updatePost);

export default router;
