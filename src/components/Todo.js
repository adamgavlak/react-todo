import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  renderActionSection() {
    return (
      <td>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  renderTask() {
    const { task, isComplete } = this.props;

    const taskStyle = {
      color: isComplete ? 'green' : 'red',
      cursor: 'pointer'
    }

    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTask()}
        {this.renderActionSection()}
      </tr>
    );
  }
}

export default Todo;
