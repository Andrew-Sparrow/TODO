import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import {
  Container,
} from '@material-ui/core';

import AddNewTaskContainer from './view/AddNewTaskContainer';

import Header from './view/Header';
import Tasks from './view/Tasks';
import NoTasks from './view/NoTasks';
import Footer from './view/Footer';
import About from './view/About';

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
    const tasksFromServer = await response.json();

    return tasksFromServer;
  };

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const task = await response.json();

    return task;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const addTask = async (task) => {
    const isCompleted = false;
    const newTask = { isCompleted, ...task };

    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    const taskFromServer = await response.json();

    setTasks([...tasks, taskFromServer]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => id !== task.id));
  };

  const toggleCompleted = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, isCompleted: !taskToToggle.isCompleted };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const taskFromServer = await response.json();

    setTasks(tasks.map(
      (task) => (task.id === id
        ? { ...task, isCompleted: taskFromServer.completed }
        : task),
    ));
  };

  return (
    <Router>
      <Container
        component="div"
        maxWidth="sm"
        style={containerStyle}
      >
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddNewTaskContainer onAdd={addTask} />
              {tasks.length > 0
                ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleCompleted={toggleCompleted} />
                : <NoTasks />}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
