import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    marginBottom: '-10px',
    marginLeft: '15px',
    marginTop: '10px',
    backgroundColor: '#ffffff',
    width: '300px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
  },
});

const TaskEditField = ({ value, onChange }) => {
// const TaskEditField = ({ value, onChange, cancelEditState }) => {
// const TaskEditField = ({ value, onChange, taskEditError }) => {
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
      // onBlur={cancelEditState}
      // onBlur={(e) => console.log(e)}
      // error={taskEditError}
      // helperText="Text Field Should Not Be Empty"
    />
  );
};

TaskEditField.propTypes = {
  onChange: PropTypes.func,
  // cancelEditState: PropTypes.func,
  value: PropTypes.string,
  // taskEditError: PropTypes.bool,
};

TaskEditField.defaultProps = {
  onChange: null,
  cancelEditState: null,
  value: '',
  taskEditError: null,
};

export default TaskEditField;
