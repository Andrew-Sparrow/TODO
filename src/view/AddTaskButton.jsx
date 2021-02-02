import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const ColorButton = withStyles(() => ({
  root: {
    color: green[500],
    border: '2px solid',
    borderColor: green[500],
    backgroundColor: 'white',
    padding: '13px 40px',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

const AddTaskButton = ({ onClick, disabled }) => {
  const classes = useStyles();

  return (
    <ColorButton
      variant="outlined"
      onClick={onClick}
      className={classes.margin}
      color="primary"
      disabled={disabled}
    >
      Add
    </ColorButton>
  );
};

AddTaskButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

AddTaskButton.defaultProps = {
  onClick: null,
  disabled: null,
};

export default AddTaskButton;
