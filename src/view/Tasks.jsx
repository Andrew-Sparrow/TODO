import React, { useState } from 'react';

import List from '@material-ui/core/List';
import Task from './Task';

const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    reminder: false,
  },
];

const Tasks = () => {
  const [listTasks] = useState(tasks);

  return (
    <List component="nav" aria-label="list of tasks">
      {listTasks.map((task) => <Task task={task} />)}
    </List>
  );
};

export default Tasks;
