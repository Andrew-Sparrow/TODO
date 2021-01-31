import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import TaskItem from './TaskItem';

const Tasks = ({ tasks }) => (
  <List component="ul" aria-label="list of tasks">
    {tasks.map((task) => <TaskItem key={task.id} text={task.text} />)}
  </List>
);

Tasks.propTypes = {
  tasks: PropTypes.instanceOf(Array),
};

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
