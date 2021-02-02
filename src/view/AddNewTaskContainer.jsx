import React from 'react';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';
import AddTaskButton from './AddTaskButton';
import AddNewTaskField from './AddNewTaskField';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid',
  borderRadius: 3,
  backgroundColor: '#ffffff',
};

export default class AddNewTaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  add() {
    const { onButtonClick } = this.props;
    const { value } = this.state;

    onButtonClick(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <Box style={style}>
        <AddNewTaskField name="textField" value={value} onChange={this.handleChange} />
        <AddTaskButton disabled={!value} add={this.add} />
      </Box>
    );
  }
}

AddNewTaskContainer.propTypes = {
  onButtonClick: PropTypes.func,
};

AddNewTaskContainer.defaultProps = {
  onButtonClick: null,
};
