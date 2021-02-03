import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Check = ({ id, completed, onToggleCompleted }) => {
  const [checked, setChecked] = React.useState(completed);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const style = {
    padding: '20px 0',
    color: '#3c3',
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'checkbox' }}
      style={style}
      onClick={() => onToggleCompleted(id)}
    />
  );
};

Check.propTypes = {
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  onToggleCompleted: PropTypes.func,
};

Check.defaultProps = {
  id: null,
  isCompleted: false,
  onToggleCompleted: null,
};

export default Check;
