import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { connect } from "react-redux";

import { createPost } from "../Posts/postAction";
import useStyles from "./style";

const Form = (props) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPost(postData);
    handleClearForm();
  };

  const handleChange = (e, type) => {
    const _postData = { ...postData };
    if (type === "file") {
      _postData["selectedFile"] = e;
      // setPostData({ ...postData, selectedFile: e });
      setPostData(_postData);
    } else {
      _postData[e.target.name] = e.target.value;
      setPostData(_postData);
    }
    console.log(_postData);
  };
  const handleClearForm = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant={"h6"}>Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => handleChange(e)}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => handleChange(base64, "file")}
          ></FileBase>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          className={classes.buttonSubmit}
        >
          Post
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={handleClearForm}
          className={classes.buttonClear}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};
const mapDispatchToProps = {
  createPost: createPost,
};
export default connect(null, mapDispatchToProps)(Form);
