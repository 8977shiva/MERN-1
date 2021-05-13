import React, {useEffect} from "react";
import Post from "./components/Post";

import { connect } from "react-redux";
import useStyles from "./style.js";

import { CircularProgress, Grid } from "@material-ui/core";
import {selectPost, deleteSelectedPost, likePost, getPost} from "./postAction";

const Posts = (props) => {
  const classes = useStyles();
  useEffect(()=>{
     props.getPost()
  },[])

  const renderPosts = () => {
    return (
      <>
        {props.posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post
              post={post}
              selectPost={props.selectPost}
              deleteSelectedPost={props.deleteSelectedPost}
              likePost={props.likePost}
            />
          </Grid>
        ))}
      </>
    );
  };

  return !props.posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems={"stretch"}
      spacing={3}
    >
      {renderPosts()}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts
});

const mapDispatchToProps = {
  selectPost: selectPost,
  deleteSelectedPost: deleteSelectedPost,
  likePost:likePost,
  getPost:getPost

};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
