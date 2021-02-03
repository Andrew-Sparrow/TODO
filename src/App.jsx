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

const originTasks = [];

const App = () => {
  const [listTasks, setTasks] = useState(originTasks);

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
    const isCompleted = false;

    const newTask = { id, isCompleted, ...task };

    setTasks([...listTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(listTasks.filter((task) => id !== task.id));
  };

  const toggleCompleted = (id) => {
    setTasks(listTasks.map((task) => (task.id === id
      ? { ...task, isCompleted: !task.completed }
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
      {originTasks.length > 0
        ? <Tasks tasks={listTasks} onDelete={deleteTask} onToggleCompleted={toggleCompleted} />
        : <NoTasks />}
    </Container>
  );
};

export default App;
