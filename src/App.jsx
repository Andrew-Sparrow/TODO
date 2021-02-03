import React, { useState } from 'react';
import nanoid from 'nanoid';

import './App.css';

import {
  Container,
} from '@material-ui/core';

import AddNewTaskContainer from './view/AddNewTaskContainer';

import Header from './view/Header';
import Tasks from './view/Tasks';
import NoTasks from './view/NoTasks';

const tasks = [
  {
    id: '1',
    text: 'Doctors Appointment',
    completed: true,
  },
  {
    id: '2',
    text: 'Meeting at School',
    completed: true,
  },
  {
    id: '3',
    text: 'Food Shopping',
    completed: false,
  },
];

const App = () => {
  const [listTasks, setTasks] = useState(tasks);

  const containerStyle = {
    backgroundColor: '#CDDFF1',
    height: '100vh',
    border: 'solid 1px black',
    borderRadius: '5px',
    padding: '50px',
    paddingBlockStart: '25px',
  };

  const addTask = (task) => {
    const id = `id-${nanoid(7)}`;

    const newTask = { id, ...task };
    setTasks([...listTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(listTasks.filter((task) => id !== task.id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) => (task.id === id
      ? { ...task, completed: !task.completed }
      : task)));
  };

  return (
    <Container
      component="div"
      maxWidth="sm"
      style={containerStyle}
    >
      <Header />
      <AddNewTaskContainer onAdd={addTask} />
      {tasks.length > 0
        ? <Tasks tasks={listTasks} onDelete={deleteTask} onToggleCompleted={toggleCompleted} />
        : <NoTasks />}
    </Container>
  );
};

export default App;
