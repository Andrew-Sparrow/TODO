import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Check = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const style = {
    padding: '20px 0',
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'checkbox' }}
      style={style}
    />
  );
};

export default Check;
