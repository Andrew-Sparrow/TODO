import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Check from './Check';

const TaskItem = ({ id, text, onDelete }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
  };

  const boxStyle = {
    display: 'flex',
  };

  const taskTextStyle = {
    padding: '18px 35px',
  };

  return (
    <ListItem component="li" style={containerStyle}>
      <Box style={boxStyle}>
        <Check />
        <Box style={taskTextStyle}>{text}</Box>
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
  text: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};

TaskItem.defaultProps = {
  id: null,
  text: null,
  onDelete: null,
};

export default TaskItem;
