import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import TaskItem from './TaskItem';

const Tasks = ({
  tasks, onDelete, onToggleCompleted, editTaskText,
}) => (
  <List component="ul" aria-label="list of tasks">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        onDelete={onDelete}
        onToggleCompleted={onToggleCompleted}
        text={task.text}
        isCompleted={task.isCompleted}
        editTaskText={editTaskText}
      />
    ))}
  </List>
);

Tasks.propTypes = {
  tasks: PropTypes.instanceOf(Array),
  onDelete: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  editTaskText: PropTypes.func,
};

Tasks.defaultProps = {
  tasks: [],
  onDelete: null,
  onToggleCompleted: null,
  editTaskText: null,
};

export default Tasks;
