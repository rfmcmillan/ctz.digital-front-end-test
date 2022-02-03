import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Terms = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      width: "75vw",
      [theme.breakpoints.down("lg")]: {
        width: "90vw",
      },
    },
  });
  const classes = useStyles();

  const onFileChange = (event) => {
    // Update the state
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <Paper elevation={5} className={classes.root}>
      <Typography>Terms of Service</Typography>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload</button>
      </div>
      {fileData()}
    </Paper>
  );
};

Terms.propTypes = {
  data: PropTypes.object,
};

export default Terms;
