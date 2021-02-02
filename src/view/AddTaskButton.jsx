import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

// const style = {
//   border: '2px solid #33cc33',
//   borderRadius: 3,
//   color: '#33cc33',
//   height: 48,
//   padding: '26px 34px',
//   boxShadow: '0 3px 5px 2px rgba(51, 204, 51, .2)',
//   maxWidth: '380px',
// };

const AddTaskButton = ({ onClick, disabled }) => (
  <Button variant="outlined" onClick={onClick} color="primary" disabled={disabled}>Add</Button>
);

AddTaskButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

AddTaskButton.defaultProps = {
  onClick: null,
  disabled: null,
};

export default AddTaskButton;
