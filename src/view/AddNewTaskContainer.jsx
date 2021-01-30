import React from 'react';
import Box from '@material-ui/core/Box';
import AddTaskButton from './AddTaskButton';
import AddNewTaskField from './AddNewTaskField';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid',
  borderRadius: 3,
  backgroundColor: '#ffffff',
};

const AddNewTaskContainer = () => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <Box style={style}>
      <AddNewTaskField />
      <AddTaskButton onClick={onClick} />
    </Box>
  );
};

export default AddNewTaskContainer;
