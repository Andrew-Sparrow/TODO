import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import AddTaskButton from './AddTaskButton';
import AddNewTaskField from './AddNewTaskField';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
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

const AddNewTaskContainer = ({ onAdd }) => {
  const [text, setText] = React.useState('');

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (text.trim()) {
      onAdd({ text });
      setText('');
    }
  };

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
    },
  }));

  const cancelAddNewTaskChanges = () => {
    setText('');
  };

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit} style={style}>
      <AddNewTaskField
        type="text"
        name="text"
        label="Full Name"
        value={text}
        onChange={handleChange}
        cancelAddNewTaskChanges={cancelAddNewTaskChanges}
      />
      <AddTaskButton
        type="submit"
        variant="outlined"
        className={classes.margin}
        disabled={!text}
      >
        Add
      </AddTaskButton>
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
