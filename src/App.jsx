import React, { useState, useEffect } from 'react';
import nanoid from 'nanoid';

import './App.css';

import {
  Container,
} from '@material-ui/core';

import AddNewTaskContainer from './view/AddNewTaskContainer';

import Header from './view/Header';
import Tasks from './view/Tasks';
import NoTasks from './view/NoTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const containerStyle = {
    backgroundColor: '#CDDFF1',
    height: '100vh',
    border: 'solid 1px black',
    borderRadius: '5px',
    padding: '50px',
    paddingBlockStart: '25px',
  };

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const addTask = (task) => {
    const id = `id-${nanoid(7)}`;
    const isCompleted = false;

    const newTask = { id, isCompleted, ...task };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) => (task.id === id
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
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleCompleted={toggleCompleted} />
        : <NoTasks />}
    </Container>
  );
};

export default App;
