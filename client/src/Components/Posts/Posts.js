import React from "react";
import Post from "./components/Post";

import { connect } from "react-redux";
import useStyles from "./style.js";

import { CircularProgress, Grid } from "@material-ui/core";

const Posts = (props) => {
  const classes = useStyles();

  const renderPosts = () => {
    return (
      <>
        {props.posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
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

export default connect(mapStateToProps, null)(Posts);
