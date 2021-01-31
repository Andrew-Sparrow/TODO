import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import TaskItem from './TaskItem';

const Tasks = ({ tasks, onDelete }) => (
  <List component="ul" aria-label="list of tasks">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        onDelete={onDelete}
        text={task.text}
      />
    ))}
  </List>
);

Tasks.propTypes = {
  tasks: PropTypes.instanceOf(Array),
  onDelete: PropTypes.func,
};

Tasks.defaultProps = {
  tasks: [],
  onDelete: null,
};

export default Tasks;
