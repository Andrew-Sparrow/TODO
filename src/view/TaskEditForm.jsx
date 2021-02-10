import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import TaskEditField from './TaskEditField';

const TaskEditForm = ({
  id, isCompleted, value, editTaskText, cancelEditState,
}) => {
  const [newText, setText] = React.useState(value);

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  // let taskEditError = false;

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (newText) {
      editTaskText(id, newText);
      cancelEditState(evt);
    }
  };

  const escFunction = useCallback((evt) => {
    if (evt.keyCode === 27) {
      cancelEditState(evt);
    }
  }, [cancelEditState]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const editItem = (
    <form
      onSubmit={onSubmit}
      onBlur={cancelEditState}
    >
      <TaskEditField
        style={{ padding: '18px 35px', textDecoration: isCompleted && 'line-through' }}
        value={newText}
        onChange={handleChange}
        name="task"
        cancelEditState={cancelEditState}
        // taskEditError={taskEditError}
      >
        {newText}
      </TaskEditField>
    </form>
  );

  return (editItem);
};

TaskEditForm.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  onDelete: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  cancelEditState: PropTypes.func,
  isCompleted: PropTypes.bool,
};

TaskEditForm.defaultProps = {
  id: null,
  text: null,
  onDelete: null,
  onToggleCompleted: null,
  cancelEditState: null,
  isCompleted: false,
};

export default TaskEditForm;
