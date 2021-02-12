import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Check = ({ id, completed, onToggleCompleted }) => {
  const handleChange = (evt) => {
    onToggleCompleted(id, evt.target.checked);
  };

  const style = {
    padding: '20px 0',
    color: '#3c3',
  };

  return (
    <Checkbox
      checked={completed}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'checkbox' }}
      style={style}
    />
  );
};

Check.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  onToggleCompleted: PropTypes.func,
};

Check.defaultProps = {
  id: null,
  completed: false,
  onToggleCompleted: null,
};

export default Check;
