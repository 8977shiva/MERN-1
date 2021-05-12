import express from "express";

import { createPost, getPosts, updatePost, deletePost,updatePostLike } from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/creates", createPost);
router.patch("/:id", updatePost);
router.delete('/:id',deletePost)
router.patch("/like/:id", updatePostLike)

export default router;
