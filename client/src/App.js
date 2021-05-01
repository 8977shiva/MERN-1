import { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { getPost } from "./Components/Posts/postAction";

import memories from "./Components/attachments/images/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";

import useStyles from "./styles";

function App(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getPost();
  }, []);

  console.log(props.posts);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  posts: state.postReducer.post,
});

const mapDispatchToProps = {
  getPost: getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
