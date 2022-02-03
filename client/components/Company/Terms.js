import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Terms = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const theme = useTheme();

  const useStyles = makeStyles({
    choose: { fontSize: "1rem" },
    h2: { fontSize: "1.25rem" },
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      width: "33vw",
    },
  });
  const classes = useStyles();

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", selectedFile, selectedFile.name);
    console.log(selectedFile);
    // axios.post("api/uploadfile", formData);
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <Typography variant="h2" className={classes.h2}>
            File Details:
          </Typography>

          <Typography variant="body1">
            File Name: {selectedFile.name}
          </Typography>

          <Typography variant="body1">
            File Type: {selectedFile.type}
          </Typography>

          <Typography variant="body1">
            Last Modified: {selectedFile.lastModifiedDate.toDateString()}
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <Typography className={classes.choose} variant="h4">
            Choose before Pressing the Upload button
          </Typography>
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
