import React from 'react';
import Box from '@material-ui/core/Box';
import AddTaskButton from './AddTaskButton';

const style = {
  border: '1px solid',
  borderRadius: 3,
};

const AddNewTaskContainer = () => (
  <Box display="flex" style={style} p={1} bgcolor="background.paper">
    <AddTaskButton />
  </Box>
);

export default AddNewTaskContainer;
