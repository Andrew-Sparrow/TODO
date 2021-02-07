import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TaskEditField = ({ value, onChange }) => (
  <TextField
    type="text"
    id="outlined"
    variant="outlined"
    aria-label="new task input field"
    size="medium"
    autoFocus
    onChange={onChange}
    value={value}
  />
);

TaskEditField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TaskEditField.defaultProps = {
  onChange: null,
  value: '',
};

export default TaskEditField;
