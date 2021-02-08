import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    color: 'red',
    marginBottom: '-10px',
    marginLeft: '20px',
    marginTop: '10px',
  },
});

const TaskEditField = ({ value, onChange, taskEditError }) => {
  const classes = useStyles();

  return (
    <TextField
      classes={{
        root: classes.root,
      }}
      type="text"
      id="outlined"
      variant="outlined"
      aria-label="new task input field"
      size="small"
      autoFocus
      onChange={onChange}
      value={value}
      error={!!taskEditError}
      helperText="Incorrect entry"
    />
  );
};

TaskEditField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  taskEditError: PropTypes.string,
};

TaskEditField.defaultProps = {
  onChange: null,
  value: '',
  taskEditError: null,
};

export default TaskEditField;
