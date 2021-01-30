import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const Task = ({ id, text }) => (
  <ListItem key={id} component="li">{text}</ListItem>
);

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
};

Task.defaultProps = {
  id: null,
  text: null,
};

export default Task;
