import React, { useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import TaskEditForm from './TaskEditForm';
import Check from './Check';

const TaskItem = ({
  id, text, onDelete, isCompleted, onToggleCompleted, editTaskText,
}) => {
  const [stateEdit, setStateEdit] = useState({ isEdit: false });

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    paddingTop: '20px',
  };

  const boxStyle = {
    display: 'flex',
  };

  const onEditTask = (evt) => {
    evt.preventDefault();
    setStateEdit({ isEdit: true });
  };

  const cancelEditState = (evt) => {
    evt.preventDefault();
    setStateEdit({ isEdit: false });
  };

  return (
    <ListItem component="li" style={containerStyle} onBlur={cancelEditState}>
      <Box style={boxStyle}>
        <Check
          id={id}
          completed={isCompleted}
          onToggleCompleted={onToggleCompleted}
        />
        {stateEdit.isEdit
          ? (
            <TaskEditForm
              id={id}
              editTaskText={editTaskText}
              value={text}
              inputProps={{ 'aria-label': 'edit task' }}
              cancelEditState={cancelEditState}
            />
          )
          : (
            <Box
              onClick={onEditTask}
              style={{ padding: '20px 35px', textDecoration: isCompleted && 'line-through' }}
            >
              {text}
            </Box>
          )}
      </Box>
      <Button onClick={() => onDelete(id)}>
        <CloseIcon
          component="svg"
          color="secondary"
          titleAccess="close button"
          aria-label="close button"
        />
      </Button>
    </ListItem>
  );
};

TaskItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onDelete: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  editTaskText: PropTypes.func,
  isCompleted: PropTypes.bool,
};

TaskItem.defaultProps = {
  id: null,
  text: null,
  onDelete: null,
  onToggleCompleted: null,
  editTaskText: null,
  isCompleted: false,
};

export default TaskItem;
