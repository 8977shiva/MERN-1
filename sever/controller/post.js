import PostMessage from "../model/postMessage.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost); //  status code 201: successfully created
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const params = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(params.id))
    return res.status(404).send("No post with that id");
  const updatePost = await PostMessage.findByIdAndUpdate(params.id, post, {
    new: true,
  });
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const params = req.params;
  if (!mongoose.Types.ObjectId.isValid(params.id))
    return res.status(404).send("No post with that id");
   await  PostMessage.findByIdAndRemove(params.id);
   res.json({message:'Post deleted success'})
}

export const  updatePostLike = async  (req, res) => {
  const params = req.params;
  if (!mongoose.Types.ObjectId.isValid(params.id))
    return res.status(404).send("No post with that id");
   const  post  = await  PostMessage.findById(params.id);
   const  updatedPost  = await  PostMessage.findByIdAndUpdate(params.id, {likeCount:post.likeCount +1}, {new:true});
   res.json(updatedPost)
}