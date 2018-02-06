import React, { Component } from 'react';

class TodoForm extends Component {

  handleCreate(event) {
    event.preventDefault();

    this.props.createTask(this.refs.todoInput.value);
    this.refs.todoInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" ref="todoInput" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
