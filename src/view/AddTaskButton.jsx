import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
  border: '2px solid #33cc33',
  borderRadius: 3,
  color: '#33cc33',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(51, 204, 51, .2)',
};

const AddTaskButton = () => (
  <Button style={style}>Add</Button>
);

export default AddTaskButton;
