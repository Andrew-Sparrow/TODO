import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Check from './Check';

const TaskItem = ({
  id, text, onDelete, isCompleted, onToggleCompleted,
}) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
  };

  const boxStyle = {
    display: 'flex',
  };

  return (
    <ListItem component="li" style={containerStyle}>
      <Box style={boxStyle}>
        <Check id={id} completed={isCompleted} onToggleCompleted={onToggleCompleted} />
        <Box style={{ padding: '18px 35px', textDecoration: isCompleted && 'line-through' }}>{text}</Box>
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
  isCompleted: PropTypes.bool,
};

TaskItem.defaultProps = {
  id: null,
  text: null,
  onDelete: null,
  onToggleCompleted: null,
  isCompleted: false,
};

export default TaskItem;
