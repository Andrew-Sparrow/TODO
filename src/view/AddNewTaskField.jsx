import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const AddNewTaskField = ({ value, onChange }) => (
  <TextField
    label="Task"
    type="text"
    placeholder="Add New Task"
    id="outlined"
    variant="outlined"
    aria-label="new task input field"
    size="medium"
    autoFocus
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
  value: '',
};

export default AddNewTaskField;
