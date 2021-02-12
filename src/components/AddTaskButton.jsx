import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { green } from '@material-ui/core/colors';

import { makeStyles, withStyles } from '@material-ui/core/styles';

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

const AddTaskButton = ({ disabled }) => {
  const classes = useStyles();

  return (
    <ColorButton
      type="submit"
      variant="outlined"
      className={classes.margin}
      color="primary"
      disabled={disabled}
      value="add"
    >
      Add
    </ColorButton>
  );
};

AddTaskButton.propTypes = {
  disabled: PropTypes.bool,
};

AddTaskButton.defaultProps = {
  disabled: null,
};

export default AddTaskButton;
