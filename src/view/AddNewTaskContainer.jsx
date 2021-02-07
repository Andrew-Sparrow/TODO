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

// export default class AddNewTaskContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//     this.state = { text: '' };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.add = this.add.bind(this);
//   }
//
//   handleChange(evt) {
//     this.setState({ text: evt.target.text });
//   }
//
//   add() {
//     const { onButtonClick } = this.props;
//     const { text } = this.state;
//
//     onButtonClick(text);
//     this.setState({ text: '' });
//   }
//
//   render() {
//     const { text } = this.state;
//
//     return (
//       <Box style={style}>
//         <AddNewTaskField name="textField" text={text} onChange={this.handleChange} />
//         <AddTaskButton disabled={!text} add={this.add} />
//       </Box>
//     );
//   }
// }

const AddNewTaskContainer = (props) => {
  const [text, setText] = React.useState('');

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const { onAdd } = props;

    onAdd({ text });
    setText('');
  };

  return (
    <form>
      <Box style={style}>
        <AddNewTaskField
          type="text"
          name="textField"
          value={text}
          onChange={handleChange}
        />
        <AddTaskButton disabled={!text} onSubmit={onSubmit} />
      </Box>
    </form>
  );
};

AddNewTaskContainer.propTypes = {
  onAdd: PropTypes.func,
};

AddNewTaskContainer.defaultProps = {
  onAdd: null,
};

export default AddNewTaskContainer;
