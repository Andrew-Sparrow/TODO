import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '300px',
    display: 'block',
    borderRadius: 3,
    marginBottom: '-10px',
    marginLeft: '15px',
    marginTop: '10px',
    backgroundColor: '#ffffff',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'anywhere',
  },
});

const TaskEditField = ({ value, onChange, errorState }) => {
  const classes = useStyles();

  return (
    <TextField
      classes={{
        root: classes.root,
      }}
      aria-describedby="new task input field"
      size="small"
      onChange={onChange}
      value={value}
      autoFocus
      error={errorState}
      helperText={errorState && 'Text Field Should Not Be Empty'}
      label={errorState && 'Error'}
    />
  );
};

TaskEditField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  errorState: PropTypes.bool,
};

TaskEditField.defaultProps = {
  onChange: null,
  value: '',
  errorState: false,
};

export default TaskEditField;
