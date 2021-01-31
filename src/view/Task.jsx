import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Check from './Check';

const Task = ({ text }) => {
  const style = {
    display: 'flex',
    justifyContent: 'start',
    padding: '20px 0',
  };

  return (
    <ListItem component="li" style={style}>
      <Check />
      <Box>{text}</Box>
    </ListItem>
  );
};

Task.propTypes = {
  text: PropTypes.string,
};

Task.defaultProps = {
  text: null,
};

export default Task;
