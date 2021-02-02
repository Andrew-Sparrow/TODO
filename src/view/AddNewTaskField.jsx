import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const AddNewTaskField = ({ value, onChange }) => (
  <TextField
    label="Task"
    id="outlined"
    variant="outlined"
    aria-describedby="new task input field"
    size="medium"
    onChange={onChange}
    value={value}
    InputLabelProps={{
      shrink: true,
    }}
  />
);

AddNewTaskField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

AddNewTaskField.defaultProps = {
  onChange: null,
  value: null,
};

export default AddNewTaskField;
