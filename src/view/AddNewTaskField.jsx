import React from 'react';
import TextField from '@material-ui/core/TextField';

const AddNewTaskField = () => (
  <TextField
    label="Task"
    id="outlined"
    variant="outlined"
    aria-describedby="new task input field"
    size="medium"
    InputLabelProps={{
      shrink: true,
    }}
  />
);

export default AddNewTaskField;
