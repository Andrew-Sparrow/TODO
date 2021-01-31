import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const Task = ({ text }) => (
  <ListItem component="li">{text}</ListItem>
);

Task.propTypes = {
  text: PropTypes.string,
};

Task.defaultProps = {
  text: null,
};

export default Task;
