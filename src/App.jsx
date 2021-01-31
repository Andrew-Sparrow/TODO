import React, { useState } from 'react';

import './App.css';

import {
  Container,
} from '@material-ui/core';

import AddNewTaskContainer from './view/AddNewTaskContainer';

import Header from './view/Header';
import Tasks from './view/Tasks';

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

function App() {
  const [listTasks, setTasks] = useState(tasks);

  const containerStyle = {
    backgroundColor: '#CDDFF1',
    height: '100vh',
    border: 'solid 1px black',
    borderRadius: '5px',
    padding: '50px',
    paddingBlockStart: '25px',
  };

  const deleteTask = (id) => {
    setTasks(listTasks.filter((task) => id !== task.id));
  };

  return (
    <Container
      component="div"
      maxWidth="sm"
      style={containerStyle}
    >
      <Header />
      <AddNewTaskContainer />
      <Tasks tasks={listTasks} onDelete={deleteTask} />
    </Container>
  );
}

export default App;
