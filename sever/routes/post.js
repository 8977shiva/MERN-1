import express from "express";

import { createPost, getPosts, updatePost, deletePost } from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/creates", createPost);
router.patch("/:id", updatePost);
router.delete('/:id',deletePost)

export default router;
