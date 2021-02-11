import React, { useCallback, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const AddNewTaskField = ({ value, onChange, cancelAddNewTaskChanges }) => {
  const escFunction = useCallback((evt) => {
    if (evt.keyCode === 27) {
      cancelAddNewTaskChanges(evt);
    }
  }, [cancelAddNewTaskChanges]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <TextField
      label="Task"
      value={value}
      style={{ width: '350px' }}
      placeholder="Add New Task"
      id="outlined"
      variant="outlined"
      aria-label="new task input field"
      size="medium"
      autoFocus
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

AddNewTaskField.propTypes = {
  onChange: PropTypes.func,
  cancelAddNewTaskChanges: PropTypes.func,
  value: PropTypes.string,
};

AddNewTaskField.defaultProps = {
  onChange: null,
  cancelAddNewTaskChanges: null,
  value: '',
};

export default AddNewTaskField;
