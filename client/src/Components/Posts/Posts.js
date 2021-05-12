import React from "react";
import Post from "./components/Post";

import { connect } from "react-redux";
import useStyles from "./style.js";

import { CircularProgress, Grid } from "@material-ui/core";
import { selectPost } from "./postAction";

const Posts = (props) => {
  const classes = useStyles();

  const renderPosts = () => {
    return (
      <>
        {props.posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} selectPost={props.selectPost} />
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
  posts: state.postReducer.posts,
});
const mapDispatchToProps = {
  selectPost: selectPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
